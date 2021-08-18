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

export function commandOnReciever(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? commandOnReciever(new CommandLightRedOn(new LightRed())) : commandOnReciever(new CommandLightOn(new LightYellow()))
            break;

        case "off":
            redOn=false
            result = redOn ? commandOnReciever(new CommandLightRedOff(new LightRed())) : commandOnReciever(new CommandLightOff(new LightYellow()))
            break

        case "increase":
            result=redOn?commandOnReciever(new RedLightIncreaseLuminosity(new LightRed())):commandOnReciever(new CommandLightOn(new LightYellow()))

            break

        case "decrease":
            console.log("decrease")
            result =redOn?commandOnReciever(new RedLightDecreaseLuminosity(new LightRed())) : commandOnReciever(new CommandLightOn(new LightYellow()))
            break

        case "red":
            redOn = true
            result=redOn?commandOnReciever(new CommandLightRedOn(new LightRed())):commandOnReciever(new CommandLightOn(new LightYellow()))
            break
        default:

    }
    // @ts-ignore
    return result;

}