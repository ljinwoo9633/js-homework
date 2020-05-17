class Unit
{
    private name: String = '';
    private mineral: Number = 0;
    private gas: Number = 0;
    private supply: Number = 0;
    private description: String = '';
    private profile: String = '';

    constructor(name: String, mineral: Number, gas: Number, supply: Number, description: String, profile: String)
    {
        this.name = name;
        this.mineral = mineral;
        this.gas = gas;
        this.supply = supply;
        this.description = description;
        this.profile = profile;
    }

    GetName = (): String => {
        return this.name;
    }

    GetMineral = (): Number => {
        return this.mineral;
    }

    GetGas = (): Number => {
        return this.gas;
    }

    GetSupply = (): Number => {
        return this.supply;
    }

    GetDescription = (): String => {
        return this.description;
    }

    GetProfile = (): String => {
        return this.profile;
    }
}

export default Unit;
