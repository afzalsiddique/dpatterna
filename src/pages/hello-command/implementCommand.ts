import {
    LightYellow,
    LightYellowOn,
    LightYellowOff,
    LightRed,
    LightRedOn,
    LightRedOff,
    LightRedIncreaseBrightness,
    LightRedDecreaseBrightness,
    RemoteController,
    Command
} from "../../patterns/command/LightCommand";
let redOn: boolean = false

export function command_on_light(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? command_on_light(new LightRedOn(new LightRed())) : command_on_light(new LightYellowOn(new LightYellow()))
            break;

        case "off":
            redOn=false
            result = redOn ? command_on_light(new LightRedOff(new LightRed())) : command_on_light(new LightYellowOff(new LightYellow()))
            break

        case "increase":
            result=redOn?command_on_light(new LightRedIncreaseBrightness(new LightRed())):command_on_light(new LightYellowOn(new LightYellow()))

            break

        case "decrease":
            console.log("decrease")
            result =redOn?command_on_light(new LightRedDecreaseBrightness(new LightRed())) : command_on_light(new LightYellowOn(new LightYellow()))
            break

        case "red":
            redOn = true
            result=redOn?command_on_light(new LightRedOn(new LightRed())):command_on_light(new LightYellowOn(new LightYellow()))
            break
        default:

    }
    // @ts-ignore
    return result;

}