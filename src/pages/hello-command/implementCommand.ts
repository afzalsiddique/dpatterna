import {
    LightYellow,
    CommandLightOn,
    CommandLightOff,
    LightRed,
    CommandLightRedOn,
    CommandLightRedOff,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
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
            result = redOn ? command_on_light(new CommandLightRedOn(new LightRed())) : command_on_light(new CommandLightOn(new LightYellow()))
            break;

        case "off":
            redOn=false
            result = redOn ? command_on_light(new CommandLightRedOff(new LightRed())) : command_on_light(new CommandLightOff(new LightYellow()))
            break

        case "increase":
            result=redOn?command_on_light(new RedLightIncreaseLuminosity(new LightRed())):command_on_light(new CommandLightOn(new LightYellow()))

            break

        case "decrease":
            console.log("decrease")
            result =redOn?command_on_light(new RedLightDecreaseLuminosity(new LightRed())) : command_on_light(new CommandLightOn(new LightYellow()))
            break

        case "red":
            redOn = true
            result=redOn?command_on_light(new CommandLightRedOn(new LightRed())):command_on_light(new CommandLightOn(new LightYellow()))
            break
        default:

    }
    // @ts-ignore
    return result;

}