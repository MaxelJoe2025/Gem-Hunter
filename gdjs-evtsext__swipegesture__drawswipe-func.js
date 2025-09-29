
if (typeof gdjs.evtsExt__SwipeGesture__DrawSwipe !== "undefined") {
  gdjs.evtsExt__SwipeGesture__DrawSwipe.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SwipeGesture__DrawSwipe = {};
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1= [];
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects2= [];
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects3= [];


gdjs.evtsExt__SwipeGesture__DrawSwipe.mapOfEmptyGDShapePainterObjectObjects = Hashtable.newFrom({"ShapePainterObject": []});
gdjs.evtsExt__SwipeGesture__DrawSwipe.mapOfGDgdjs_9546evtsExt_9595_9595SwipeGesture_9595_9595DrawSwipe_9546GDShapePainterObjectObjects2Objects = Hashtable.newFrom({"ShapePainterObject": gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects2});
gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__SwipeGesture__DrawSwipe.mapOfEmptyGDShapePainterObjectObjects) == 0;
if (isConditionTrue_0) {
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__SwipeGesture__DrawSwipe.mapOfGDgdjs_9546evtsExt_9595_9595SwipeGesture_9595_9595DrawSwipe_9546GDShapePainterObjectObjects2Objects, 0, 0, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1[i].setClearBetweenFrames(true);
}
}
{for(var i = 0, len = gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1[i].setCoordinatesRelative(false);
}
}
}

}


};gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeInProgress.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainterObject"), gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1[i].drawLineV2(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(5).getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0), gdjs.evtTools.input.getCursorY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(11).getAsString(), 0), (gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1[i].getOutlineSize()));
}
}
}

}


};gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SwipeGesture__DrawSwipe.func = function(runtimeScene, ShapePainterObject, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ShapePainterObject": ShapePainterObject
},
  _objectArraysMap: {
"ShapePainterObject": gdjs.objectsListsToArray(ShapePainterObject)
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

gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1.length = 0;
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects2.length = 0;
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects3.length = 0;

gdjs.evtsExt__SwipeGesture__DrawSwipe.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects1.length = 0;
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects2.length = 0;
gdjs.evtsExt__SwipeGesture__DrawSwipe.GDShapePainterObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__SwipeGesture__DrawSwipe.registeredGdjsCallbacks = [];