import {command_on_light} from "../pages/hello-command/implementCommand"
import {RemoteController,LightYellow,LightYellowOn,LightYellowOff} from "../patterns/command/LightCommand"

const remoteController = new RemoteController();
describe("Command Pattern", () => {
    test("Yellow Light on",()=>{
        let expectation = command_on_light(new LightYellowOn(new LightYellow()))
        remoteController.setCommand(new LightYellowOn(new LightYellow))
        let reality=remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    });
    test("Yellow Light off",()=>{
        let expectation = command_on_light(new LightYellowOn(new LightYellow()))
        remoteController.setCommand(new LightYellowOn(new LightYellow()))
        let reality=remoteController.executeCommand()
        expect(expectation).toEqual(reality)

    })
})