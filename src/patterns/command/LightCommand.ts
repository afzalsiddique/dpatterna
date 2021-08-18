// @ts-ignore
export interface Command {

    execute(): string

}
export interface Light{
    turn_on(): string
    turn_off(): string
}

export class LightYellow implements Light{

    public turn_on(): string {
        return 'on'
    }

    public turn_off(): string {
        return 'off'
    }
}
var value:number=0
export class LightRed implements Light{

    public turn_on(): string {
        return `red${value}`
    }

    public turn_off(): string {
        return "off"
    }

    public increase_brightness(): string {
        value++;
        return `red${value}`
    }

    public decrease_brightness(): string {
        value--;
        return `red${value}`

    }
}

export class LightYellowOn implements Command {

    private _light: LightYellow

    constructor(_light: LightYellow) {
        this._light = _light;
    }

    execute(): string {
        return this._light.turn_on();
    }


}

export class LightYellowOff implements Command {
    private _light: LightYellow

    constructor(_light: LightYellow) {
        this._light = _light
    }

    execute(): string {
        return this._light.turn_off()
    }

}


export class LightRedOn implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.turn_on()
    }

}

export class LightRedOff implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.turn_off()
    }

}

export class LightRedIncreaseBrightness implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.increase_brightness()
    }

}

export class LightRedDecreaseBrightness implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.decrease_brightness()
    }

}


export class RemoteController {
    onCommand!: Command;

    constructor() {
    }

    setCommand(onCommand: Command) {
        this.onCommand = onCommand;
    }

    executeCommand() {
        return this.onCommand.execute()
    }


}

/*
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const remoteController = new RemoteController();
const lightOffCommand = new LightOffCommand(light)
const newLight = new RedLight()
const newLightCommand = new RedLightOn(newLight)
const lightIncreased=new RedLightIncreaseLuminosity(newLight)
remoteController.setCommand(lightOnCommand)
remoteController.executeCommand()
remoteController.setCommand(lightOffCommand)
remoteController.executeCommand()
remoteController.setCommand(newLightCommand)
remoteController.executeCommand()
remoteController.setCommand(lightIncreased)
remoteController.executeCommand()
*/
