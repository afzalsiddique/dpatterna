import {command_on_light} from "../pages/hello-command/implementCommand"
import {
    RemoteController,
    LightYellow,
    LightYellowOn,
    LightYellowOff,
    LightRed,
    LightRedOn, LightRedOff
} from "../patterns/command/LightCommand"

const remoteController = new RemoteController();
describe("Command Pattern", () => {
    test("Yellow Light on",()=>{
        let expected = command_on_light(new LightYellowOn(new LightYellow()))
        remoteController.setCommand(new LightYellowOn(new LightYellow))
        let actual=remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
    test("Yellow Light off",()=>{
        let expected = command_on_light(new LightYellowOff(new LightYellow()))
        remoteController.setCommand(new LightYellowOff(new LightYellow()))
        let actual=remoteController.executeCommand()
        expect(expected).toEqual(actual)
    })
    test("Red Light off",()=>{
        let expected = command_on_light(new LightRedOff(new LightRed()))
        remoteController.setCommand(new LightRedOff(new LightRed()))
        let actual=remoteController.executeCommand()
        expect(expected).toEqual(actual)
    })
    test("Red Light on",()=>{
        let expected = command_on_light(new LightRedOn(new LightRed()))
        remoteController.setCommand(new LightRedOn(new LightRed))
        let actual=remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
    test("Red Light on",()=>{
        let expected = command_on_light(new LightRedOn(new LightRed()))
        remoteController.setCommand(new LightRedOn(new LightRed))
        let actual=remoteController.executeCommand()
        expect(expected).toEqual(actual)
    });
})