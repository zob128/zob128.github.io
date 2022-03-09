class BinReader{
    /**
     * 
     * @param {Uint8Array} src 
     */
    constructor(src){
        this.src = src;
        this.point = 0;
        this.bitpos = 0;
    }
    read(offset){
        this.point += offset;
        return (this.src.slice(this.point-offset,this.point));
    }
    readbit(offset){
        var bitpos = this.bitpos;
        var a = offset + bitpos;
        var afpos = a % 8;
        var bytes_len = Math.ceil(a/8);
        var stream = this.read(bytes_len);
        var stream_s = Array.from(stream).map((i)=>{
            var c = i.toString(2);
            for (let j = c.length; j < 8; j++) {
                c = '0' + c;
            }
            return c;
        }).join('').slice(bitpos,a);
        this.point-=(afpos?1:0);
        this.bitpos = afpos;
        return Number('0b'+stream_s);
    }
    readBoolean(){
        return this.src[this.point++]?true:false;
    }
    readByte(){
        return this.src[this.point++];
    }
    readUInt8(){
        return this.src[this.point++];
    }
    readInt16(){
        var result = (this.src[this.point++]|this.src[this.point++]<<8);
        return result>0x7fff?result-0x10000:result;
    }
    readInt32(){
        return (this.src[this.point++]
            |this.src[this.point++]<<8
            |this.src[this.point++]<<16
            |this.src[this.point++]<<24);
    }
    readUInt32(){
        return (this.src[this.point++]
            +this.src[this.point++]*Math.pow(2,8)
            +this.src[this.point++]*Math.pow(2,16)
            +this.src[this.point++]*Math.pow(2,24));
    }
    readInt64(){
        return this.readUInt32() 
            + this.readInt32()*Math.pow(2,32);
    }
    readUInt64(){
        return this.readUInt32() 
            + this.readUInt32()*Math.pow(2,32);
    }
    _readInt16(){
        return (this.src[this.point++]<<8
            |this.src[this.point++])
    }
    _readInt24(){
        return (this.src[this.point++]<<16
            |this.src[this.point++]<<8
            |this.src[this.point++])
    }
    _readInt32(){
        return (this.src[this.point++]<<24
            |this.src[this.point++]<<16
            |this.src[this.point++]<<8
            |this.src[this.point++]);
    }
    _readUInt32(){
        return (this.src[this.point++]*Math.pow(2,24)
            +this.src[this.point++]*Math.pow(2,16)
            +this.src[this.point++]*Math.pow(2,8)
            +this.src[this.point++]);
    }
    readSingle(){
        var array = Array.from(this.read(4));
        if (array.join() == [0,0,0,0]) {
            return 0;
        }
        var str = array.reverse().map((i)=>{
            var str = i.toString(2);
            return '0'.repeat(8-str.length) + str;
        }).join("");
        var sign = str[0]?1:-1,
            mov = '0b'+str.slice(1,9)-'0x7f',
            tail = '1'+str.slice(9),
            result = 0;
        for (let i = 0; i < tail.length; i++) {
            result += tail[i] * Math.pow(2,mov--);
        }
        return result * sign;
    }
    readDouble(){
        var str = Array.from(this.read(8)).reverse().map((i)=>{
            var str = i.toString(2);
            return '0'.repeat(8-str.length) + str;
        }).join("");
        var sign = str[0]?1:-1,
            mov = '0b'+str.slice(1,12)-'0x3ff',
            tail = '1'+str.slice(12),
            result = 0;
        for (let i = 0; i < tail.length; i++) {
            result += tail[i] * Math.pow(2,mov--);
        }
        return result * sign;
    }
    readString(offset) {
        if (!offset) {
            offset = this.readUInt8();
        }
        var str = '';
        var array = this.read(offset)
        array.forEach(i => {str += "%"+i.toString(16)});
        var result = decodeURI(str.toUpperCase())
                    .replace(/%3D/g,'=')
                    .replace(/%2B/g,'\+')
                    .replace(/%3A/g,':')
                    .replace(/%2F/g,'/')
                    .replace(/%2C/g,',')
                    ;
        return result;
    }
    peek(offset){
        return (this.src.slice(this.point,this.point+offset));
    }
    _peekInt32(offset){
        var p = offset+this.point;
        return (this.src[p++]<<24
            |this.src[p++]<<16
            |this.src[p++]<<8
            |this.src[p++]);
    }
    _peekUInt32(offset){
        var p = offset+this.point;
        return (this.src[p++]*Math.pow(2,24)
            +this.src[p++]*Math.pow(2,16)
            +this.src[p++]*Math.pow(2,8)
            +this.src[p++]);
    }
    /**
     * 
     * @param {number} offset 
     * @param {number} whence 
     */
    seek(offset, whence=1){
        switch (whence) {
            case 0:
                this.point = 0
                break;
            case 2:
                this.point = this.src.length
                break;
        }
        this.point += offset;
    }
    readChar(offset){
        var result = "";
        this.read(offset).forEach(i => {
            result += String.fromCharCode(i);
        });
        return result;
    }
}

/**
11100101 11000111 10000110 01111000

offset - - bitpos(->((bitpos+offset)%8))
3 111 0->3 0->3
6 00101 1 3->9 3->1
17 1000111 10000110 01 9->26 1->2

bitpos(0~7)=0
point(byte=8) = 12

readbit(offset=3){
    rpos = bitpos + offset
    bitpos = (bitpos + offset) % 8
    bytes(=1) = ceil(offset / 8)
    stream(=[0b11100101,]) = read(bytes)

    result(=0b00000111) = stream[point]>>>(8-offset)
}

readbit(offset=3){
    bytes = (stream[point],1)
    bytes[0]&(0b11100000)
}
bitpos=3
readbit(offset=6){
    n = ceil((offset + bitpos) / 8)
    bitpos = (bitpos + offset) % 8
    bytes = (stream[point],n)
    bytes[0]&(0b00011111)
    bytes[1]&(0b10000000)
}
bitpos=1
readbit(offset=17){
    bytes = (stream[point],3)
    bytes[0]&(0b01111111)
    bytes[1]&(0b11111111)
    bytes[2]&(0b11000000)
}
readbit(offset){
    bytes = (stream[point],3)
    bytes[0]&(0b01111111)
    bytes[1]&(0b11111111)
    bytes[2]&(0b11000000)
}
 */