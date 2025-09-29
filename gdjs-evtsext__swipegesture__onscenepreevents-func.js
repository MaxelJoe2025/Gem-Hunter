
if (typeof gdjs.evtsExt__SwipeGesture__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__SwipeGesture__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SwipeGesture__onScenePreEvents = {};


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0));
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__SwipeGesture.TouchDuration");
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setBoolean(false);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setBoolean(true);
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeInProgress.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(0);
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0));
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__SwipeGesture.TouchDuration");
}
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "__SwipeGesture.TouchDuration");
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setBoolean(true);
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList6(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeDetectionEnabled.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14328660);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).setNumber(gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0), gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0)));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(7).setNumber(Math.abs(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber() - gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0)));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setNumber(Math.abs(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber() - gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0)));
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(9).setNumber(gdjs.evtTools.common.angleBetweenPositions(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0), gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0)));
}
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList10(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeInProgress.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setBoolean(false);
}
}

}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList12(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SwipeGesture__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SwipeGesture"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SwipeGesture"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SwipeGesture__onScenePreEvents.eventsList13(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SwipeGesture__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__SwipeGesture__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__SwipeGesture__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__SwipeGesture__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__SwipeGesture__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
