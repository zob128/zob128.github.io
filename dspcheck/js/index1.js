class DateTime{
    constructor(time){
        this.getTime = new Date(time/10000-62135625600000).toLocaleString();
    }
    getTime
}
class AccountData{
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        var ESalePlatform = ['Standalone','Steam','WeGame'];
        stream.readInt32();
        this.platform = (ESalePlatform)[stream.readInt32()];
		this.userId = stream.readUInt64();
        this.userName = stream.readString();
		// this.detail.userName = stream.readString();
    }
}
class GameDesc{
    creationVersion = {}
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        var num = stream.readInt32();
        if (num >= 3)
		{
			this.creationTime = new DateTime(stream.readInt64()).getTime;
		}
        if (num >= 5)
		{
			if (num >= 6)
			{
				this.creationVersion.Major = stream.readInt32();
				this.creationVersion.Minor = stream.readInt32();
				this.creationVersion.Release = stream.readInt32();
				this.creationVersion.Build = stream.readInt32();
			}
			else
			{
				this.creationVersion.Build = stream.readInt32();
			}
		}
		this.galaxyAlgo = stream.readInt32();
		this.galaxySeed = stream.readInt32();
		this.starCount = stream.readInt32();
		this.playerProto = stream.readInt32();
        if (num >= 2)
		{
			this.resourceMultiplier = stream.readSingle();
		}
        if (num >= 1)
		{
			var num2 = stream.readInt32();
			this.savedThemeIds = new Array(num2);
			for (var i = 0; i < num2; i++)
			{
				this.savedThemeIds[i] = stream.readInt32();
			}
		}
        if (num >= 4)
		{
			this.achievementEnable = stream.readBoolean();
			return;
		}
    }
}
class AchievementRuntimeData_Fractinator{
    heavyHydSamp = []
    productFix = []
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        stream.readInt16();
		stream.readInt16();
		this.progress = stream.readInt64();
		// var sampCapacity = stream.readInt32();
        this.sampCapacity = stream.readInt32();
		this.factoryCount = stream.readInt32();
		// this.SetSampCapacity(sampCapacity);
		for (var i = 0; i < this.factoryCount * 600; i++)
		{
			this.heavyHydSamp[i] = stream.readInt64();
		}
		for (var j = 0; j < this.factoryCount; j++)
		{
			this.productFix[j] = stream.readInt64();
		}
    }
}
class GameAchievementData{
    runtimeDatas = {}
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        stream.readInt32();
		var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var num2 = stream.readInt32();
            var achievementRuntimeData_fractinator = new AchievementRuntimeData_Fractinator();
            achievementRuntimeData_fractinator.Import(stream);
            this.runtimeDatas[num2] = achievementRuntimeData_fractinator;
			// if (this.runtimeDatas.ContainsKey(num2) && this.runtimeDatas[num2] != null)
			// {
			// 	this.runtimeDatas[num2].Import(r);
			// }
			// else
			// {
			// 	AchievementProto achievementProto = LDB.achievements.Select(num2);
			// 	(this.runtimeAsm.CreateInstance(achievementProto.RuntimeDataName) as AchievementRuntimeData).Import(r);
			// }
		}
    }
}
class GamePrefsData{
    cameraUPos = {}
    cameraURot = {}
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        var num = stream.readInt32();
		this.cameraUPos.x = stream.readDouble();
		this.cameraUPos.y = stream.readDouble();
		this.cameraUPos.z = stream.readDouble();
		this.cameraURot.x = stream.readSingle();
		this.cameraURot.y = stream.readSingle();
		this.cameraURot.z = stream.readSingle();
		this.cameraURot.w = stream.readSingle();
        if (num >= 1)
		{
			this.reformBrushSize = stream.readInt32();
			if (num >= 4)
			{
				this.reformBrushType = stream.readInt32();
				this.reformBrushColor = stream.readInt32();
			}
			this.LoadReplicatorMultipliers(stream);
			this.detailPower = stream.readBoolean();
			this.detailVein = stream.readBoolean();
			this.detailSpaceGuide = stream.readBoolean();
			this.detailSign = stream.readBoolean();
			this.detailIcon = stream.readBoolean();
		}
        if (num >= 2)
		{
			this.LoadTutorialShowing(stream);
		}
        if (num >= 5)
		{
			this.LoadAstroNames(stream);
		}
        if (num >= 4)
		{
			this.upgradeLevel = stream.readInt32();
			this.upgradeCursorType = stream.readInt16();
			this.upgradeCursorSize = stream.readInt16();
			this.upgradeFilterFacility = stream.readBoolean();
			this.upgradeFilterBelt = stream.readBoolean();
			this.upgradeFilterInserter = stream.readBoolean();
			this.dismantleCursorType = stream.readInt16();
			this.dismantleCursorSize = stream.readInt16();
			this.dismantleFilterFacility = stream.readBoolean();
			this.dismantleFilterBelt = stream.readBoolean();
			this.dismantleFilterInserter = stream.readBoolean();
		}
        if (num >= 6)
		{
			this.dysonSphereHideFarSideInEditor = stream.readBoolean();
			return;
		}
    }
    /**
     * 
     * @param {BinReader} stream 
     */
    LoadReplicatorMultipliers(stream){
        this.replicatorMultipliers = {};
        var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var key = stream.readInt32();
			var value = stream.readInt32();
			this.replicatorMultipliers[key] = value;
		}
    }
    LoadTutorialShowing(stream){
        this.tutorialShowing = [];
        var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var item = stream.readInt32();
			this.tutorialShowing.push(item);
		}
    }
    LoadAstroNames(stream){
        this.astroNameOverride = [];
        var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var key = stream.readInt32();
			var value = stream.readString();
			this.astroNameOverride[key] = value;
		}
    }
}
class JournalData{
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        stream.readInt32();
		this.patternId = stream.readInt32();
		throw new Error('this.patternId:'+this.patternId);
		// JournalPatternProto journalPatternProto = LDB.journalPatterns.Select(this.patternId);
		var num = stream.readInt32();
		// int num2 = journalPatternProto.DataTypes.Length;
		// this.SetCapacity(num2);
		var i;
		for (i = 0; i < num2; i++)
		{
			if (i < num)
			{
				this.parameters[i] = stream.readInt64();
			}
			// else if (journalPatternProto.dataTypes[i] == EJournalDataType.PlanetPhrase1)
			// {
			// 	if (i > 0)
			// 	{
			// 		this.parameters[i] = this.parameters[i - 1];
			// 	}
			// 	else
			// 	{
			// 		this.parameters[i] = 0L;
			// 	}
			// }
		}
		while (i < num)
		{
			stream.readInt64();
			i++;
		}
    }
}
class JournalSystem{
    journals
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        stream.readInt32();
		var num = stream.readInt32();//!!!!!!!!!!!!!!!!!!!!!
		console.log('JournalSystem_num:',num);
		for (var i = 0; i < num; i++)
		{
			var journalData = new JournalData();
			journalData.Import(stream);
			this.journals.push(journalData);
		}
    }
}
class GameHistoryData{
    journalSystem = new JournalSystem()
    techStates = {}
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        var num = stream.readInt32();
		var num2 = stream.readInt32();
        this.recipeUnlocked = [];
		for (var i = 0; i < num2; i++)
		{
			var item = stream.readInt32();
			this.recipeUnlocked.push(item);
		}
        this.tutorialUnlocked = [];
		if (num >= 2)
		{
			var num3 = stream.readInt32();
			for (var j = 0; j < num3; j++)
			{
				var item2 = stream.readInt32();
				this.tutorialUnlocked.push(item2);
			}
		}
        var num4 = stream.readInt32();
        this.featureKeys = [];
        this.pinnedPlanets = {};
		for (var k = 0; k < num4; k++)
		{
			var num5 = stream.readInt32();
			this.featureKeys.push(num5);
			if (num5 > 1020000 && num5 < 1520000 && num5 < 1510000)
			{
				if (num < 3)
				{
					this.featureKeys.pop(num5);
				}
				else
				{
					this.pinnedPlanets[num5 - 1020000] = num5 - 1020000;
				}
			}
		}
        this.featureValues = {};
		if (num >= 5)
		{
			num4 = stream.readInt32();
			for (var l = 0; l < num4; l++)
			{
				var key = stream.readInt32();
				var value = stream.readInt32();
				this.featureValues[key] = value;
			}
		}
        if (num >= 6)
		{
			this.journalSystem.Import(stream);
		}
        var num6 = stream.readInt32();
		for (var m = 0; m < num6; m++)
		{
			var num7 = stream.readInt32();
			// TechProto techProto = LDB.techs.Select(num7);
			// TechState techState = default(TechState);
            var techState = {};
			techState.unlocked = stream.readBoolean();
			techState.curLevel = stream.readInt32();
			techState.maxLevel = stream.readInt32();
			techState.checkpoint = stream.point;
			techState.hashUploaded = stream.readInt64();
			techState.hashNeeded = stream.readInt64();
			// if (techProto != null)
			// {
			// 	techState.hashNeeded = techProto.GetHashNeeded(techState.curLevel);
			// 	if (techProto.Items.Length != 0 && techProto.Items[0] == 6006)
			// 	{
			// 		techState.uPointPerHash = techProto.ItemPoints[0];
			// 	}
				this.techStates[num7] = techState;
			// }
		}
        this.autoManageLabItems = stream.readBoolean();
		this.currentTech = stream.readInt32();
		if (num >= 1)
		{
			var num8 = stream.readInt32();
			this.techQueue = new Array(num8);
			var num9 = 0;
			for (var num10 = 0; num10 < num8; num10++)
			{
				var num11 = stream.readInt32();
				// if (this.techStates.ContainsKey(num11))
				// {
					this.techQueue[num9++] = num11;
				// }
			}
		}
		this.universeObserveLevel = stream.readInt32();
		if (num >= 4)
		{
			this.blueprintLimit = stream.readInt32();
		}
		this.solarSailLife = stream.readSingle();
		this.solarEnergyLossRate = stream.readSingle();
		this.useIonLayer = stream.readBoolean();
		this.inserterStackCount = stream.readInt32();
		this.logisticDroneSpeed = stream.readSingle();
		this.logisticDroneSpeedScale = stream.readSingle();
		this.logisticDroneCarries = stream.readInt32();
		this.logisticShipSailSpeed = stream.readSingle();
		this.logisticShipWarpSpeed = stream.readSingle();
		this.logisticShipSpeedScale = stream.readSingle();
		this.logisticShipWarpDrive = stream.readBoolean();
		this.logisticShipCarries = stream.readInt32();
		this.miningCostRate = stream.readSingle();
		this.miningSpeedScale = stream.readSingle();
		this.storageLevel = stream.readInt32();
		this.labLevel = stream.readInt32();
		this.techSpeed = stream.readInt32();
		this.dysonNodeLatitude = stream.readSingle();
		this.universeMatrixPointUploaded = stream.readInt64();
		this.missionAccomplished = stream.readBoolean();
		if (num >= 7)
		{
			this.stationPilerLevel = stream.readInt32();
			this.remoteStationExtraStorage = stream.readInt32();
			this.localStationExtraStorage = stream.readInt32();
			return;
		}
    }
}
class ProductStat{
	count = []
	cursor = []
	total = []
	itemId = 0
	checkpoint = {
		startpoint:0,
		endpoint:0,
		totalnum13:0,
	}
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		this.checkpoint.startpoint = stream.point;
		var num = stream.readInt32();
		var num2 = stream.readInt32();
		var num3 = 7200;
		for (var i = 0; i < num2; i++)
		{
			if (i < num3)
			{
				var num4 = stream.readInt32();
				this.count[i] = ((num4 < 0) ? (-num4) : num4);
			}
			else
			{
				stream.readInt32();
			}
		}
		var num5 = stream.readInt32();
		var num6 = 12;
		for (var j = 0; j < num5; j++)
		{
			if (j < num6)
			{
				this.cursor[j] = stream.readInt32();
			}
			else
			{
				stream.readInt32();
			}
		}
		var num7 = stream.readInt32();
		var num8 = 14;
		if (num >= 1)
		{
			for (var k = 0; k < num7; k++)
			{
				if (k < num8)
				{
					var num9 = stream.readInt64();
					this.total[k] = ((num9 < 0) ? (-num9) : num9);
					if (k==13) {
						this.checkpoint.totalnum13 = stream.point-8;
					}
				}
				else
				{
					stream.readInt64();
				}
			}
		}
		else
		{
			for (var l = 0; l < num7; l++)
			{
				if (l < num8)
				{
					this.total[l] = stream.readInt32();
				}
				else
				{
					stream.readInt32();
				}
			}
		}
		this.itemId = stream.readInt32();
		this.checkpoint.endpoint = stream.point;
	}
	/**
     * 
     * @param {BinWriter} stream 
     */
	Export(stream){
		stream.write(1,4);
		var num = 7200;
		stream.write(num,4);
		for (var i = 0; i < num; i++)
		{
			stream.write(this.count[i],4);
			// stream.write(0,4);
		}
		var num2 = 12;
		stream.write(num2,4);
		for (var j = 0; j < num2; j++)
		{
			stream.write(this.cursor[j],4);
			// stream.write(j*600,4);
		}
		var num3 = 14;
		stream.write(num3,4);
		for (var k = 0; k < num3; k++)
		{
			stream.write(this.total[k],8);
			// stream.write(0,8);
		}
		stream.write(this.itemId,4);
		// stream.write();
	}
	Init(itemId=6001){
		this.count = new Array(7200).fill(0),
		this.cursor = new Array(12).fill(0).map((i,j)=>{return j*600;}),
		this.total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x7fffffff],
		this.itemId = itemId;
	}
}
class PowerStat{
	energy = []
	cursor = []
	total = []
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			if (i < 3600)
			{
				var num2 = stream.readInt64();
				this.energy[i] = ((num2 < 0) ? (-num2) : num2);
			}
			else
			{
				stream.readInt64();
			}
		}
		var num3 = stream.readInt32();
		for (var j = 0; j < num3; j++)
		{
			if (j < 6)
			{
				this.cursor[j] = stream.readInt32();
			}
			else
			{
				stream.readInt32();
			}
		}
		var num4 = stream.readInt32();
		for (var k = 0; k < num4; k++)
		{
			if (k < 7)
			{
				var num5 = stream.readInt64();
				this.total[k] = ((num5 < 0) ? (-num5) : num5);
			}
			else
			{
				stream.readInt64();
			}
		}
	}
}
class FactoryProductionStat{
	productPool = []
	checkpoint = {
		productIndices:0,
	}
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		var num = stream.readInt32();
		var num2 = stream.readInt32();
		// this.SetProductCapacity(num2);
		this.productCursor = stream.readInt32();
		for (var i = 1; i < this.productCursor; i++)
		{
			this.productPool[i] = new ProductStat();
			this.productPool[i].Import(stream);
		}
		var num3 = stream.readInt32();
		this.powerPool = new Array(5);
		for (var j = 0; j < 5; j++)
		{
			this.powerPool[j] = new PowerStat();
			if (j < num3)
			{
				this.powerPool[j].Import(stream);
			}
		}
		var num4 = stream.readInt32();
		this.productIndices = new Array(num4);
		this.checkpoint.productIndices = stream.point;
		for (var k = 0; k < num4; k++)
		{
			this.productIndices[k] = stream.readInt32();
		}
		if (num >= 1)
		{
			this.energyConsumption = stream.readInt64();
		}
	}
}
class ProductionStatistics{
	factoryStatPool = []
	firstCreateIds = []
	favoriteIds = []
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			this.factoryStatPool[i] = new FactoryProductionStat();
			this.factoryStatPool[i].Import(stream);
		}
		var num2 = stream.readInt32();
		for (var j = 0; j < num2; j++)
		{
			this.firstCreateIds[j] = stream.readInt32();
		}
		var num3 = stream.readInt32();
		for (var k = 0; k < num3; k++)
		{
			this.favoriteIds[k] = stream.readInt32();
		}
	}
}
class GameStatData{
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		var num = stream.readInt32();
		this.techHashedHistory = new Array(num);
		for (var i = 0; i < num; i++)
		{
			this.techHashedHistory[i] = stream.readInt32();
		}
		this.production = new ProductionStatistics();
		this.production.Import(stream);
	}
}
class StorageComponent{
	grids = []
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		var EStorageType = ['Default','Fuel','Filtered'];
		var num = stream.readInt32();
		this.id = stream.readInt32();
		this.entityId = stream.readInt32();
		if (num >= 1)
		{
			this.previous = stream.readInt32();
			this.next = stream.readInt32();
			this.bottom = stream.readInt32();
			this.top = stream.readInt32();
		}
		this.type = (EStorageType)[stream.readInt32()];
		this.size = stream.readInt32();
		if (num >= 1)
		{
			this.bans = stream.readInt32();
		}
		// this.SetSize(num2);
		for (var i = 0; i < this.size; i++)
		{
			this.grids[i] = {};
			this.grids[i].itemId = stream.readInt32();
			this.grids[i].filter = stream.readInt32();
			this.grids[i].count = stream.readInt32();
			this.grids[i].stackSize = stream.readInt32();
			if (num >= 2)
			{
				this.grids[i].inc = stream.readInt32();
			}
			// else
			// {
			// 	this.grids[i].inc = 0;
			// }
			// if (this.entityId > 0 && this.grids[i].itemId > 0)
			// {
			// 	var itemProto = LDB.items.Select(this.grids[i].itemId);
			// 	if (itemProto != null)
			// 	{
			// 		this.grids[i].stackSize = itemProto.StackSize;
			// 	}
			// }
		}
	}
}
class ForgeTask{
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		this.recipeId = stream.readInt32();
		this.count = stream.readInt32();
		this.tick = stream.readInt32();
		this.tickSpend = stream.readInt32();
		var num = stream.readInt32();
		var num2 = stream.readInt32();
		this.itemIds = new Array(num);
		this.itemCounts = new Array(num);
		this.served = new Array(num);
		this.productIds = new Array(num2);
		this.productCounts = new Array(num2);
		this.produced = new Array(num2);
		for (var i = 0; i < this.itemIds.length; i++)
		{
			this.itemIds[i] = stream.readInt32();
			this.itemCounts[i] = stream.readInt32();
			this.served[i] = stream.readInt32();
		}
		for (var j = 0; j < this.productIds.length; j++)
		{
			this.productIds[j] = stream.readInt32();
			this.productCounts[j] = stream.readInt32();
			this.produced[j] = stream.readInt32();
		}
		this.parentTaskIndex = stream.readInt32();
	}
}
class MechaForge{
	tasks = []
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var forgeTask = new ForgeTask();
			forgeTask.Import(stream);
			this.tasks.push(forgeTask);
		}
	}
}
class MechaLab{
	itemPoints = {
		items:{}
	}
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		this.itemPoints.items = {};
		stream.readInt32();
		var num = stream.readInt32();
		for (var i = 0; i < num; i++)
		{
			var key = stream.readInt32();
			var value = stream.readInt32();
			this.itemPoints.items[key] = value;
		}
	}
}
class MechaDrone{
	position = {}
	target = {}
	forward = {}
	initialVector = {}
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		stream.readInt32();
		this.stage = stream.readInt32();
		this.position.x = stream.readSingle();
		this.position.y = stream.readSingle();
		this.position.z = stream.readSingle();
		this.target.x = stream.readSingle();
		this.target.y = stream.readSingle();
		this.target.z = stream.readSingle();
		this.forward.x = stream.readSingle();
		this.forward.y = stream.readSingle();
		this.forward.z = stream.readSingle();
		this.speed = stream.readSingle();
		this.movement = stream.readInt32();
		this.targetObject = stream.readInt32();
		this.progress = stream.readSingle();
		this.initialVector.x = stream.readSingle();
		this.initialVector.y = stream.readSingle();
		this.initialVector.z = stream.readSingle();
	}
}
class MechaAppearance{
	mainColors = []
	partColors = {}
	partHideMask
	partCustomMask
	customArmor
}
class Mecha{
	reactorStorage = new StorageComponent()
	warpStorage = new StorageComponent()
	forge = new MechaForge()
	lab = new MechaLab()
	drones = []
	appearance = new MechaAppearance()
	diyItems = {
		items:[]
	}
	/**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
		var num = stream.readInt32();
		this.coreEnergyCap = stream.readDouble();
		this.coreEnergy = stream.readDouble();
		this.corePowerGen = stream.readDouble();
		this.reactorPowerGen = stream.readDouble();
		this.reactorEnergy = stream.readDouble();
		this.reactorItemId = stream.readInt32();
		if (num >= 4)
		{
			this.reactorItemInc = stream.readInt32();
		}
		else
		{
			this.reactorItemInc = 0;
		}
		this.reactorStorage.Import(stream);
		this.warpStorage.Import(stream);
		this.walkPower = stream.readDouble();
		this.jumpEnergy = stream.readDouble();
		this.thrustPowerPerAcc = stream.readDouble();
		this.warpKeepingPowerPerSpeed = stream.readDouble();
		this.warpStartPowerPerSpeed = stream.readDouble();
		this.miningPower = stream.readDouble();
		this.replicatePower = stream.readDouble();
		this.researchPower = stream.readDouble();
		this.droneEjectEnergy = stream.readDouble();
		this.droneEnergyPerMeter = stream.readDouble();
		this.coreLevel = stream.readInt32();
		this.thrusterLevel = stream.readInt32();
		this.miningSpeed = stream.readSingle();
		this.replicateSpeed = stream.readSingle();
		this.walkSpeed = stream.readSingle();
		this.jumpSpeed = stream.readSingle();
		this.maxSailSpeed = stream.readSingle();
		this.maxWarpSpeed = stream.readSingle();
		this.buildArea = stream.readSingle();
		this.forge.Import(stream);
		this.lab.Import(stream);
		this.droneCount = stream.readInt32();
		this.droneSpeed = stream.readSingle();
		this.droneMovement = stream.readInt32();
		for (var i = 0; i < this.droneCount; i++)
		{
			this.drones[i] = new MechaDrone();
			this.drones[i].Import(stream);
		}
		// this.droneLogic.ReloadStates();
		// this.appearance.ResetAppearance();
		// this.diyAppearance.ResetAppearance();
		// this.diyItems.Clear();
		if (num < 5)
		{
			if (num >= 1)
			{
				var num2 = stream.readInt32();
				for (var j = 0; j < num2; j++)
				{
					if (j < 8)
					{
						this.appearance.mainColors[j] = {};
						this.appearance.mainColors[j].r = stream.readByte();
						this.appearance.mainColors[j].g = stream.readByte();
						this.appearance.mainColors[j].b = stream.readByte();
						this.appearance.mainColors[j].a = stream.readByte();
					}
					else
					{
						stream.readByte();
						stream.readByte();
						stream.readByte();
						stream.readByte();
					}
				}
				if (num >= 3)
				{
					for (var k = 0; k < 64; k++)
					{
						for (var l = 0; l < num2; l++)
						{
							if (l < 8)
							{
								this.appearance.partColors[k+","+l].r = stream.readByte();
								this.appearance.partColors[k+","+l].g = stream.readByte();
								this.appearance.partColors[k+","+l].b = stream.readByte();
								this.appearance.partColors[k+","+l].a = stream.readByte();
								// this.appearance.partColors[k, l].r = stream.readByte();
								// this.appearance.partColors[k, l].g = stream.readByte();
								// this.appearance.partColors[k, l].b = stream.readByte();
								// this.appearance.partColors[k, l].a = stream.readByte();
							}
							else
							{
								stream.readByte();
								stream.readByte();
								stream.readByte();
								stream.readByte();
							}
						}
					}
				}
			}
			if (num >= 2)
			{
				this.appearance.partHideMask = stream.readUInt64();
				if (num >= 3)
				{
					this.appearance.partCustomMask = stream.readUInt64();
				}
				this.appearance.customArmor.Import(stream);
				if (stream.readInt32() != 2119973658)
				{
					throw new Error("Corrupted Mecha Data");
				}
			}
			// this.appearance.CopyTo(this.diyAppearance);
			return;
		}
		// this.appearance.Import(stream);
		// this.diyAppearance.Import(stream);
		// if (num >= 6)
		// {
		// 	var num3 = stream.readInt32();
		// 	for (var m = 0; m < num3; m++)
		// 	{
		// 		var key = stream.readInt32();
		// 		var value = stream.readInt32();
		// 		this.diyItems.items[key] = value;
		// 	}
		// }
		// if (stream.readInt32() != 2119973658)
		// {
		// 	throw new Error("Corrupted Mecha Data");
		// }
	}
}
class Player{
	uPosition = {}
	uRotation = {}
	uVelocity = {}
	mecha = new Mecha()
	/**
     * 
     * @param {BinReader} stream 
     */
	Import(stream){
		var EMovementState = ['Walk','Drift','Fly','Sail']
		var num = stream.readInt32();
		stream.readInt32();
		var position = {};
		position.x = stream.readSingle();
		position.y = stream.readSingle();
		position.z = stream.readSingle();
		this.position = position;
		this.uPosition.x = stream.readDouble();
		this.uPosition.y = stream.readDouble();
		this.uPosition.z = stream.readDouble();
		this.uRotation.x = stream.readSingle();
		this.uRotation.y = stream.readSingle();
		this.uRotation.z = stream.readSingle();
		this.uRotation.w = stream.readSingle();
		this.movementState = (EMovementState)[stream.readInt32()];
		this.warpState = stream.readSingle();
		this.warpCommand = stream.readBoolean();
		this.uVelocity.x = stream.readDouble();
		this.uVelocity.y = stream.readDouble();
		this.uVelocity.z = stream.readDouble();
		this.inhandItemId = stream.readInt32();
		this.inhandItemCount = stream.readInt32();
		if (num >= 2)
		{
			this.inhandItemInc = stream.readInt32();
		}
		else
		{
			this.inhandItemInc = 0;
		}
		this.mecha.Import(stream);
		// this.package = new StorageComponent(10);
		// this.package.type = EStorageType.Default;
		// this.package.Import(r);
		// if (num >= 1)
		// {
		// 	this.navigation.Import(r);
		// }
		// this.sandCount = stream.readInt32();
	}
}
class GameData{
    /**
     * 
     * @param {BinReader} stream 
     */
    Import(stream){
        var num = stream.readInt32();
        this.patch = 0;
		if (num >= 4)
		{
			this.patch = stream.readInt32();
		}
		this.account = new AccountData();
		if (num >= 3)
		{
			this.account.Import(stream);
		}
        this.gameName = stream.readString();
		this.gameDesc = new GameDesc();
		this.gameDesc.Import(stream);
        this.gameTick = stream.readInt64();
        this.gameAchievement = new GameAchievementData();
        if (num >= 7)
		{
			this.gameAchievement.Import(stream);
		}
        this.preferences = new GamePrefsData();
        if (num >= 1)
		{
			this.preferences.Import(stream);
		}
        this.history = new GameHistoryData();
        this.history.Import(stream);
		if (num >= 2)
		{
			this.hidePlayerModel = stream.readBoolean();
			this.disableController = stream.readBoolean();
		}
		this.statistics = new GameStatData();
		this.statistics.Import(stream);
		var planetId = stream.readInt32();
		this.mainPlayer = new Player()
		this.mainPlayer.Import(stream);
    }
}
class DecodeDSV{
	/**
     * 
     * @param {Uint8Array} u8array 
     */
    constructor(u8array){
		this.binWriter = new BinWriter(u8array)
		this.array = this.binWriter.src;
        this.stream = new BinReader(u8array);
        this.startDecode();
    }
	offset = 0
    AccountData = new AccountData()
    GameMain = new GameData()
    startDecode(){
        var stream = this.stream;
        if (stream.readString(6)!='VFSAVE') {
            throw new Error('Invalid game save file');
        }
        if (stream.readInt64()!=stream.src.length) {
            throw new Error('Incomplete game save');
        }
        var num = stream.readInt32();
        if (num < 4) {
            throw new Error('Game save is too old');
        }
        stream.readInt32();
        stream.readInt32();
        stream.readInt32();
        if (num >= 6) {
            stream.readInt32();
        }
        stream.readInt64();
        stream.readInt64();
        var num2 = stream.readInt32();
        if (num2 > 0) {
            stream.seek(num2);
        }
        if (num2 >= 5) {
            this.AccountData.Import(stream);
            stream.readInt64();
        }
        
        this.GameMain.Import(stream);

        console.log('success');
        // console.log(this.AccountData);
        // console.log(this.GameMain);
		this.setTool();
    }
	tool = {
		addProductStat:{
			itemList:[]
		}
	}
	setTool(){
		this.tool = {
			addProductStat:{
				itemList:[
					6001,//电磁矩阵
					6002,//能量矩阵
					6003,//结构矩阵
					6004,//信息矩阵
					6005,//引力矩阵
					6006,//宇宙矩阵
					1001,//铁矿
					1002,//铜矿
					1006,//煤矿
					1030,//木材
					1103,//钢材
					1101,//铁块
					1104,//铜块
					1109,//高能石墨
					1201,//齿轮
					1202,//磁线圈
					1203,//电动机
					1204,//电磁涡轮
					1301,//电路板
				],
				setAllItem:()=>{
					this.tool.addProductStat.itemList.map((i)=>{
						this.tool.addProductStat.setItem(i);
					})
				},
				setItem:(itemId=6001)=>{
					var factoryStatPool = this.GameMain.statistics.production.factoryStatPool[0];
					var itemIndex = factoryStatPool.productIndices[itemId];
					if (itemIndex == 0) {
						var bw = new BinWriter()
						var ps = new ProductStat()
						ps.Init(itemId);
						ps.Export(bw);
						this.binWriter.write(++factoryStatPool.productCursor,4,factoryStatPool.productPool[1].checkpoint.startpoint-8);
						this.binWriter.write(factoryStatPool.productCursor,4,factoryStatPool.productPool[1].checkpoint.startpoint-4);
						this.array[factoryStatPool.checkpoint.productIndices+this.offset+4*itemId] = factoryStatPool.productCursor-1;
						this.offset += this.binWriter.insertArray(bw.src,factoryStatPool.productPool[factoryStatPool.productPool.length-1].checkpoint.endpoint+this.offset);
						this.binWriter.write(this.array.length,8,6);
					} else {
						this.binWriter.write(0x7FFFFFFF,8,factoryStatPool.productPool[itemIndex].checkpoint.totalnum13);
					}
				},
			},
			upgradeTech:{
				techStates:this.GameMain.history.techStates,
				setValue:(index,value)=>{
					var techStates = this.tool.upgradeTech.techStates;
					if (!techStates[index]) return "default index";
					if (typeof value === 'undefined') value=techStates[index].hashNeeded; 
					this.binWriter.write(value,8,techStates[index].checkpoint);
				},
				upgradeAll:()=>{
					var object = this.tool.upgradeTech.techStates;
					for (const key in object) {
						if (Object.hasOwnProperty.call(object, key)) {
							const element = object[key];
							var value = element.hashNeeded;
							if (element.curLevel!=element.maxLevel) value-=1;
							this.binWriter.write(value,8,element.checkpoint);
						}
					}
				}
			},
		}
	}
	
}

class Index1{
    constructor(){
        this.setFrame();
    }

    frame = {
        file:document.querySelector('.file'),
		btn:document.querySelector('.btn'),
    }

	data = {
		file:undefined,
	}

    setFrame(){
        var frame = this.frame;
        frame.file.addEventListener('change', (event)=>{
			frame.btn.setAttribute('disabled',true);
			this.data.file = event.target.files[0];
            var file = event.target.files[0];
            var fileRead = new FileReader();
            fileRead.readAsArrayBuffer(file);
            fileRead.onloadend = (event)=>{
                var r = event.target.result;
                this.decodeDSV = new DecodeDSV(new Uint8Array(r));
				frame.btn.removeAttribute('disabled');
            }
        },false);
		frame.btn.addEventListener('click',(event)=>{
			this.decodeDSV.tool.upgradeTech.upgradeAll();
			this.decodeDSV.tool.addProductStat.setAllItem();
			this.download();
		})
    }
	download(){
		var link = document.createElement('a');
		link.download = "unlocked_"+this.data.file.name;
		link.href = URL.createObjectURL(new Blob([new Uint8Array(this.decodeDSV.array)]));
		link.click();
	}
}

var index = new Index1()
