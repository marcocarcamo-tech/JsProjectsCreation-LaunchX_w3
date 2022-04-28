const MissionCommander = require('../app/missionCommander');


describe("Unit Tests for Mission Commander Class", () => {
   test('1. Create a Mission Commander Object', () => {
     const myMissionCommander = new MissionCommander("Woopa")
     expect (myMissionCommander.name).toBe("Woopa");
  })
})
