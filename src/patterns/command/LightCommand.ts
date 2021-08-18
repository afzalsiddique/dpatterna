// @ts-ignore
export interface Command {

    execute(): string

}


export class LightYellow {

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}
var value:number=0
export class LightRed {

    public on(): string {
        return `red${value}`
    }

    public off(): string {
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

export class CommandLightOn implements Command {

    private _light: LightYellow

    constructor(_light: LightYellow) {
        this._light = _light;
    }

    execute(): string {
        return this._light.on();
    }


}

export class CommandLightOff implements Command {
    private _light: LightYellow

    constructor(_light: LightYellow) {
        this._light = _light
    }

    execute(): string {
        return this._light.off()
    }

}


export class CommandLightRedOn implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class CommandLightRedOff implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLuminosity implements Command {
    light: LightRed;

    constructor(light: LightRed) {
        this.light = light;
    }

    execute(): string {
        return this.light.increase_brightness()
    }

}

export class RedLightDecreaseLuminosity implements Command {
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
