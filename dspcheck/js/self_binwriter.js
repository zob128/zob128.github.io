class BinWriter{
    /**
     * 
     * @param {Array} stream array or arraybufferType
     */
    constructor(stream=[]){
        if (!(stream instanceof Array)) {
            stream = Array.from(stream);
        }
        this.src = stream;
    }
    get u8array(){
        return new Uint8Array(this.src);
    }
    /**
     * 
     * @param {Array} array need Array like U8Array
     */
    insertArray(array, pos = this.src.length, isCover = false){
        Array.prototype.splice.apply(this.src,[pos,isCover?array.length:0].concat(array));
        return array.length;
    }
    write(num, byteLen, pos = this.src.length, isCover = true){
        var numArray = [];
        while (num) {
            numArray.push(num & 0xff);
            num >>= 8;
        }
        if (byteLen) {
            while (numArray.length < byteLen) {
                numArray.push(0);
            }
        }
        Array.prototype.splice.apply(this.src,[pos,isCover?numArray.length:0].concat(numArray));
        // Array.prototype.push.apply(this.src,numArray);
    }
}