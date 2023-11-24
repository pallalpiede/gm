var MouseInput = pc.createScript("mouseInput");
MouseInput.attributes.add("orbitSensitivity", {
    type: "number",
    default: .3,
    title: "Orbit Sensitivity",
    description: "How fast the camera moves around the orbit. Higher is faster"
}), MouseInput.attributes.add("distanceSensitivity", {
    type: "number",
    default: .15,
    title: "Distance Sensitivity",
    description: "How fast the camera moves in and out. Higher is faster"
}), MouseInput.attributes.add("enablePanning", {
    type: "boolean",
    default: !1,
    title: "Enable panning"
}), MouseInput.attributes.add("enableZooming", {
    type: "boolean",
    default: !1,
    title: "Enable zooming"
}), MouseInput.prototype.initialize = function() {
    if (this.orbitCamera = this.entity.script.orbitCamera, this.gameplayContainer = this.app.root.findByName("GameplayContainer"), this.orbitCamera) {
        var t = this,
            o = function(o) {
                t.onMouseOut(o)
            };
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this), this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this), this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this), this.app.on(EventTypes.AIMING_STARTED, this.stopCameraInteraction, this), window.addEventListener("mouseout", o, !1), this.on("destroy", function() {
            this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this), this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this), this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this), this.app.off(EventTypes.AIMING_STARTED, this.stopCameraInteraction, this), window.removeEventListener("mouseout", o, !1)
        })
    }
    this.app.mouse.disableContextMenu(), this.lookButtonDown = !1, this.panButtonDown = !1, this.lastPoint = new pc.Vec2
}, MouseInput.fromWorldPoint = new pc.Vec3, MouseInput.toWorldPoint = new pc.Vec3, MouseInput.worldDiff = new pc.Vec3, MouseInput.prototype.pan = function(t) {
    if (this.enablePanning) {
        var o = MouseInput.fromWorldPoint,
            e = MouseInput.toWorldPoint,
            i = MouseInput.worldDiff,
            n = this.entity.camera,
            s = this.orbitCamera.distance;
        n.screenToWorld(t.x, t.y, s, o), n.screenToWorld(this.lastPoint.x, this.lastPoint.y, s, e), i.sub2(e, o), this.orbitCamera.pivotPoint.add(i)
    }
}, MouseInput.prototype.stopCameraInteraction = function() {
    this.lookButtonDown = !1, this.panButtonDown = !1
}, MouseInput.prototype.onMouseDown = function(t) {
    if (this.gameplayContainer.isGameRunning()) switch (t.button) {
        case pc.MOUSEBUTTON_LEFT:
            this.lookButtonDown = !0;
            break;
        case pc.MOUSEBUTTON_MIDDLE:
        case pc.MOUSEBUTTON_RIGHT:
            this.panButtonDown = !0
    }
}, MouseInput.prototype.onMouseUp = function(t) {
    if (this.gameplayContainer.isGameRunning()) switch (t.button) {
        case pc.MOUSEBUTTON_LEFT:
            this.lookButtonDown = !1;
            break;
        case pc.MOUSEBUTTON_MIDDLE:
        case pc.MOUSEBUTTON_RIGHT:
            this.panButtonDown = !1
    }
}, MouseInput.prototype.onMouseMove = function(t) {
    if (this.gameplayContainer.isGameRunning()) {
        pc.app.mouse;
        this.lookButtonDown ? (this.orbitCamera.pitch -= t.dy * this.orbitSensitivity, this.orbitCamera.yaw -= t.dx * this.orbitSensitivity) : this.panButtonDown && this.pan(t), this.lastPoint.set(t.x, t.y)
    }
}, MouseInput.prototype.onMouseWheel = function(t) {
    this.enableZooming && (this.orbitCamera.distance -= t.wheel * this.distanceSensitivity * (.1 * this.orbitCamera.distance))
}, MouseInput.prototype.onMouseOut = function(t) {
    this.lookButtonDown = !1, this.panButtonDown = !1
};
var TouchInput = pc.createScript("touchInput");
TouchInput.attributes.add("orbitSensitivity", {
    type: "number",
    default: .4,
    title: "Orbit Sensitivity",
    description: "How fast the camera moves around the orbit. Higher is faster"
}), TouchInput.attributes.add("distanceSensitivity", {
    type: "number",
    default: .2,
    title: "Distance Sensitivity",
    description: "How fast the camera moves in and out. Higher is faster"
}), TouchInput.attributes.add("enablePanning", {
    type: "boolean",
    default: !1,
    title: "Enable panning"
}), TouchInput.attributes.add("enableZooming", {
    type: "boolean",
    default: !1,
    title: "Enable zooming"
}), TouchInput.prototype.initialize = function() {
    this.orbitCamera = this.entity.script.orbitCamera, this.gameplayContainer = this.app.root.findByName("GameplayContainer"), this.lastTouchPoint = new pc.Vec2, this.lastPinchMidPoint = new pc.Vec2, this.lastPinchDistance = 0, this.orbitCamera && this.app.touch && (this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this), this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.on(EventTypes.AIMING_STARTED, this.stopCameraInteraction, this), this.on("destroy", function() {
        this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this), this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this), this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this), this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.off(EventTypes.AIMING_STARTED, this.stopCameraInteraction, this)
    }))
}, TouchInput.prototype.getPinchDistance = function(t, i) {
    var n = t.x - i.x,
        o = t.y - i.y;
    return Math.sqrt(n * n + o * o)
}, TouchInput.prototype.calcMidPoint = function(t, i, n) {
    n.set(i.x - t.x, i.y - t.y), n.scale(.5), n.x += t.x, n.y += t.y
}, TouchInput.prototype.onTouchStartEndCancel = function(t) {
    if (this.gameplayContainer.isGameRunning()) {
        this.cancelAiming = !1;
        var i = t.touches;
        1 == i.length ? this.lastTouchPoint.set(i[0].x, i[0].y) : 2 == i.length && (this.lastPinchDistance = this.getPinchDistance(i[0], i[1]), this.calcMidPoint(i[0], i[1], this.lastPinchMidPoint))
    }
}, TouchInput.fromWorldPoint = new pc.Vec3, TouchInput.toWorldPoint = new pc.Vec3, TouchInput.worldDiff = new pc.Vec3, TouchInput.prototype.pan = function(t) {
    if (this.gameplayContainer.isGameRunning() && this.enablePanning) {
        var i = TouchInput.fromWorldPoint,
            n = TouchInput.toWorldPoint,
            o = TouchInput.worldDiff,
            a = this.entity.camera,
            e = this.orbitCamera.distance;
        a.screenToWorld(t.x, t.y, e, i), a.screenToWorld(this.lastPinchMidPoint.x, this.lastPinchMidPoint.y, e, n), o.sub2(n, i), this.orbitCamera.pivotPoint.add(o)
    }
}, TouchInput.pinchMidPoint = new pc.Vec2, TouchInput.prototype.onTouchMove = function(t) {
    if (this.gameplayContainer.isGameRunning() && !this.cancelAiming) {
        var i = TouchInput.pinchMidPoint,
            n = t.touches;
        if (1 == n.length) {
            var o = n[0];
            this.orbitCamera.pitch -= (o.y - this.lastTouchPoint.y) * this.orbitSensitivity, this.orbitCamera.yaw -= (o.x - this.lastTouchPoint.x) * this.orbitSensitivity, this.lastTouchPoint.set(o.x, o.y)
        } else if (2 == n.length) {
            var a = this.getPinchDistance(n[0], n[1]),
                e = a - this.lastPinchDistance;
            this.lastPinchDistance = a, this.enableZooming && (this.orbitCamera.distance -= e * this.distanceSensitivity * .1 * (.1 * this.orbitCamera.distance)), this.calcMidPoint(n[0], n[1], i), this.pan(i), this.lastPinchMidPoint.copy(i)
        }
    }
}, TouchInput.prototype.stopCameraInteraction = function() {
    this.cancelAiming = !0
}; // orbitCamera.js
/* jshint esversion: 6 */
var OrbitCamera = pc.createScript('orbitCamera');

OrbitCamera.attributes.add('distanceMax', {
    type: 'number',
    default: 0,
    title: 'Distance Max',
    description: 'Setting this at 0 will give an infinite distance limit'
});
OrbitCamera.attributes.add('distanceMin', {
    type: 'number',
    default: 0,
    title: 'Distance Min'
});
OrbitCamera.attributes.add('pitchAngleMax', {
    type: 'number',
    default: 90,
    title: 'Pitch Angle Max (degrees)'
});
OrbitCamera.attributes.add('pitchAngleMin', {
    type: 'number',
    default: -90,
    title: 'Pitch Angle Min (degrees)'
});

OrbitCamera.attributes.add('inertiaFactor', {
    type: 'number',
    default: 0,
    title: 'Inertia Factor',
    description: 'Higher value means that the camera will continue moving after the user has stopped dragging. 0 is fully responsive.'
});

OrbitCamera.attributes.add('focusEntity', {
    type: 'entity',
    title: 'Focus Entity',
    description: 'Entity for the camera to focus on. If blank, then the camera will use the whole scene'
});


OrbitCamera.attributes.add('bubblesContainer', {
    type: 'entity',
    title: 'Bubles Container Entity'
});


OrbitCamera.attributes.add('frameOnStart', {
    type: 'boolean',
    default: true,
    title: 'Frame on Start',
    description: 'Frames the entity or scene at the start of the application."'
});


OrbitCamera.attributes.add('initialDistance', {
    type: 'number',
    default: 56
});

OrbitCamera.attributes.add('initialPitch', {
    type: 'number',
    default: -9
});

OrbitCamera.attributes.add('initialYaw', {
    type: 'number',
    default: 0
});

OrbitCamera.attributes.add('shakingDecay', {
    type: 'number',
    default: 0.88
});

// Property to get and set the distance between the pivot point and camera
// Clamped between this.distanceMin and this.distanceMax
Object.defineProperty(OrbitCamera.prototype, "distance", {
    get: function() {
        return this._targetDistance;
    },

    set: function(value) {
        this._targetDistance = this._clampDistance(value);
    }
});


// Property to get and set the pitch of the camera around the pivot point (degrees)
// Clamped between this.pitchAngleMin and this.pitchAngleMax
// When set at 0, the camera angle is flat, looking along the horizon
Object.defineProperty(OrbitCamera.prototype, "pitch", {
    get: function() {
        return this._targetPitch;
    },

    set: function(value) {
        this._targetPitch = this._clampPitchAngle(value);
    }
});


// Property to get and set the yaw of the camera around the pivot point (degrees)
Object.defineProperty(OrbitCamera.prototype, "yaw", {
    get: function() {
        return this._targetYaw;
    },

    set: function(value) {
        this._targetYaw = value;

        // Ensure that the yaw takes the shortest route by making sure that
        // the difference between the targetYaw and the actual is 180 degrees
        // in either direction
        var diff = this._targetYaw - this._yaw;
        var reminder = diff % 360;
        if (reminder > 180) {
            this._targetYaw = this._yaw - (360 - reminder);
        } else if (reminder < -180) {
            this._targetYaw = this._yaw + (360 + reminder);
        } else {
            this._targetYaw = this._yaw + reminder;
        }
    }
});


// Property to get and set the world position of the pivot point that the camera orbits around
Object.defineProperty(OrbitCamera.prototype, "pivotPoint", {
    get: function() {
        return this._pivotPoint;
    },

    set: function(value) {
        this._pivotPoint.copy(value);
    }
});


// Moves the camera to look at an entity and all its children so they are all in the view
OrbitCamera.prototype.focus = function(focusEntity) {
    // Calculate an bounding box that encompasses all the models to frame in the camera view
    this._buildAabb(focusEntity, 0);

    var halfExtents = this._modelsAabb.halfExtents;

    var distance = Math.max(halfExtents.x, Math.max(halfExtents.y, halfExtents.z));
    distance = (distance / Math.tan(0.5 * this.entity.camera.fov * pc.math.DEG_TO_RAD));
    distance = (distance * 2);

    this.distance = distance;

    this._removeInertia();

    this._pivotPoint.copy(this._modelsAabb.center);
};


OrbitCamera.distanceBetween = new pc.Vec3();

// Set the camera position to a world position and look at a world position
// Useful if you have multiple viewing angles to swap between in a scene
OrbitCamera.prototype.resetAndLookAtPoint = function(resetPoint, lookAtPoint) {
    this.pivotPoint.copy(lookAtPoint);
    this.entity.setPosition(resetPoint);

    this.entity.lookAt(lookAtPoint);

    var distance = OrbitCamera.distanceBetween;
    distance.sub2(lookAtPoint, resetPoint);
    this.distance = distance.length();

    this.pivotPoint.copy(lookAtPoint);

    var cameraQuat = this.entity.getRotation();
    this.yaw = this._calcYaw(cameraQuat);
    this.pitch = this._calcPitch(cameraQuat, this.yaw);

    this._removeInertia();
    this._updatePosition();
};


OrbitCamera.prototype.getNormalizedYaw = function() {
    const yaw = this.yaw % 360;
    return yaw < 0 ? 360 + yaw : yaw;
};


// Set camera position to a world position and look at an entity in the scene
// Useful if you have multiple models to swap between in a scene
OrbitCamera.prototype.resetAndLookAtEntity = function(resetPoint, entity) {
    this._buildAabb(entity, 0);
    this.resetAndLookAtPoint(resetPoint, this._modelsAabb.center);
};


// Set the camera at a specific, yaw, pitch and distance without inertia (instant cut)
OrbitCamera.prototype.reset = function(yaw, pitch, distance) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.distance = distance;

    this._removeInertia();
};

/////////////////////////////////////////////////////////////////////////////////////////////
// Private methods

OrbitCamera.prototype.initialize = function() {
    var self = this;
    var onWindowResize = function() {
        self._checkAspectRatio();
    };

    window.addEventListener('resize', onWindowResize, false);

    this._checkAspectRatio();

    // Find all the models in the scene that are under the focused entity
    this._modelsAabb = new pc.BoundingBox();
    this._buildAabb(this.focusEntity || this.app.root, 0);

    this.entity.lookAt(this._modelsAabb.center);

    this._pivotPoint = new pc.Vec3();
    this._pivotPoint.copy(this._modelsAabb.center);

    // Calculate the camera euler angle rotation around x and y axes
    // This allows us to place the camera at a particular rotation to begin with in the scene
    var cameraQuat = this.entity.getRotation();

    // Preset the camera
    this._yaw = this._calcYaw(cameraQuat);
    this._pitch = this._clampPitchAngle(this._calcPitch(cameraQuat, this._yaw));
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

    this._distance = 0;

    this._targetYaw = this._yaw;
    this._targetPitch = this._pitch;

    // If we have ticked focus on start, then attempt to position the camera where it frames
    // the focused entity and move the pivot point to entity's position otherwise, set the distance
    // to be between the camera position in the scene and the pivot point
    if (this.frameOnStart) {
        this.focus(this.focusEntity || this.app.root);
    } else {
        var distanceBetween = new pc.Vec3();
        distanceBetween.sub2(this.entity.getPosition(), this._pivotPoint);
        this._distance = this._clampDistance(distanceBetween.length());
    }

    this._targetDistance = this._distance;

    // Reapply the clamps if they are changed in the editor
    this.on('attr:distanceMin', function(value, prev) {
        this._targetDistance = this._clampDistance(this._distance);
    });

    this.on('attr:distanceMax', function(value, prev) {
        this._targetDistance = this._clampDistance(this._distance);
    });

    this.on('attr:pitchAngleMin', function(value, prev) {
        this._targetPitch = this._clampPitchAngle(this._pitch);
    });

    this.on('attr:pitchAngleMax', function(value, prev) {
        this._targetPitch = this._clampPitchAngle(this._pitch);
    });

    // Focus on the entity if we change the focus entity
    this.on('attr:focusEntity', function(value, prev) {
        if (this.frameOnStart) {
            this.focus(value || this.app.root);
        } else {
            this.resetAndLookAtEntity(this.entity.getPosition(), value || this.app.root);
        }
    });

    this.on('attr:frameOnStart', function(value, prev) {
        if (value) {
            this.focus(this.focusEntity || this.app.root);
        }
    });

    this.on('destroy', function() {
        window.removeEventListener('resize', onWindowResize, false);
    });

    this.yaw = 0;

    this.app.on(EventTypes.REFOCUS_CAMERA, this.refocus, this);
    this.app.on(EventTypes.POSTINITIALIZE, this.postinitialize, this);
    this.app.on(EventTypes.SHAKE_CAMERA, this.shakeCamera, this);
};

OrbitCamera.prototype.postinitialize = function() {
    setTimeout(() => {
        this.gameLoaded = true;
        this.adjustCameraDistance();
    }, 0);
};


OrbitCamera.prototype.adjustCameraDistance = function() {
    const minScreenRatio = 0.5;
    const maxScreenRatio = 1;
    const screenRatio = pc.math.clamp(this.app.graphicsDevice.width / this.app.graphicsDevice.height, minScreenRatio, maxScreenRatio);
    const screenRatioFactor = (screenRatio - minScreenRatio) / (maxScreenRatio - minScreenRatio);

    const targetCameraDistance = (this.distanceMin + screenRatioFactor * (this.distanceMax - this.distanceMin));
    this.distance = targetCameraDistance;
};

OrbitCamera.prototype.refocus = function() {
    this.focusEntity = this.focusEntity;
    this.yaw = 0;
    this.adjustCameraDistance();
};

OrbitCamera.prototype.stopCameraInteraction = function() {

};

OrbitCamera.prototype.setInitialDistance = function() {
    this._distance = this.initialDistance;
};

OrbitCamera.prototype.update = function(dt) {
    // Add inertia, if any
    var t = this.inertiaFactor === 0 ? 1 : Math.min(dt / this.inertiaFactor, 1);
    this._distance = GameManager.gameStarted ? pc.math.lerp(this._distance, this._targetDistance, t) : this.initialDistance;
    this._yaw = pc.math.lerp(this._yaw, this._targetYaw, t); //(GameplayController.gameStarted && this.gameLoaded) ? pc.math.lerp(this._yaw, this._targetYaw, t) : this.initialYaw;
    this._pitch = pc.math.lerp(this._pitch, this._targetPitch, t); // (GameplayController.gameStarted && this.gameLoaded) ? pc.math.lerp(this._pitch, this._targetPitch, t) : this.initialPitch;

    this._updatePosition();
    this._followFireball();
    this._updateCameraShaking(dt);
};

OrbitCamera.prototype.shakeCamera = function(intencity, duration) {
    this.cameraShakeTimer = duration;
    this.cameraShakeIntencity = intencity;
};

OrbitCamera.prototype._updateCameraShaking = function(dt) {
    if (this.cameraShakeTimer > 0) {
        this.cameraShakeTimer -= dt;
        const pos = this.entity.getPosition();
        const intencity = this.cameraShakeIntencity *= this.shakingDecay;
        pos.y += pc.math.random(-intencity, intencity);
        pos.x += pc.math.random(-intencity, intencity);
        pos.z += pc.math.random(-intencity, intencity);
        this.entity.setPosition(pos);
    }
};

OrbitCamera.prototype._updatePosition = function() {
    // Work out the camera position based on the pivot point, pitch, yaw and distance
    this.entity.setLocalPosition(0, 0, 0);
    this.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

    var position = this.entity.getPosition();
    position.copy(this.entity.forward);
    position.scale(-this._distance);
    position.add(this.pivotPoint);
    this.entity.setPosition(position);
};

OrbitCamera.prototype._followFireball = function() {
    const fireball = this.bubblesContainer.findByName('Fireball');
    if (fireball) {
        this.yaw = fireball.currentTowerAngle * pc.math.RAD_TO_DEG;
    }
};

OrbitCamera.prototype._removeInertia = function() {
    this._yaw = this._targetYaw;
    this._pitch = this._targetPitch;
    this._distance = this._targetDistance;
};


OrbitCamera.prototype._checkAspectRatio = function() {
    var height = this.app.graphicsDevice.height;
    var width = this.app.graphicsDevice.width;

    // Match the axis of FOV to match the aspect ratio of the canvas so
    // the focused entities is always in frame
    this.entity.camera.horizontalFov = height > width;

    this.adjustCameraDistance();
};


OrbitCamera.prototype._buildAabb = function(entity, modelsAdded) {
    var i = 0;

    if (entity.model) {
        var mi = entity.model.meshInstances;
        if (!mi) {
            console.log(entity.name + ' is faulty');
        }
        for (i = 0; i < mi.length; i++) {
            if (modelsAdded === 0) {
                this._modelsAabb.copy(mi[i].aabb);
            } else {
                this._modelsAabb.add(mi[i].aabb);
            }

            modelsAdded += 1;
        }
    }

    for (i = 0; i < entity.children.length; ++i) {
        modelsAdded += this._buildAabb(entity.children[i], modelsAdded);
    }

    return modelsAdded;
};


OrbitCamera.prototype._calcYaw = function(quat) {
    var transformedForward = new pc.Vec3();
    quat.transformVector(pc.Vec3.FORWARD, transformedForward);

    return Math.atan2(-transformedForward.x, -transformedForward.z) * pc.math.RAD_TO_DEG;
};


OrbitCamera.prototype._clampDistance = function(distance) {
    if (this.distanceMax > 0) {
        return pc.math.clamp(distance, this.distanceMin, this.distanceMax);
    } else {
        return Math.max(distance, this.distanceMin);
    }
};


OrbitCamera.prototype._clampPitchAngle = function(pitch) {
    // Negative due as the pitch is inversed since the camera is orbiting the entity
    return pc.math.clamp(pitch, -this.pitchAngleMax, -this.pitchAngleMin);
};


OrbitCamera.quatWithoutYaw = new pc.Quat();
OrbitCamera.yawOffset = new pc.Quat();

OrbitCamera.prototype._calcPitch = function(quat, yaw) {
    var quatWithoutYaw = OrbitCamera.quatWithoutYaw;
    var yawOffset = OrbitCamera.yawOffset;

    yawOffset.setFromEulerAngles(0, -yaw, 0);
    quatWithoutYaw.mul2(yawOffset, quat);

    var transformedForward = new pc.Vec3();

    quatWithoutYaw.transformVector(pc.Vec3.FORWARD, transformedForward);

    return Math.atan2(transformedForward.y, -transformedForward.z) * pc.math.RAD_TO_DEG;
};

var EventTypes = pc.createScript("eventTypes");
EventTypes.PRELOADER_FINISHED = "preloader:finished", EventTypes.SAVE_APP = "app:save", EventTypes.POSTINITIALIZE = "postinitialize", EventTypes.RESET_GAME = "game:_reset", EventTypes.LEVEL_RESET = "level:reset", EventTypes.LEVEL_START = "level:start", EventTypes.LEVEL_COMPLETED = "level:completed", EventTypes.LEVEL_FAILED = "level:failed", EventTypes.SHAKE_CAMERA = "camera:shake", EventTypes.REFOCUS_CAMERA = "camera:refocus", EventTypes.ENABLE_AUDIO = "audio:enable", EventTypes.DISABLE_AUDIO = "audio:disable", EventTypes.PLAY_AUDIO = "audio:play", EventTypes.STOP_AUDIO = "audio:stop", EventTypes.MUTE_SOUND = "audio:mute", EventTypes.UNMUTE_SOUND = "audio:unmute", EventTypes.AUDIO_STATE_CHANGED = "audio:stateChanged", EventTypes.QUALITY_CHANGED = "quality:changed", EventTypes.QUALITY_UPDATE = "quality:update", EventTypes.QUALITY_NEXT = "quality:next", EventTypes.VIEWPORT_RESIZE = "viewport:resize", EventTypes.MEASURE_PERFORMANCE = "performance:measure", EventTypes.ADD_SCORES = "scores:add", EventTypes.RESET_SCORES = "scores:reset", EventTypes.SCORES_CHANGED = "scores:valueChanged", EventTypes.MAX_SCORES_CHANGED = "scores:maxValueChanged", EventTypes.INPUT_TAP = "input:tap", EventTypes.INPUT_DOWN = "input:down", EventTypes.INPUT_UP = "input:up", EventTypes.AIMING_STARTED = "aim:started", EventTypes.CREATE_BUBBLES = "level:createBubbles", EventTypes.BURST_PARTICLES = "particles:burst", EventTypes.SHOW_SCORES_EFFECT = "scores:showEffect", EventTypes.SHAKE_CONTACTING_CELL = "gameplay:shakeCell", EventTypes.SHOW_COMBO_EFFECT = "combo:showEffect", EventTypes.BUILD_ENVIRONMENT = "environment:build", EventTypes.CONFETTI = "vfx:confetti", EventTypes.CALCULATE_TOWER_PROPERTIES = "gameplay:calculateTowerProperties", EventTypes.BUILD_TOWER_MODEL = "gameplay:buildTowerModel", EventTypes.BUILD_GRID = "gameplay:buildGrid", EventTypes.PREPARE_FIRST_BUBBLE = "gameplay:prepareFirstBubble", EventTypes.PREPARE_BUBBLE_COLORS = "gameplay:prepareColors", EventTypes.ANIMATE_TOWER_OPENING = "gameplay:animateTowerOpening", EventTypes.ANIMATE_BUBBLES_APPEARING = "gameplay:animateBubblesAppearing", EventTypes.SHOW_UI = "gameplay:showUI", EventTypes.FIRST_LAUCH = "game:firstLaunch", EventTypes.BUBBLE_SHOT = "gameplay:bubbleShot", EventTypes.BUBBLE_REACHED_DESTINATION = "gameplay:bubbleReachedDestination", EventTypes.TURN_FINISHED = "gameplay:turnFinished", EventTypes.SHIFT_ROW = "gameplay:shiftRow", EventTypes.SHOOT = "gameplay:shoot", EventTypes.BUBBLE_DESTROYED = "gameplay:bubbleDestroyed", EventTypes.POWERUP_ACTIVATED = "powerup:activated", EventTypes.FIREBALL_DESTROYED = "fireball:destroyed", EventTypes.FIREBALL_EXPLODED = "fireball:exploded", EventTypes.UPDATE_BUBBLES_COUNTER = "ui:updateBubblesCounter", EventTypes.SET_NEXT_BUBBLE_COLOR = "ui:setNextBubbleColor", EventTypes.SHOW_BUBBLES_COUNTER = "ui:bubblesCounter:show", EventTypes.HIDE_BUBBLES_COUNTER = "ui:bubblesCounter:hide", EventTypes.SHOW_SCORES_TEXT = "ui:scoresText:show", EventTypes.HIDE_SCORES_TEXT = "ui:scoresText:hide", EventTypes.SHOW_POWERUP_BUTTON = "ui:powerupButton:show", EventTypes.HIDE_POWERUP_BUTTON = "ui:powerupButton:hide", EventTypes.START_TUTORIAL = "tutorial:start"; // Preloader.js
/* jshint esversion: 6 */
pc.script.createLoadingScreen(function(app) {
    var showSplash = function() {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'block';

        var logo = document.createElement('img');
        logo.src = 'data:image/png;base64,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';
        logo.id = 'logo';
        splash.appendChild(logo);

        var loaderBack = document.createElement('div');
        loaderBack.id = 'loaderBack';
        splash.appendChild(loaderBack);

        var loaderFrame = document.createElement('div');
        loaderFrame.id = 'loaderFrame';
        splash.querySelector('#loaderBack').appendChild(loaderFrame);

        var loaderBar = document.createElement('div');
        loaderBar.id = 'loaderBar';
        splash.querySelector('#loaderBack').appendChild(loaderBar);

        var loadingText = document.createElement('span');
        loadingText.innerHTML = '0%';
        loadingText.id = 'loadingText';
        splash.querySelector('#loaderBack').appendChild(loadingText);
    };

    var hideSplash = function() {
        console.log('v1.0; ©Famobi/IFGD, 2020');
        var splash = document.getElementById('application-splash-wrapper');
        if (splash && splash.parentElement) {
            splash.parentElement.removeChild(splash);
        }
        // var transitionScreen = TransitionScreen.app.root.findByName("TransitionScreen");
        // transitionScreen.hidePreloader(() => {});
        // TransitionScreen.app.fire(EventTypes.PRELOADER_FINISHED);
    };

    var setProgress = function(value) {
        var bar = document.getElementById('loaderBar');
        var loadingText = document.getElementById('loadingText');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            const displayValue = value * 0.98;
            bar.style.width = displayValue * 100 + '%';
            loadingText.innerHTML = Math.round(displayValue * 100) + '%';
        }
    };

    var createCss = function() {
        var css = [
            "@import url('https://fonts.googleapis.com/css?family=Teko:700&display=swap');",

            'body {',
            '    background-color: #1D1D15;',
            '}',

            'html {',
            '    background-color: #1D1D15;',
            '}',

            '.hide {',
            '   opacity: 0 !important;',
            '   transition: opacity 0.3s ease-in;',
            '}',

            '#logo {',
            '   position: absolute;',
            '   bottom: 70px;',
            '   left: calc(50% - 196px);',
            '}',

            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #1D1D15;',
            '}',

            '#application-splash {',
            '    position: absolute;',
            '    height: 250px;',
            '    width: 390px;',
            '    left: 0;',
            '    right: 0;',
            '    top: -40px;',
            '    bottom: 0;',
            '    margin: auto;',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',

            '#loaderBack {',
            '    bottom: 0;',
            '    height: 50px;',
            '    width: 100%;',
            '    position: absolute;',
            "    background-image: url('data:image/png;base64,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');",
            '    background-repeat: no-repeat;',
            '    background-position: left center;',
            '    background-size: 390px 100%;',
            '    z-index: 10',
            '}',

            '#loaderFrame {',
            '    height: 100%;',
            '    width: 100%;',
            '    position: absolute;',
            "    background-image: url('data:image/png;base64,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');",
            '    background-repeat: no-repeat;',
            '    background-position: left center;',
            '    background-size: 390px 100%;',
            '    z-index: 15',
            '}',

            '#loaderBar {',
            '    height: 100%;',
            '    width: 0%;',
            '    position: absolute;',
            "    background-image: url('data:image/png;base64,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');",
            "    background-repeat: no-repeat;",
            "    background-size: 390px 100%;",
            '}',

            '#loadingText {',
            '    color: white;',
            '    font-size: 26px;',
            "    font-family: 'Teko', sans-serif;",
            '    line-height: 50px;',
            '    left: 0;',
            '    right: 0;',
            '    top: 2px;',
            '    bottom: 0;',
            '    margin: auto;',
            '    position: absolute;',
            '    text-align: center;',
            '    z-index: 100;',
            '}',

            '@media (max-width: 480px) {',
            '   #application-splash {',
            '   height: 120px;',
            '   width: 195px;',
            '   top: 0;',
            '}',

            '#loaderBack {',
            '    height: 25px;',
            '    background-size: 195px 100%;',
            '}',

            '#loaderFrame {',
            '    background-size: 195px 100%;',
            '}',

            '#loaderBar {',
            "    background-size: 195px 100%;",
            '}',

            '#loadingText {',
            '    font-size: 16px;',
            '    line-height: 23px;',
            '}',

            '#logo {',
            '   position: absolute;',
            '   bottom: 40px;',
            '   left: calc(50% - 95px);',
            '}',
            '}'
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();

    app.on('preload:end', function() {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', function() {
        // hideSplash();
    });
    app.on('postinitialize', () => {
        var transitionScreen = TransitionScreen.app.root.findByName("TransitionScreen");
        transitionScreen.hidePreloader(() => {});
    });
    app.on('preloader:hide', () => {
        if (!window.stopOnPreloader) {
            document.getElementById('loadingText').innerHTML = '100%';
            var wrapper = document.querySelector('#application-splash-wrapper');
            wrapper.classList.add('hide');
            wrapper.addEventListener('transitionend', hideSplash);
            app.off('preloader:hide');
        }
    });
});

// transitionScreen.js
/* jshint esversion: 6 */
var TransitionScreen = pc.createScript('transitionScreen');

TransitionScreen.prototype.initialize = function() {
    const scriptingContext = this;

    TransitionScreen.app = this.app;
    TransitionScreen.instance = this.entity;

    console.log('Transition screen initialized');

    this.entity.transitionTo = function(callback, callbackContext, completeCallback, completeCallbackContext) {

        this.element.opacity = 0;
        this.tween(this.element)
            .to({
                opacity: 1.0
            }, 0.25, pc.SineOut)
            .on('complete', () => {

                if (callback) {
                    if (callbackContext) {
                        callback.apply(callbackContext);
                    } else {
                        callback();
                    }
                }

                scriptingContext.hidePopups();

                this.tween(this.element)
                    .to({
                        opacity: 0.0
                    }, 0.4, pc.Linear)
                    .on('complete', () => {
                        if (completeCallback) {
                            if (completeCallbackContext) {
                                completeCallback.apply(completeCallbackContext);
                            } else {
                                completeCallback();
                            }
                        }
                    })
                    .start();

            })
            .start();


    }.bind(this.entity);


    this.entity.hidePreloader = function(callback, callbackContext) {
        scriptingContext.app.fire('preloader:hide');
        this.element.opacity = 1;
        this.tween(this.element)
            .to({
                opacity: 0.0
            }, 0.55, pc.SineIn)
            .on('complete', () => {
                scriptingContext.app.fire(EventTypes.PRELOADER_FINISHED);
            })
            .start();
    }.bind(this.entity);

    /* Initial opacity, while preloader is visible */
    this.entity.element.opacity = 1;
};

TransitionScreen.prototype.update = function(dt) {

};

TransitionScreen.prototype.hidePopups = function() {
    const resultsWindow = this.app.root.findByName("ResultsWindow");
    if (resultsWindow) {
        resultsWindow.hide();
    }
};

pc.extend(pc, function() {
        var t = function(t) {
            this._app = t, this._tweens = [], this._add = []
        };
        t.prototype = {
            add: function(t) {
                return this._add.push(t), t
            },
            update: function(t) {
                for (var i = 0, e = this._tweens.length; i < e;) this._tweens[i].update(t) ? i++ : (this._tweens.splice(i, 1), e--);
                this._add.length && (this._tweens = this._tweens.concat(this._add), this._add.length = 0)
            }
        };
        var i = function(t, i, e) {
                pc.events.attach(this), this.manager = i, e && (this.entity = null), this.time = 0, this.complete = !1, this.playing = !1, this.stopped = !0, this.pending = !1, this.target = t, this.duration = 0, this._currentDelay = 0, this.timeScale = 1, this._reverse = !1, this._delay = 0, this._yoyo = !1, this._count = 0, this._numRepeats = 0, this._repeatDelay = 0, this._from = !1, this._slerp = !1, this._fromQuat = new pc.Quat, this._toQuat = new pc.Quat, this._quat = new pc.Quat, this.easing = pc.EASE_LINEAR, this._sv = {}, this._ev = {}
            },
            e = function(t) {
                var i;
                return t instanceof pc.Vec2 ? i = {
                    x: t.x,
                    y: t.y
                } : t instanceof pc.Vec3 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z
                } : t instanceof pc.Vec4 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Quat ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Color ? (i = {
                    r: t.r,
                    g: t.g,
                    b: t.b
                }, void 0 !== t.a && (i.a = t.a)) : i = t, i
            };
        i.prototype = {
            to: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this
            },
            from: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._from = !0, this
            },
            rotate: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._slerp = !0, this
            },
            start: function() {
                var t, i, e, n;
                if (this.playing = !0, this.complete = !1, this.stopped = !1, this._count = 0, this.pending = this._delay > 0, this._reverse && !this.pending ? this.time = this.duration : this.time = 0, this._from) {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this._properties[t], this._ev[t] = this.target[t]);
                    this._slerp && (this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._fromQuat.setFromEulerAngles(i, e, n))
                } else {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this.target[t], this._ev[t] = this._properties[t]);
                    this._slerp && (this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._toQuat.setFromEulerAngles(i, e, n))
                }
                return this._currentDelay = this._delay, this.manager.add(this), this
            },
            pause: function() {
                this.playing = !1
            },
            resume: function() {
                this.playing = !0
            },
            stop: function() {
                this.playing = !1, this.stopped = !0
            },
            delay: function(t) {
                return this._delay = t, this.pending = !0, this
            },
            repeat: function(t, i) {
                return this._count = 0, this._numRepeats = t, this._repeatDelay = i || 0, this
            },
            loop: function(t) {
                return t ? (this._count = 0, this._numRepeats = 1 / 0) : this._numRepeats = 0, this
            },
            yoyo: function(t) {
                return this._yoyo = t, this
            },
            reverse: function() {
                return this._reverse = !this._reverse, this
            },
            chain: function() {
                for (var t = arguments.length; t--;) t > 0 ? arguments[t - 1]._chained = arguments[t] : this._chained = arguments[t];
                return this
            },
            update: function(t) {
                if (this.stopped) return !1;
                if (!this.playing) return !0;
                if (!this._reverse || this.pending ? this.time += t * this.timeScale : this.time -= t * this.timeScale, this.pending) {
                    if (!(this.time > this._currentDelay)) return !0;
                    this._reverse ? this.time = this.duration - (this.time - this._currentDelay) : this.time = this.time - this._currentDelay, this.pending = !1
                }
                var i = 0;
                (!this._reverse && this.time > this.duration || this._reverse && this.time < 0) && (this._count++, this.complete = !0, this.playing = !1, this._reverse ? (i = this.duration - this.time, this.time = 0) : (i = this.time - this.duration, this.time = this.duration));
                var e, n, s = this.time / this.duration,
                    r = this.easing(s);
                for (var h in this._properties) this._properties.hasOwnProperty(h) && (e = this._sv[h], n = this._ev[h], this.target[h] = e + (n - e) * r);
                if (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, r), this.entity && (this.entity._dirtifyLocal(), this.element && this.entity.element && (this.entity.element[this.element] = this.target), this._slerp && this.entity.setLocalRotation(this._quat)), this.fire("update", t), this.complete) {
                    var a = this._repeat(i);
                    return a ? this.fire("loop") : (this.fire("complete", i), this.entity && this.entity.off("destroy", this.stop, this), this._chained && this._chained.start()), a
                }
                return !0
            },
            _repeat: function(t) {
                if (this._count < this._numRepeats) {
                    if (this._reverse ? this.time = this.duration - t : this.time = t, this.complete = !1, this.playing = !0, this._currentDelay = this._repeatDelay, this.pending = !0, this._yoyo) {
                        for (var i in this._properties) tmp = this._sv[i], this._sv[i] = this._ev[i], this._ev[i] = tmp;
                        this._slerp && (this._quat.copy(this._fromQuat), this._fromQuat.copy(this._toQuat), this._toQuat.copy(this._quat))
                    }
                    return !0
                }
                return !1
            }
        };
        var n = function(t) {
                return 1 - s(1 - t)
            },
            s = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            };
        return {
            TweenManager: t,
            Tween: i,
            Linear: function(t) {
                return t
            },
            QuadraticIn: function(t) {
                return t * t
            },
            QuadraticOut: function(t) {
                return t * (2 - t)
            },
            QuadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            CubicIn: function(t) {
                return t * t * t
            },
            CubicOut: function(t) {
                return --t * t * t + 1
            },
            CubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            QuarticIn: function(t) {
                return t * t * t * t
            },
            QuarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            QuarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            QuinticIn: function(t) {
                return t * t * t * t * t
            },
            QuinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            QuinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            SineIn: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
            },
            SineOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
            },
            SineInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
            },
            ExponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            ExponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            ExponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            CircularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            CircularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            CircularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            BackIn: function(t) {
                return t * t * (2.70158 * t - 1.70158)
            },
            BackOut: function(t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            },
            BackInOut: function(t) {
                var i = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((i + 1) * t - i) * .5 : .5 * ((t -= 2) * t * ((i + 1) * t + i) + 2)
            },
            BounceIn: n,
            BounceOut: s,
            BounceInOut: function(t) {
                return t < .5 ? .5 * n(2 * t) : .5 * s(2 * t - 1) + .5
            },
            ElasticIn: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4))
            },
            ElasticOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / .4) + 1)
            },
            ElasticInOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * -.5 : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * .5 + 1)
            }
        }
    }()),
    function() {
        pc.Application.prototype.addTweenManager = function() {
            this._tweenManager = new pc.TweenManager(this), this.on("update", function(t) {
                this._tweenManager.update(t)
            })
        }, pc.Application.prototype.tween = function(t) {
            return new pc.Tween(t, this._tweenManager)
        }, pc.Application.prototype.stopAllTweens = function(t) {
            for (var i = this._tweenManager._tweens.length - 1; i > -1; i--) this._tweenManager._tweens[i].entity === t && this._tweenManager._tweens[i].stop()
        }, pc.Entity.prototype.tween = function(t, i) {
            var e = this._app.tween(t);
            return e.entity = this, this.once("destroy", e.stop, e), i && i.element && (e.element = i.element), e
        };
        var t = pc.Application.getApplication();
        t && t.addTweenManager()
    }(); // utils.js
/* jshint esversion: 6 */
var Utils = pc.createScript('utils');

Utils.prototype.initialize = function() {
    Utils.app = this.app;

    this.injectMeshCollisionSystem();
};

Utils.prototype.update = function(dt) {

};

Utils.prototype.injectMeshCollisionSystem = function() {
    /*
    console.log("Injecting advanced mesh physics ....");

    this.app.systems.collision.implementations.mesh.createPhysicalShape = function(entity, data) {
          if(entity.rigidbody && entity.rigidbody.type === pc.BODYTYPE_DYNAMIC) {
                if (typeof Ammo !== 'undefined' && data.model) {
                    var model = data.model;
                    var shape = new Ammo.btConvexHullShape();
                    var i, j;

                    var addPointIfUnique = function(array, a, b, c) {
                        for(var up = 0; up < array.length; up++) {
                            if(array[up][0] === a && array[up][1] === b && array[up][2] === c) {
                                return;
                            }
                        }
                        array.push([a, b, c]);
                    };

                    for (i = 0; i < model.meshInstances.length; i++) {
                        var meshInstance = model.meshInstances[i];
                        var mesh = meshInstance.mesh;
                        var ib = mesh.indexBuffer[pc.RENDERSTYLE_SOLID];
                        var vb = mesh.vertexBuffer;
                        var uniquePoints = [];

                        var format = vb.getFormat();
                        var stride = format.size / 4;
                        var positions;
                        for (j = 0; j < format.elements.length; j++) {
                            var element = format.elements[j];
                            if (element.name === pc.SEMANTIC_POSITION) {
                                positions = new Float32Array(vb.lock(), element.offset);
                            }
                        }

                        var indices = new Uint16Array(ib.lock());
                        var numTriangles = mesh.primitive[0].count / 3;
                        var i1, i2, i3;

                        var base = mesh.primitive[0].base;
                        for (j = 0; j < numTriangles; j++) {
                            i1 = indices[base + j * 3] * stride;
                            i2 = indices[base + j * 3 + 1] * stride;
                            i3 = indices[base + j * 3 + 2] * stride;

                            addPointIfUnique(uniquePoints, positions[i1], positions[i1 + 1], positions[i1 + 2]);
                            addPointIfUnique(uniquePoints, positions[i2], positions[i2 + 1], positions[i2 + 2]);
                            addPointIfUnique(uniquePoints, positions[i3], positions[i3 + 1], positions[i3 + 2]);
                        }

                        var ammoVec = new Ammo.btVector3();
                        for(var u = 0; u < uniquePoints.length; u++) {
                            var point = uniquePoints[u];
                            ammoVec.setValue(point[0], point[1], point[2]);
                            shape.addPoint(ammoVec, true);
                        }
                        Ammo.destroy(ammoVec);



                        if(GameConfig.getAttribute('drawMeshVertices')) {
                            console.group(entity.name + ' has ' + uniquePoints.length + ' vertices:');
                            uniquePoints.forEach(point => {
                                console.log(point[0], point[1], point[2]);
                                var vertex1 = pc.app.root.findByName("ObjectsPrefabs").findByName("VertexModel").clone();
                                vertex1.setLocalPosition(point[0], point[1], point[2]);
                                entity.addChild(vertex1);
                            });
                            console.groupEnd();
                        }
                    }

                    var entityTransform = entity.getWorldTransform();
                    var scale = entityTransform.getScale();
                    var vec = new Ammo.btVector3();
                    vec.setValue(scale.x * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1), scale.y * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1), scale.z * (GameConfig.getAttribute('meshPhysicsScaleFactor') || 1));
                    shape.setLocalScaling(vec);
                    Ammo.destroy(vec);


                    return shape;
                }
                return undefined;
            } else {

                    if (typeof Ammo !== 'undefined' && data.model) {
                    var model = data.model;
                    var shape = new Ammo.btCompoundShape();

                    var i, j;
                    for (i = 0; i < model.meshInstances.length; i++) {
                        var meshInstance = model.meshInstances[i];
                        var mesh = meshInstance.mesh;
                        var triMesh;

                        if (this.system._triMeshCache[mesh.id]) {
                            triMesh = this.system._triMeshCache[mesh.id];
                        } else {
                            var ib = mesh.indexBuffer[pc.RENDERSTYLE_SOLID];
                            var vb = mesh.vertexBuffer;

                            var format = vb.getFormat();
                            var stride = format.size / 4;
                            var positions;
                            for (j = 0; j < format.elements.length; j++) {
                                var element = format.elements[j];
                                if (element.name === pc.SEMANTIC_POSITION) {
                                    positions = new Float32Array(vb.lock(), element.offset);
                                }
                            }

                            var indices = new Uint16Array(ib.lock());
                            var numTriangles = mesh.primitive[0].count / 3;

                            var v1 = new Ammo.btVector3();
                            var v2 = new Ammo.btVector3();
                            var v3 = new Ammo.btVector3();
                            var i1, i2, i3;

                            var base = mesh.primitive[0].base;
                            triMesh = new Ammo.btTriangleMesh();
                            this.system._triMeshCache[mesh.id] = triMesh;

                            for (j = 0; j < numTriangles; j++) {
                                i1 = indices[base + j * 3] * stride;
                                i2 = indices[base + j * 3 + 1] * stride;
                                i3 = indices[base + j * 3 + 2] * stride;
                                v1.setValue(positions[i1], positions[i1 + 1], positions[i1 + 2]);
                                v2.setValue(positions[i2], positions[i2 + 1], positions[i2 + 2]);
                                v3.setValue(positions[i3], positions[i3 + 1], positions[i3 + 2]);
                                triMesh.addTriangle(v1, v2, v3, true);
                            }

                            Ammo.destroy(v1);
                            Ammo.destroy(v2);
                            Ammo.destroy(v3);
                        }

                        var useQuantizedAabbCompression = true;
                        var triMeshShape = new Ammo.btBvhTriangleMeshShape(triMesh, useQuantizedAabbCompression);

                        var scaling = this.system._getNodeScaling(meshInstance.node);
                        triMeshShape.setLocalScaling(scaling);
                        Ammo.destroy(scaling);

                        var transform = this.system._getNodeTransform(meshInstance.node);
                        shape.addChildShape(transform, triMeshShape);
                        Ammo.destroy(transform);
                    }

                    var entityTransform = entity.getWorldTransform();
                    var scale = entityTransform.getScale();
                    var vec = new Ammo.btVector3();
                    vec.setValue(scale.x, scale.y, scale.z);
                    shape.setLocalScaling(vec);
                    Ammo.destroy(vec);

                    return shape;
                }
                return undefined;

            }
     };


    this.app.systems.collision.implementations.mesh.system._getNodeScaling = function (node) {
        var wtm = node.getWorldTransform();
        var scl = wtm.getScale();
        return new Ammo.btVector3(scl.x, scl.y, scl.z);
    };

    this.app.systems.collision.implementations.mesh.system._getNodeTransform = function (node, relative) {
        var pos, rot;

        if (relative) {
            this._calculateNodeRelativeTransform(node, relative);

            pos = vec3;
            rot = quat;
            mat4.getTranslation(pos);
            rot.setFromMat4(mat4);
        } else {
            pos = node.getPosition();
            rot = node.getRotation();
        }

        var transform = new Ammo.btTransform();
        transform.setIdentity();
        var origin = transform.getOrigin();
        origin.setValue(pos.x, pos.y, pos.z);

        var ammoQuat = new Ammo.btQuaternion();
        ammoQuat.setValue(rot.x, rot.y, rot.z, rot.w);
        transform.setRotation(ammoQuat);
        Ammo.destroy(ammoQuat);
        Ammo.destroy(origin);

        return transform;
    },


    this.app.systems.collision.implementations.mesh.remove = function(entity, data) {
           if (data.shape && data.shape.getNumChildShapes) {
                var numShapes = data.shape.getNumChildShapes();
                for (var i = 0; i < numShapes; i++) {
                    var shape = data.shape.getChildShape(i);
                    Ammo.destroy(shape);
                }
            }

            var app = this.system.app;
            if (entity.rigidbody && entity.rigidbody.body) {
                app.systems.rigidbody.removeBody(entity.rigidbody.body);
                entity.rigidbody.disableSimulation();
            }

            if (data.shape)
                Ammo.destroy(data.shape);

            if (entity.trigger) {
                entity.trigger.destroy();
                delete entity.trigger;
            }

            if (app.scene.containsModel(data.model)) {
                app.root.removeChild(data.model.graph);
                app.scene.removeModel(data.model);
            }
    };
    */
};

pc.Entity.prototype.delayedCall = function(durationMS, f, scope) {
    var n = 0;
    while (this["delayedExecuteTween" + n]) {
        n++;
    }
    var id = "delayedExecuteTween" + n;
    var m;
    this[id] = this.tween(m)
        .to(1, durationMS / 1000, pc.Linear);
    this[id].start();

    this[id].once("complete", function() {
        f.call(scope);
        this[id] = null;
    }, this);

    return this[id];
};

Utils.raycastAll = function(from, to, results) {
    results = results || [];
    lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if (lastResult.entity) {
            for (var i = 0; i < results.length; i++) {
                if (results[i] === lastResult.entity) {
                    return results;
                }
            }
            results.push(lastResult.entity);
            Utils.raycastAll(lastResult.point.sub(lastResult.normal.scale(0.01)), to, results);
        }
    }
    return results;
};

/**
 *  Raycast through multiple entities returning RaycastResult instances (entity, point, normal) instead of entities.
 **/
Utils.raycastAllAdvanced = function(from, to, results) {
    results = results || [];
    lastResult = this.app.systems.rigidbody.raycastFirst(from, to);
    if (lastResult) {
        if (lastResult.entity) {
            // this prevents rays from bouncing off the same entities
            // in a loop causing ammojs to crash
            for (var i = 0; i < results.length; i++) {
                if (results[i].entity === lastResult.entity) {
                    return results;
                }
            }
            results.push(lastResult);
            Utils.raycastAllAdvanced(lastResult.point.sub(lastResult.normal.scale(0.01)), to, results);
        }
    }
    return results;
};

pc.Entity.prototype.childrenAlphaAppear = function(initialAlpha, duration, sine, delay) {
    for (var i = this.children.length - 1; i > -1; i--) {
        var child = this.children[i];
        if (child instanceof pc.Entity) {
            child.childrenAlphaAppear(initialAlpha, duration, sine, delay);
        }
        if (child.element) {
            var targetAlpha = child.element.opacity;
            child.element.opacity = initialAlpha;
            child.tween(child.element)
                .to({
                    opacity: targetAlpha
                }, duration, sine)
                .delay(delay)
                .start();
        }
    }
};

pc.GraphicsDevice.prototype.updateClientRect = function() {
    if (window.visualViewport) {
        this.clientRect = this.canvas.getBoundingClientRect();
        this.clientRect.x = window.visualViewport.offsetLeft;
        this.clientRect.y = window.visualViewport.offsetTop;
        this.clientRect.width = window.visualViewport.width;
        this.clientRect.height = window.visualViewport.height;
    } else {
        this.clientRect = this.canvas.getBoundingClientRect();
    }
};

Utils.lerpColor = function(colorA, colorB, progress, targetColor) {
    return targetColor.set(colorA.r + (colorB.r - colorA.r) * progress, colorA.g + (colorB.g - colorA.g) * progress, colorA.b + (colorB.b - colorA.b) * progress, 1);
};


Utils.segmentPointDistance = function(A, B, C) {
    if (!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }

    //A - the point
    //B, C - the segment start and end
    Utils.tempVectors.d.sub2(C, B).normalize();
    Utils.tempVectors.v.sub2(A, B);
    const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
    Utils.tempVectors.P.add2(B, Utils.tempVectors.d.scale(t));
    return Utils.tempVectors.P.distance(A);
};


Utils.checkSegmentSphereIntersection = function(B, C, A, r) {
    if (!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }

    //A - the point
    //B, C - the segment start and end
    const lengthBCSquared = (B.x - C.x) * (B.x - C.x) + (B.y - C.y) * (B.y - C.y) + (B.z - C.z) * (B.z - C.z);
    const lengthABSquared = (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y) + (A.z - B.z) * (A.z - B.z);
    const lengthACSquared = (A.x - C.x) * (A.x - C.x) + (A.y - C.y) * (A.y - C.y) + (A.z - C.z) * (A.z - C.z);

    //if any of the end points is inside of the sphere, then true
    if (lengthABSquared <= r * r || lengthACSquared <= r * r) {
        return true;
    }

    Utils.tempVectors.d.sub2(C, B).normalize();
    Utils.tempVectors.v.sub2(A, B);
    const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
    if (t < 0 || t * t > lengthBCSquared) {
        // console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
        return false;
    }
    Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
    Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
    const verticalDistance = Utils.tempVectors.P.distance(A);
    if (verticalDistance > r) {
        return false;
    }

    const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
    const t1 = t + dx;
    const t2 = t - dx;
    return ((t1 >= 0 && t1 * t1 <= lengthBCSquared) || (t2 >= 0 && t2 * t2 <= lengthBCSquared));
};

Utils.findSegmentSphereIntersection = function(B, C, A, r) {
    if (!Utils.tempVectors) {
        Utils.tempVectors = {
            d: new pc.Vec3(),
            dScaled: new pc.Vec3(),
            dx1: new pc.Vec3(),
            dx2: new pc.Vec3(),
            v: new pc.Vec3(),
            P: new pc.Vec3(),
            X1: new pc.Vec3(),
            X2: new pc.Vec3()
        };
    }

    //A - the point
    //B, C - the segment start and end
    const lengthBCSquared = (B.x - C.x) * (B.x - C.x) + (B.y - C.y) * (B.y - C.y) + (B.z - C.z) * (B.z - C.z);
    Utils.tempVectors.d.sub2(C, B).normalize();
    Utils.tempVectors.v.sub2(A, B);
    const t = Utils.tempVectors.v.dot(Utils.tempVectors.d);
    // if(t < 0 || t * t > lengthBCSquared) {
    //     console.log(`perpendicular point is not on that segment: ${t * t} > ${lengthBCSquared}`);
    //     return null;
    // }
    Utils.tempVectors.dScaled.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx1.copy(Utils.tempVectors.d);
    Utils.tempVectors.dx2.copy(Utils.tempVectors.d);
    Utils.tempVectors.P.add2(B, Utils.tempVectors.dScaled.scale(t));
    const verticalDistance = Utils.tempVectors.P.distance(A);
    if (verticalDistance > r) {
        return null;
    }

    const dx = Math.sqrt(r * r - verticalDistance * verticalDistance);
    const t1 = t + dx;
    const t2 = t - dx;

    const results = [];
    if (t1 >= 0 && t1 * t1 <= lengthBCSquared) {
        Utils.tempVectors.X1.add2(Utils.tempVectors.P, Utils.tempVectors.dx1.scale(dx));
        results.push(Utils.tempVectors.X1);
    }

    if (t2 >= 0 && t2 * t2 <= lengthBCSquared) {
        Utils.tempVectors.X2.add2(Utils.tempVectors.P, Utils.tempVectors.dx2.scale(-dx));
        results.push(Utils.tempVectors.X2);
    }

    return results.length > 0 ? results : null;
};

Utils.findSpheresCollisionNormal = function(centerA, radiusA, centerB, radiusB) {
    if (centerA.distance(centerB) <= radiusA + radiusB) {
        const direction = new pc.Vec3().sub2(centerB, centerA);
        return direction.normalize();
    }

    return null;
};


Utils.distanceBetween = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

Utils.checkContact = function(entityA, entityB) {
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <= (entityA.script.item.collisionDiameter * entityA.collisionScale / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale / 2) &&
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale / 2 + entityB.script.item.collisionHeight * entityB.collisionScale / 2);
};


Utils.checkContactRough = function(entityA, entityB) {
    var scaleFactor = 1.1;
    var pos1 = entityA.getPosition();
    var pos2 = entityB.getPosition();
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z)) <= (entityA.script.item.collisionDiameter * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionDiameter * entityB.collisionScale * scaleFactor / 2) &&
        Math.abs(pos1.y - pos2.y) <= (entityA.script.item.collisionHeight * entityA.collisionScale * scaleFactor / 2 + entityB.script.item.collisionHeight * entityB.collisionScale * scaleFactor / 2);
};

Utils.contactTestInternal = function(entityA, entityB, callback) {

    var resultCallback = new Ammo.ConcreteContactResultCallback();
    resultCallback.addSingleResult = function(
        manifoldPoint,
        collisionObjectA,
        id0,
        index0,
        collisionObjectB,
        id1,
        index1
    ) {
        if (callback) {
            callback(entityA, entityB);
        }
    };

    Utils.app.systems.rigidbody.dynamicsWorld.contactPairTest(entityA.rigidbody.body, entityB.rigidbody.body, resultCallback);
};

Utils.distanceXZ = function(pos1, pos2) {
    return Math.sqrt((pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.z - pos2.z) * (pos1.z - pos2.z));
};

Utils.distanceBetweenEntities = function(posA, posB) {
    return Math.sqrt((posA.x - posB.x) * (posA.x - posB.x) + (posA.y - posB.y) * (posA.y - posB.y) + (posA.z - posB.z) * (posA.z - posB.z));
};

Utils.tweenText = function(textElement, initialValue, targetValue, duration, delay, easing, playCountingSound) {
    textElement.element.textValue = initialValue;
    textElement.element.text = '' + Math.round(initialValue);
    textElement.tween(textElement.element)
        .to({
            textValue: targetValue
        }, duration, easing)
        .delay(delay)
        .on('update', function() {
            textElement.element.text = '' + Math.round(textElement.element.textValue);
        })
        .start();
};

Utils.getRandomItem = function(objects, startIndex, length) {

    if (objects === null) {
        return null;
    }
    if (startIndex === undefined) {
        startIndex = 0;
    }
    if (length === undefined) {
        length = objects.length;
    }

    var randomIndex = startIndex + Math.floor(Math.random() * length);

    return objects[randomIndex] === undefined ? null : objects[randomIndex];

};

Utils.removeRandomItem = function(objects, startIndex, length) {

    if (objects === null) { // undefined or null
        return null;
    }

    if (startIndex === undefined) {
        startIndex = 0;
    }
    if (length === undefined) {
        length = objects.length;
    }

    var randomIndex = startIndex + Math.floor(Math.random() * length);
    if (randomIndex < objects.length) {
        var removed = objects.splice(randomIndex, 1);
        return removed[0] === undefined ? null : removed[0];
    } else {
        return null;
    }

};

Utils.shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

Utils.humanizeTime = function(seconds) {
    var restSeconds = seconds;
    var hours = Math.floor(restSeconds / 3600);
    restSeconds %= 3600;
    var minutes = Math.floor(restSeconds / 60);
    restSeconds %= 60;

    return /*(hours < 10 ? "0" : "") + hours + ":" +*/ (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + Math.floor(restSeconds);
};

Utils.getBoundingBox = function(entity, extendDistance) {
    if (entity.model && entity.model.meshInstances && entity.model.meshInstances.length > 0) {
        var meshInstances = entity.model.meshInstances;
        var bbox = new pc.BoundingBox();
        bbox.copy(meshInstances[0].aabb);
        for (var i = 1; i < meshInstances.length; i++) {
            bbox.add(meshInstances[i].aabb);
        }
        if (extendDistance) {
            bbox.halfExtents.add(extendDistance);
        }
        return bbox;
    }
    return null;

};

/* Logger */
var log = function(...args) {
    if (GameConfig.getAttribute('enableLogging')) {
        console.log(1, arguments);
        console.log(...args);
    } else {
        console.log(2);
    }

};

/**
 * Normalize an angle to the [-Pi, Pi] range.
 */
Utils.normalizeAngle = function(angle) {
    angle = angle % (2 * Math.PI);

    return angle > Math.PI ? angle - 2 * Math.PI : angle < -Math.PI ? angle + 2 * Math.PI : angle;
};

/**
 *  Returns the value (angle)/360
 */

Utils.getAngleValue = function(angle) {
    angle = (angle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    return angle / (2 * Math.PI);
};

Utils.randomInRangeSigned = function(a, b) {
    if (Math.random() <= 0.5) {
        return pc.math.random(Math.min(-a, -b), Math.max(-a, -b));
    } else {
        return pc.math.random(Math.min(a, b), Math.max(a, b));
    }
};

Utils.vibrate = function(pattern) {
    if (GameplayController.enableVibration && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(pattern);
    }
};
Utils.setMat4Forward = (function() {
    var x, y, z;

    x = new pc.Vec3();
    y = new pc.Vec3();
    z = new pc.Vec3();

    return function(mat4, forward, up) {
        // Inverse the forward direction as +z is pointing backwards due to the coordinate system
        z.copy(forward).scale(-1);
        y.copy(up).normalize();
        x.cross(y, z).normalize();
        y.cross(z, x);

        var r = mat4.data;

        r[0] = x.x;
        r[1] = x.y;
        r[2] = x.z;
        r[3] = 0;
        r[4] = y.x;
        r[5] = y.y;
        r[6] = y.z;
        r[7] = 0;
        r[8] = z.x;
        r[9] = z.y;
        r[10] = z.z;
        r[11] = 0;
        r[15] = 1;

        return mat4;
    };
}());


!(function() {
    var MAX_CACHE = 256;

    var quats = [];
    var vecs = [];
    var nextQuat = 0;
    var nextVec = 0;

    for (var i = 0; i < MAX_CACHE; i++) {
        vecs.push(new pc.Vec3());
        quats.push(new pc.Quat());
    }

    function Q(existing) {
        var q = quats[nextQuat++ & (MAX_CACHE - 1)];
        if (existing !== false) q.copy(existing || pc.Quat.IDENTITY);
        return q;
    }

    function V(existing, y, z) {
        var v = vecs[nextVec++ & (MAX_CACHE - 1)];
        if (y !== undefined && z !== undefined) {
            var d = v.data;
            d[0] = existing;
            d[1] = y;
            d[2] = z;
            return v;
        }
        if (existing !== undefined) {
            var d1 = v.data;
            var d2 = existing.data;
            d1[0] = d2[0];
            d1[1] = d2[1];
            d1[2] = d2[2];
        }
        return v;
    }

    pc.Vec3.temp = V;
    pc.Quat.temp = Q;

    function angleBetween(vector1, vector2, up) {
        up = up || pc.Vec3.UP;
        return Math.atan2(V().cross(vector1, vector2).dot(up), vector1.dot(vector2)) * pc.math.RAD_TO_DEG;
    }

    pc.Vec3.prototype.angle = function(vector, up) {
        return angleBetween(this, vector, up);
    };

    function orthogonal(v) {

        var x = Math.abs(v.x);
        var y = Math.abs(v.y);
        var z = Math.abs(v.z);
        var other = x < y ? (x < z ? pc.Vec3.RIGHT : pc.Vec3.FORWARD) :
            (y < z ? pc.Vec3.UP : pc.Vec3.FORWARD);
        return V().cross(v, other);
    }

    function fromToRotation(v1, v2, q) {
        var kct = v1.dot(v2);
        q = q || Q();
        if (kct <= -0.999) {
            q.w = 0;
            var v = orthogonal(v1).normalize();
            q.x = v.x;
            q.y = v.y;
            q.z = v.z;
            return q;
        }

        var half = V(v1).add(v2).scale(0.5);
        q.w = v1.dot(half);
        var cross = V().cross(v1, half);
        q.x = cross.x;
        q.y = cross.y;
        q.z = cross.z;
        return q.normalize();
    }

    pc.Quat.prototype.fromToRotation = function(v1, v2) {
        return fromToRotation(v1, v2, this);
    };

    pc.Quat.prototype.twist = function(axis) {
        var orth = orthogonal(axis);
        var transformed = this.transformVector(orth, V());
        var flattened = V(transformed).sub(V(axis).scale(transformed.dot(axis))).normalize();
        var angle = Math.acos(orth.dot(flattened)) * pc.math.RAD_TO_DEG;
        return V(this.x, this.y, this.z).dot(axis) > 0 ? -angle : angle;
    };

    var m = new pc.Mat4();

    pc.Quat.prototype.lookAt = function(from, to, up) {
        m.setLookAt(from, to, up || pc.Vec3.UP);
        this.setFromMat4(m);
        return this;
    };

    var oldMul = pc.Vec3.prototype.mul;

    pc.Vec3.prototype.mul = function(p0, p1, p2) {
        if (p0 instanceof pc.Quat) {
            return p0.transformVector(this, this);
        } else
            return oldMul.call(this, p0, p1, p2);
    };
})();

"undefined" != typeof document && (function(t, e) {
    function s(t, e) {
        for (var n in e) try {
            t.style[n] = e[n]
        } catch (t) {}
        return t
    }

    function H(t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
    }

    function R(t, e) {
        if ("array" !== H(e)) return -1;
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, o = e.length; n < o; n++)
            if (e[n] === t) return n;
        return -1
    }

    function I() {
        var t, e = arguments;
        for (t in e[1])
            if (e[1].hasOwnProperty(t)) switch (H(e[1][t])) {
                case "object":
                    e[0][t] = I({}, e[0][t], e[1][t]);
                    break;
                case "array":
                    e[0][t] = e[1][t].slice(0);
                    break;
                default:
                    e[0][t] = e[1][t]
            }
            return 2 < e.length ? I.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2))) : e[0]
    }

    function N(t) {
        return 1 === (t = Math.round(255 * t).toString(16)).length ? "0" + t : t
    }

    function S(t, e, n, o) {
        t.addEventListener ? t[o ? "removeEventListener" : "addEventListener"](e, n, !1) : t.attachEvent && t[o ? "detachEvent" : "attachEvent"]("on" + e, n)
    }

    function D(t, o) {
        function g(t, e, n, o) {
            return l[0 | t][Math.round(Math.min((e - n) / (o - n) * z, z))]
        }

        function r() {
            C.legend.fps !== L && (C.legend.fps = L, C.legend[c] = L ? "FPS" : "ms"), w = L ? O.fps : O.duration, C.count[c] = 999 < w ? "999+" : w.toFixed(99 < w ? 0 : F.decimals)
        }

        function m() {
            for (p = n(), T < p - F.threshold && (O.fps -= O.fps / Math.max(1, 60 * F.smoothing / F.interval), O.duration = 1e3 / O.fps), y = F.history; y--;) j[y] = 0 === y ? O.fps : j[y - 1], q[y] = 0 === y ? O.duration : q[y - 1];
            if (r(), F.heat) {
                if (E.length)
                    for (y = E.length; y--;) E[y].el.style[h[E[y].name].heatOn] = L ? g(h[E[y].name].heatmap, O.fps, 0, F.maxFps) : g(h[E[y].name].heatmap, O.duration, F.threshold, 0);
                if (C.graph && h.column.heatOn)
                    for (y = M.length; y--;) M[y].style[h.column.heatOn] = L ? g(h.column.heatmap, j[y], 0, F.maxFps) : g(h.column.heatmap, q[y], F.threshold, 0)
            }
            if (C.graph)
                for (v = 0; v < F.history; v++) M[v].style.height = (L ? j[v] ? Math.round(b / F.maxFps * Math.min(j[v], F.maxFps)) : 0 : q[v] ? Math.round(b / F.threshold * Math.min(q[v], F.threshold)) : 0) + "px"
        }

        function k() {
            20 > F.interval ? (f = i(k), m()) : (f = setTimeout(k, F.interval), x = i(m))
        }

        function G(t) {
            (t = t || window.event).preventDefault ? (t.preventDefault(), t.stopPropagation()) : (t.returnValue = !1, t.cancelBubble = !0), O.toggle()
        }

        function U() {
            F.toggleOn && S(C.container, F.toggleOn, G, 1), t.removeChild(C.container)
        }

        function V() {
            if (C.container && U(), h = D.theme[F.theme], !(l = h.compiledHeatmaps || []).length && h.heatmaps.length) {
                for (v = 0; v < h.heatmaps.length; v++)
                    for (l[v] = [], y = 0; y <= z; y++) {
                        var e, n = l[v],
                            o = y;
                        e = .33 / z * y;
                        var a = h.heatmaps[v].saturation,
                            i = h.heatmaps[v].lightness,
                            p = void 0,
                            c = void 0,
                            u = void 0,
                            d = u = void 0,
                            g = p = c = void 0;
                        g = void 0;
                        0 === (u = .5 >= i ? i * (1 + a) : i + a - i * a) ? e = "#000" : (c = (u - (d = 2 * i - u)) / u, g = (e *= 6) - (p = Math.floor(e)), g *= u * c, 0 === p || 6 === p ? (p = u, c = d + g, u = d) : 1 === p ? (p = u - g, c = u, u = d) : 2 === p ? (p = d, c = u, u = d + g) : 3 === p ? (p = d, c = u - g) : 4 === p ? (p = d + g, c = d) : (p = u, c = d, u -= g), e = "#" + N(p) + N(c) + N(u)), n[o] = e
                    }
                h.compiledHeatmaps = l
            }
            for (var m in C.container = s(document.createElement("div"), h.container), C.count = C.container.appendChild(s(document.createElement("div"), h.count)), C.legend = C.container.appendChild(s(document.createElement("div"), h.legend)), C.graph = F.graph ? C.container.appendChild(s(document.createElement("div"), h.graph)) : 0, E.length = 0, C) C[m] && h[m].heatOn && E.push({
                name: m,
                el: C[m]
            });
            if (M.length = 0, C.graph)
                for (C.graph.style.width = F.history * h.column.width + (F.history - 1) * h.column.spacing + "px", y = 0; y < F.history; y++) M[y] = C.graph.appendChild(s(document.createElement("div"), h.column)), M[y].style.position = "absolute", M[y].style.bottom = 0, M[y].style.right = y * h.column.width + y * h.column.spacing + "px", M[y].style.width = h.column.width + "px", M[y].style.height = "0px";
            s(C.container, F), r(), t.appendChild(C.container), C.graph && (b = C.graph.clientHeight), F.toggleOn && ("click" === F.toggleOn && (C.container.style.cursor = "pointer"), S(C.container, F.toggleOn, G))
        }
        "object" === H(t) && t.nodeType === e && (o = t, t = document.body), t || (t = document.body);
        var h, l, p, f, x, b, w, y, v, O = this,
            F = I({}, D.defaults, o || {}),
            C = {},
            M = [],
            z = 100,
            E = [],
            A = F.threshold,
            P = 0,
            T = n() - A,
            j = [],
            q = [],
            L = "fps" === F.show;
        O.options = F, O.fps = 0, O.duration = 0, O.isPaused = 0, O.tickStart = function() {
            P = n()
        }, O.tick = function() {
            p = n(), A += (p - T - A) / F.smoothing, O.fps = 1e3 / A, O.duration = P < T ? A : p - P, T = p
        }, O.pause = function() {
            return f && (O.isPaused = 1, clearTimeout(f), a(f), a(x), f = x = 0), O
        }, O.resume = function() {
            return f || (O.isPaused = 0, k()), O
        }, O.set = function(t, e) {
            return F[t] = e, L = "fps" === F.show, -1 !== R(t, u) && V(), -1 !== R(t, d) && s(C.container, F), O
        }, O.showDuration = function() {
            return O.set("show", "ms"), O
        }, O.showFps = function() {
            return O.set("show", "fps"), O
        }, O.toggle = function() {
            return O.set("show", L ? "ms" : "fps"), O
        }, O.hide = function() {
            return O.pause(), C.container.style.display = "none", O
        }, O.show = function() {
            return O.resume(), C.container.style.display = "block", O
        }, O.destroy = function() {
            O.pause(), U(), O.tick = O.tickStart = function() {}
        }, V(), k()
    }
    var n, o = t.performance;
    n = o && (o.now || o.webkitNow) ? o[o.now ? "now" : "webkitNow"].bind(o) : function() {
        return +new Date
    };
    for (var a = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, i = t.requestAnimationFrame, h = 0, l = 0, p = (o = ["moz", "webkit", "o"]).length; l < p && !a; ++l) i = (a = t[o[l] + "CancelAnimationFrame"] || t[o[l] + "CancelRequestAnimationFrame"]) && t[o[l] + "RequestAnimationFrame"];
    a || (i = function(e) {
        var o = n(),
            a = Math.max(0, 16 - (o - h));
        return h = o + a, t.setTimeout(function() {
            e(o + a)
        }, a)
    }, a = function(t) {
        clearTimeout(t)
    });
    var c = "string" === H(document.createElement("div").textContent) ? "textContent" : "innerText";
    D.extend = I, window.FPSMeter = D, D.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20
    };
    var u = ["toggleOn", "theme", "heat", "graph", "history"],
        d = "position zIndex left top right bottom margin".split(" ")
}(window), function(t, e) {
    e.theme = {};
    var n = e.theme.base = {
        heatmaps: [],
        container: {
            heatOn: null,
            heatmap: null,
            padding: "5px",
            minWidth: "95px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "right",
            textShadow: "none"
        },
        count: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            right: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "24px",
            fontFamily: "Consolas, Andale Mono, monospace",
            zIndex: 2
        },
        legend: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            left: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "12px",
            lineHeight: "32px",
            fontFamily: "sans-serif",
            textAlign: "left",
            zIndex: 2
        },
        graph: {
            heatOn: null,
            heatmap: null,
            position: "relative",
            boxSizing: "padding-box",
            MozBoxSizing: "padding-box",
            height: "100%",
            zIndex: 1
        },
        column: {
            width: 4,
            spacing: 1,
            heatOn: null,
            heatmap: null
        }
    };
    e.theme.dark = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .8
        }],
        container: {
            background: "#222",
            color: "#fff",
            border: "1px solid #1a1a1a",
            textShadow: "1px 1px 0 #222"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#3f3f3f"
        }
    }), e.theme.light = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .5
        }],
        container: {
            color: "#666",
            background: "#fff",
            textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#eaeaea"
        }
    }), e.theme.colorful = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .6
        }],
        container: {
            heatOn: "backgroundColor",
            background: "#888",
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.2)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        column: {
            background: "#777",
            backgroundColor: "rgba(0,0,0,.2)"
        }
    }), e.theme.transparent = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .5
        }],
        container: {
            padding: 0,
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.5)"
        },
        count: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "40px"
        },
        legend: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "42px"
        },
        graph: {
            height: "40px"
        },
        column: {
            width: 5,
            background: "#999",
            heatOn: "backgroundColor",
            opacity: .5
        }
    })
}(window, FPSMeter));
var Fps = pc.createScript("fps");
Fps.prototype.initialize = function() {
    this.fps = new FPSMeter({
        heat: !0,
        graph: !0
    })
}, Fps.prototype.update = function(t) {
    this.fps.tick()
}; // levelBuilder.js
/* jshint esversion: 6 */
var LevelBuilder = pc.createScript('levelBuilder');

LevelBuilder.prototype.initialize = function() {
    console.log('LevelBuilder initialized, creating a level...');

    this.app.on(EventTypes.LEVEL_RESET, this.resetLevel, this);
    this.app.on(EventTypes.CREATE_BUBBLES, this.buildLevel, this);
    this.app.on(EventTypes.ANIMATE_BUBBLES_APPEARING, this.animateBubblesAppearing, this);
};

LevelBuilder.prototype.update = function(dt) {

};


LevelBuilder.prototype.resetLevel = function() {
    /* reset movable container position */
    this.entity.movableContainer.setLocalPosition(0, GameConfig.getAttribute('redLineY'), 0);
};


LevelBuilder.prototype.buildLevel = function() {
    /* creating bubbles */
    console.log('Building level ...');
    const startY = GameConfig.getAttribute('numColumns') - GameConfig.getAttribute('bubbleLines');
    const bubblePrefab = this.entity.assetsLibrary.findByName('Bubble');

    for (let y = startY; y < this.entity.numLayers; y++) {
        for (let x = 0; x < this.entity.cellsInLayer; x++) {
            const cell = this.entity.getCellAt(x, y);
            if (cell) {
                const bubble = bubblePrefab.clone();
                cell.setBubble(bubble);
                cell.hideBubble();
                bubble.setColor(this.app.colorsStorage.getRandomColor());
            }
        }
    }

    this.app.fire(EventTypes.REFOCUS_CAMERA);
};

LevelBuilder.prototype.animateBubblesAppearing = function() {
    const sortedBubblesCells = this.entity.getBubbledCells().sort((a, b) => {
        const dy = -(a.gridPosition.y - b.gridPosition.y);
        const dx = -(a.gridPosition.x - b.gridPosition.x);
        return dy === 0 ? dx : dy;
    });

    const bubblesAppearingDelay = GameConfig.getAttribute('bubblesAppearingAnimationDelay');
    const bubblesAppearingDuration = GameConfig.getAttribute('bubblesAppearingAnimationDuration');
    const cellDelay = bubblesAppearingDuration / sortedBubblesCells.length; // Math.max(this.entity.cellsInLayer, this.entity.cellsInLayer);

    sortedBubblesCells.forEach((cell, index) => cell.animateBubbleAppearing(bubblesAppearingDelay + index * cellDelay));

};

// gridBuilder.js
/* jshint esversion: 6 */
var GridBuilder = pc.createScript('gridBuilder');


GridBuilder.prototype.initialize = function() {
    this.bindEntityMethods();
    this.app.on(EventTypes.LEVEL_RESET, this.resetLevel, this);
    this.app.on(EventTypes.CALCULATE_TOWER_PROPERTIES, this.calculateTowerProperties, this);
    this.app.on(EventTypes.BUILD_GRID, this.buildGrid, this);
    this.app.on(EventTypes.SHIFT_ROW, this.attachLayerAtTheTop, this);
};

GridBuilder.prototype.resetLevel = function() {
    this.entity.grid = null;
    for (let i = this.entity.gridContainer.children.length - 1; i > -1; i--) {
        this.entity.gridContainer.children[i].destroy();
    }
};

GridBuilder.prototype.calculateTowerProperties = function() {
    this.entity.cellScale = GameConfig.getAttribute('cellScale');
    this.entity.cellRadius = this.entity.cellScale / 2;
    this.entity.numRows = GameConfig.getAttribute('numRows');
    this.entity.numColumns = GameConfig.getAttribute('numColumns');
    this.entity.cellsInLayer = this.entity.numRows;
    this.entity.numLayers = this.entity.numColumns;
    this.entity.squareOfThree = Math.sqrt(3);
    this.entity.segmentAngle = 2 * Math.PI / this.entity.cellsInLayer;
    this.entity.structureRadius = this.entity.cellRadius / Math.sin(this.entity.segmentAngle / 2);
    this.entity.towerRadius = this.entity.structureRadius - this.entity.cellRadius;
    this.entity.towerHeight = this.entity.numLayers * this.entity.squareOfThree * this.entity.cellRadius;
    this.entity.topLineY = GameConfig.getAttribute('redLineY') + this.entity.towerHeight;
};


GridBuilder.prototype.buildGrid = function() {
    this.entity.grid = [];
    this.entity.cellsList = [];
    this.entity.movableContainer.setLocalPosition(0, GameConfig.getAttribute('redLineY'), 0);

    /* create cells */
    for (let i = 0; i < this.entity.cellsInLayer; i++) {
        this.entity.grid[i] = [];
        for (let y = 0; y < this.entity.numLayers; y++) {
            this._createCellAt(i, y);
        }
    }
};

GridBuilder.prototype.attachLayerAtTheTop = function(numLayers) {
    /* create cells */
    for (let q = 0; q < numLayers; q++) {
        this.entity.numLayers += 1;
        for (let i = 0; i < this.entity.cellsInLayer; i++) {
            this._createCellAt(i, this.entity.numLayers - 1, true);
        }
    }
};


GridBuilder.prototype._createCellAt = function(i, y, createBubble) {
    if (this.entity.getCellAt(i, y)) {
        console.warn(`cell at {${i},${y}} already exists`);
        return;
    }

    const cell = this.entity.assetsLibrary.findByName('Cell').clone();
    cell.enabled = true;
    this.entity.gridContainer.addChild(cell);
    this.entity.grid[i][y] = cell;
    this.entity.cellsList.push(cell);

    const cellAngle = this.entity.getColumnAngle(i, y);
    const xPos = Math.sin(cellAngle) * this.entity.structureRadius;
    const yPos = this.entity.getRowElevation(y);
    const zPos = Math.cos(cellAngle) * this.entity.structureRadius;

    cell.rememberLocalPosition(xPos, yPos, zPos);
    cell.setGridPosition(i, y);
    cell.setAngle(cellAngle);

    this._findNeighbors(cell);

    if (createBubble) {
        const bubble = this.entity.assetsLibrary.findByName('Bubble').clone();
        cell.setBubble(bubble);
        cell.hideBubble();
        bubble.setColor(this.entity.getRandomAvailableColor());

        cell.animateBubbleAppearing(pc.math.random(0.1, 0.25));
    }

    if (GameConfig.getAttribute('displayGrid')) {
        cell.model.enabled = true;
    }
};


GridBuilder.prototype._findNeighbors = function(cell) {
    const {
        x,
        y
    } = cell.gridPosition;
    const possibleNeighbors = [];

    for (let dx = -1; dx <= 1; dx += 1)
        for (let dy = -1; dy <= 1; dy += 1)
            possibleNeighbors.push(this.entity.getCellAt(x + dx, y + dy));

    possibleNeighbors.filter(neighbor => this.checkCellsAreNeighbors(cell, neighbor)).forEach(neighbor => {
        cell.addNeighbor(neighbor);
        neighbor.addNeighbor(cell);
    });
};


GridBuilder.prototype.checkCellsAreNeighbors = function(cellA, cellB) {
    if (!cellA || !cellB || cellA === cellB || cellA.getLocalPosition().distance(cellB.getLocalPosition()) > this.entity.cellScale * 1.02) {
        return false;
    } else {
        return true;
    }
};


GridBuilder.prototype.bindEntityMethods = function() {

    this.entity.cellExists = function(x, y) {
        [x, y] = [Math.floor(x), Math.floor(y)];
        x = x < 0 ? (this.cellsInLayer + x % this.cellsInLayer) : (x >= this.cellsInLayer) ? x % this.cellsInLayer : x;
        return this.grid[x] && this.grid[x][y]; // !(x < 0 || x >= this.cellsInLayer || y < 0 || y >= this.numLayers);
    }.bind(this.entity);


    this.entity.getCellAt = function(x, y) {
        [x, y] = [Math.floor(x), Math.floor(y)];
        x = x < 0 ? (this.cellsInLayer + x % this.cellsInLayer) : (x >= this.cellsInLayer) ? x % this.cellsInLayer : x;
        return this.cellExists(x, y) ? this.grid[x][y] : null;
    }.bind(this.entity);


    this.entity.getBubbledCells = function() {
        return this.cellsList.filter(cell => cell.hasBubble());
    }.bind(this.entity);


    this.entity.getEmptyCells = function() {
        return this.cellsList.filter(cell => !cell.hasBubble());
    }.bind(this.entity);


    this.entity.getRowElevation = function(y) {
        return y * this.cellRadius * this.squareOfThree;
    }.bind(this.entity);

    this.entity.getColumnAngle = function(x, y) {
        return this.segmentAngle * x + (y % 2 === 1 ? this.segmentAngle / 2 : 0);
    }.bind(this.entity);


    this.entity.getPossibleBubbleColors = function() {
        const possibleColors = new Set();
        this.cellsList.forEach(cell => {
            if (cell.hasBubble()) {
                possibleColors.add(cell.getBubble().getColor());
            }
        });
        return [...possibleColors].filter(color => color != null);
    }.bind(this.entity);

    this.entity.getRandomAvailableColor = function() {
        const possibleColors = this.getPossibleBubbleColors();
        return possibleColors.length > 0 ? Utils.getRandomItem(possibleColors) : this._app.colorsStorage.getRandomColor();
    }.bind(this.entity);

    this.entity.getRandomAvailableColorBut = function(excludeColor) {
        const possibleColors = this.getPossibleBubbleColors();
        const possibleFilteredColors = possibleColors.filter(color => color != excludeColor);
        return possibleFilteredColors.length > 0 ? Utils.getRandomItem(possibleFilteredColors) : possibleColors.length > 0 ? Utils.getRandomItem(possibleColors) : this._app.colorsStorage.getRandomColor();
    }.bind(this.entity);
};

GridBuilder.prototype.update = function(dt) {

};




// cell.js
/* jshint esversion: 6 */
var Cell = pc.createScript('cell');

Cell.prototype.initialize = function() {
    this.entity.isCell = true;
    this.entity.neighbors = [];
    this.entity.bubble = null;
    this.entity.gridPosition = new pc.Vec2(-1, -1);
    this.entity.bubbleContainer = this.entity.findByName('BubbleContainer');
    this.entity.setLocalScale(GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale'));
    this.bindEntityMethods();
    this.on('destroy', this.destroy, this);
};

Cell.prototype.update = function(dt) {

};

Cell.prototype.destroy = function() {
    if (this.bubble) {
        this.bubble.destroy();
    }
    this.entity.bubble = null;
    this.entity.neighbors = null;
    this.entity.gridPosition = null;
    this.entity = null;
};

Cell.prototype.bindEntityMethods = function() {

    this.entity.hasBubble = function() {
        return !!this.bubble;
    }.bind(this.entity);


    this.entity.isEmpty = function() {
        return !this.hasBubble();
    }.bind(this.entity);


    this.entity.getBubble = function() {
        return this.bubble;
    }.bind(this.entity);


    this.entity.getAngle = function() {
        return this.angle;
    }.bind(this.entity);


    this.entity.setAngle = function(value) {
        this.angle = value;
    }.bind(this.entity);


    this.entity.setBubble = function(bubble, tweenToOrigin) {
        if (!this.bubble) {
            this.bubble = bubble;
            this.bubble.enabled = true;
            this.bubble.isLaunched = false;
            const bubbleWorldPosition = this.bubble.getPosition().clone();
            this.bubble.reparent(this.bubbleContainer);
            if (tweenToOrigin) {

                this.bubble.setLocalPosition(0, 0, 0);
                this.bubbleContainer.setPosition(bubbleWorldPosition);

                let localDistance = this.bubbleContainer.getLocalPosition().distance(this.originBubbleContainerLocalPosition);
                const maxAllowedDistance = GameConfig.getAttribute('cellScale') * 0.25;
                if (localDistance > maxAllowedDistance && this.bubbleContainer.getLocalPosition().y - this.originBubbleContainerLocalPosition.y > maxAllowedDistance) {
                    const adjustedContainerPosition = new pc.Vec3().lerp(this.originBubbleContainerLocalPosition, this.bubbleContainer.getLocalPosition(), maxAllowedDistance / localDistance);
                    this.bubbleContainer.setLocalPosition(adjustedContainerPosition);
                    localDistance = this.bubbleContainer.getLocalPosition().distance(this.originBubbleContainerLocalPosition);
                }


                const bubbleSpeed = GameConfig.getAttribute('bubbleLaunchSpeed');
                const tweenDuration = pc.math.clamp((localDistance / bubbleSpeed) * 5, 0.016, 0.35);
                this.bubbleContainer.tween(this.bubbleContainer.getLocalPosition())
                    .to(this.originBubbleContainerLocalPosition, tweenDuration, pc.SineOut)
                    .on('complete', () => {
                        this.bubbleContainer.setLocalPosition(this.originBubbleContainerLocalPosition);
                        this.displacementAnimationPlaying = false;
                    })
                    .start();

            } else {
                this.bubbleContainer.setLocalPosition(0, 0, 0);
                this.bubble.setLocalPosition(0, 0, 0);
            }
            this.bubble.setParentCell(this);
        } else {
            console.warn('cell.setBubble: bubble already exists');
        }
    }.bind(this.entity);


    this.entity.removeBubble = function(updateGameState) {
        this.bubbleContainer.setLocalPosition(0, 0, 0);
        if (this.bubble) {
            ApiController.trackStatsChange('balls_popped_total', 1);
            ApiController.trackStatsChange(`balls_popped_${this._app.colorsStorage.getMaterial(this.bubble.getColor()).name.toLowerCase()}`, 1);

            const {
                x,
                y,
                z
            } = this.bubble.getPosition();
            this._app.fire(EventTypes.BURST_PARTICLES, x, y, z, 6, this.bubble.model.meshInstances[0].material);
            this._app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['pop02', 'pop01']), 15);
            this.bubble.destroy();
            this.bubble = null;

            if (updateGameState) {
                ApiController.trackStatsChange('total_detached_balls', 1);
                this._app.fire(EventTypes.BUBBLE_DESTROYED, this);
            }
        }
    }.bind(this.entity);


    this.entity.detachBubble = function(updateGameState) {
        this.bubbleContainer.setLocalPosition(0, 0, 0);
        if (this.bubble) {
            ApiController.trackStatsChange('balls_popped_total', 1);
            ApiController.trackStatsChange(`balls_popped_${this._app.colorsStorage.getMaterial(this.bubble.getColor()).name.toLowerCase()}`, 1);

            this.bubble.fallDown();
            this.bubble = null;

            if (updateGameState) {
                this._app.fire(EventTypes.BUBBLE_DESTROYED, this);
            }
        }
    }.bind(this.entity);


    this.entity.displaceAndShakeBubble = function(worldDelta, ignorePreviousAnimations) {
        if (this.hasBubble()) {

            if (!this.displacementAnimationPlaying || ignorePreviousAnimations) {
                this.displacementAnimationPlaying = true;

                this.bubbleContainer.setLocalPosition(this.originBubbleContainerLocalPosition);
                this.bubbleContainer.translate(worldDelta);
                this.bubbleContainer.tween(this.bubbleContainer.getLocalPosition())
                    .to(this.originBubbleContainerLocalPosition, GameConfig.getAttribute('bubblesShakingTweenDuration'), pc.ElasticOut)
                    .on('complete', () => {
                        this.bubbleContainer.setLocalPosition(this.originBubbleContainerLocalPosition);
                        this.displacementAnimationPlaying = false;
                    })
                    .start();
            }

        }
    }.bind(this.entity);


    this.entity.hideBubble = function() {
        if (this.hasBubble()) {
            this.bubbleContainer.enabled = false;
        }
    }.bind(this.entity);

    this.entity.animateBubbleAppearing = function(delay) {
        if (this.hasBubble()) {
            this.bubbleContainer.enabled = true;
            this.bubbleContainer.setLocalScale(0, 0, 0);
            this.bubbleContainer.tween(this.bubbleContainer.getLocalScale())
                .to(new pc.Vec3(1, 1, 1), GameConfig.getAttribute('singeBubbleAppearingDuration') * pc.math.random(0.8, 1.2), pc.BackOut, delay)
                .start();
            this.bubbleContainer.delayedCall(delay * 1000, () => this._app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['falling01', 'falling02']), 42));
        }
    }.bind(this.entity);

    this.entity.rememberLocalPosition = function(x, y, z) {
        this.setLocalPosition(x, y, z);
        this.originLocalPosition = this.getLocalPosition().clone();
        this.originBubbleContainerLocalPosition = this.bubbleContainer.getLocalPosition().clone();
    }.bind(this.entity);

    this.entity.setGridPosition = function(x, y) {
        this.gridPosition.set(x, y);
    }.bind(this.entity);


    this.entity.addNeighbor = function(neighbor) {
        if (this.neighbors.indexOf(neighbor) === -1) {
            this.neighbors.push(neighbor);
        }
    }.bind(this.entity);


    this.entity.getNeighbors = function() {
        return this.neighbors;
    }.bind(this.entity);


    this.entity.hasBubbledNeighbors = function() {
        return this.neighbors.some(neighbor => neighbor.hasBubble());
    }.bind(this.entity);


    this.entity.getBubbledNeighbors = function() {
        return this.neighbors.filter(neighbor => neighbor.hasBubble());
    }.bind(this.entity);


    this.entity.isNeighborTo = function(anotherCell) {
        return this.neighbors.indexOf(anotherCell) !== -1;
    }.bind(this.entity);

};

// colorsStorage.js
/* jshint esversion: 6 */
var ColorsStorage = pc.createScript('colorsStorage');

ColorsStorage.attributes.add('bubbleMaterials', {
    type: 'asset',
    assetType: 'material',
    array: true
});


ColorsStorage.attributes.add('trailColors', {
    type: 'rgba',
    array: true
});


ColorsStorage.prototype.initialize = function() {
    this.entity.bubbleMaterials = this.bubbleMaterials;
    this.app.colorsStorage = this;
    this.app.on(EventTypes.PREPARE_BUBBLE_COLORS, this.prepareColors, this);
};


ColorsStorage.prototype.prepareColors = function() {
    this.availableColors = Utils.shuffle(this.bubbleMaterials.map((m, index) => index)).slice(0, GameConfig.getAttribute('availableColors'));
};


ColorsStorage.prototype.getRandomColor = function() {
    return Utils.getRandomItem(this.availableColors);
};


ColorsStorage.prototype.getMaterial = function(colorID) {
    if (this.bubbleMaterials[colorID]) {
        return this.bubbleMaterials[colorID].resource;
    } else {
        console.warn(`ColorsStorage.getMaterial(${colorID}): no color with such ID in library`);
        return this.bubbleMaterials[0].resource;
    }
};

ColorsStorage.prototype.getTrailColor = function(colorID) {
    if (this.trailColors[colorID]) {
        return this.trailColors[colorID];
    } else {
        console.warn(`ColorsStorage.getTrailColor(${colorID}): no color with such ID in library`);
        return this.trailColors[0];
    }
};



ColorsStorage.prototype.update = function(dt) {

};


// bubble.js
/* jshint esversion: 6 */
var Bubble = pc.createScript('bubble');

Bubble.prototype.initialize = function() {
    this.entity.color = null;
    this.entity.parentCell = null;
    this.entity.isFlying = false;
    this.entity.isLaunched = false;
    this.entity.effectsContainer = this.app.root.findByName('GameplayContainer').findByName('EffectsContainer');
    this.bindEntityMethods();

    this.on('destroy', this.handleDestroy, this);
};

Bubble.prototype.bindEntityMethods = function() {

    const scriptContext = this;

    this.entity.getParentCell = function() {
        return this.parentCell;
    }.bind(this.entity);


    this.entity.setParentCell = function(cell) {
        this.parentCell = cell;
    }.bind(this.entity);


    this.entity.getColor = function() {
        return this.color;
    }.bind(this.entity);

    this.entity.isBubble = function() {
        return true;
    }.bind(this.entity);

    this.entity.isFireball = function() {
        return false;
    }.bind(this.entity);

    this.entity.launch = function(gameplayContainer, initialTowerAngle, initialElevation, launchAngle, launchSpeed) {
        this.isLaunched = true;
        this.gameplayContainer = gameplayContainer;
        this.currentTowerAngle = initialTowerAngle;
        this.currentElevation = initialElevation;
        this.launchAngle = launchAngle;
        this.launchSpeed = launchSpeed;
        this.elevationSpeed = Math.cos(launchAngle) * launchSpeed;
        this.angularSpeed = Math.sin(launchAngle) * launchSpeed / this.gameplayContainer.structureRadius;
        this.ballRadiusElevationCorrection = Math.cos(launchAngle) * this.gameplayContainer.cellRadius;
        this.ballRadiusAngularCorrection = Math.sin(launchAngle) * this.gameplayContainer.cellRadius / this.gameplayContainer.structureRadius;
        this.shootingDirection = new pc.Vec3(0, 1, 0);

        ApiController.trackStatsChange('total_balls_shot', 1);
        ApiController.trackStatsChange(`${this._app.colorsStorage.getMaterial(this.getColor()).name.toLowerCase()}_balls_shot`, 1);

    }.bind(this.entity);


    this.entity.setColor = function(colorID) {
        this.color = colorID;
        this.model.model.meshInstances.forEach(mi => mi.material = scriptContext.app.colorsStorage.getMaterial(this.color));
    }.bind(this.entity);


    this.entity.fallDown = function() {
        const worldPosition = this.getPosition().clone();
        this.reparent(this.effectsContainer);
        this.setPosition(worldPosition);

        const fallingAngle = this.getParentCell().getAngle() + pc.math.random(-Math.PI / 3, Math.PI / 3);
        const baseSpeed = pc.math.random(0.35, 1.35);
        const verticalSpeed = pc.math.random(-0.75, 1.5);

        this._app.stopAllTweens(this);

        this.setParentCell(null);
        this.isFallingDown = true;
        this.gravity = 9.8 * pc.math.random(0.9, 1.2);
        this.fallingVelocity = new pc.Vec3(baseSpeed * Math.sin(fallingAngle), verticalSpeed, baseSpeed * Math.cos(fallingAngle));

    }.bind(this.entity);
};


Bubble.prototype.update = function(dt) {
    if (this.entity.isLaunched) {
        this._updateLaunched(dt);

    } else if (this.entity.isFallingDown) {
        this._updateFallingDown(dt);
    }
};

Bubble.prototype._updateLaunched = function(dt) {

    const frameDeltaAngle = this.entity.angularSpeed * dt;
    const frameDeltaElevation = this.entity.elevationSpeed * dt;
    const frameDeltaAngleCorrected = frameDeltaAngle + this.entity.ballRadiusAngularCorrection;
    const frameDeltaElevationCorrected = frameDeltaElevation + this.entity.ballRadiusElevationCorrection;

    const initialTowerAngleCorrected = this.entity.currentTowerAngle + this.entity.ballRadiusAngularCorrection;
    const initialTowerElevationCorrected = this.entity.currentElevation + this.entity.ballRadiusElevationCorrection;

    const nextTowerAngle = this.entity.currentTowerAngle + frameDeltaAngle;
    const nextElevation = this.entity.currentElevation + frameDeltaElevation;
    const nextTowerAngleCorrected = this.entity.currentTowerAngle + frameDeltaAngleCorrected;
    const nextElevationCorrected = this.entity.currentElevation + frameDeltaElevationCorrected;

    const iterationMaxDistance = this.entity.gameplayContainer.cellRadius * GameConfig.getAttribute('collisionDetectionMaxIterationDistance');
    const frameTrajectoryLength = this.entity.gameplayContainer.getTrajectoryLength(initialTowerAngleCorrected, initialTowerElevationCorrected, nextTowerAngleCorrected, nextElevationCorrected);
    const numIterations = frameTrajectoryLength / iterationMaxDistance;

    const possibleContactingBubbledCells = this._findPossiblyIntersectedBubbledCells(this.entity.getPosition(), nextTowerAngleCorrected, nextElevationCorrected);

    // console.log('frame distance ', frameTrajectoryLength, ' iterations ', numIterations);
    let currentIterationTrajectoryProgress = 0;
    let currentIterationAngle = initialTowerAngleCorrected;
    let currentIterationElevation = initialTowerElevationCorrected;
    let currentIterationWorldPosition = this.entity.getPosition().clone();
    for (let i = 1; i <= Math.ceil(numIterations); i++) {

        const nextIterationTrajectoryProgress = pc.math.clamp(i / numIterations, 0, 1);
        const nextIterationAngle = pc.math.lerp(initialTowerAngleCorrected, nextTowerAngleCorrected, nextIterationTrajectoryProgress);
        const nextIterationElevation = pc.math.lerp(initialTowerElevationCorrected, nextElevationCorrected, nextIterationTrajectoryProgress);

        const nextLocalPosition = this.entity.gameplayContainer.getTowerPointPosition(nextIterationAngle, nextIterationElevation);
        const nextIterationWorldPosition = this.entity.parent.getWorldTransform().transformPoint(nextLocalPosition);

        if (this._testIntersections(currentIterationWorldPosition, nextIterationWorldPosition, possibleContactingBubbledCells)) {
            // log('stop on iteration ', i, ' of ', numIterations);
            this.entity.setPosition(currentIterationWorldPosition);
            this.entity.shootingDirection = this.entity.shootingDirection.sub2(nextIterationWorldPosition, currentIterationWorldPosition).normalize();
            const closestEmptyCell = this.entity.gameplayContainer.findClosestEmptyCell(currentIterationAngle, currentIterationElevation);
            closestEmptyCell.setBubble(this.entity, true);
            this.app.fire(EventTypes.BUBBLE_REACHED_DESTINATION, this.entity);
            return;
        } else {
            this._shakeContactedNeighbors(possibleContactingBubbledCells, currentIterationWorldPosition);
        }

        if (GameConfig.getAttribute('displayBubbleTrajectory')) {
            this.buildTrajectoryPoint(nextLocalPosition);
        }

        currentIterationTrajectoryProgress = nextIterationTrajectoryProgress;
        currentIterationAngle = nextIterationAngle;
        currentIterationElevation = nextIterationElevation;
        currentIterationWorldPosition = nextIterationWorldPosition;
    }


    /* set final position if there are no collisions */
    this.entity.currentTowerAngle = nextTowerAngle;
    this.entity.currentElevation = nextElevation;
    this.entity.setLocalPosition(this.entity.gameplayContainer.getTowerPointPosition(this.entity.currentTowerAngle, this.entity.currentElevation));
};


Bubble.prototype._shakeContactedNeighbors = function(possibleContactingBubbledCells, worldPosition) {
    for (let cell of possibleContactingBubbledCells) {
        const cellPosition = cell.getPosition();
        const normal = Utils.findSpheresCollisionNormal(worldPosition, GameConfig.getAttribute('cellScale') / 2, cellPosition, GameConfig.getAttribute('cellScale') / 2);
        if (normal) {
            this.app.fire(EventTypes.SHAKE_CONTACTING_CELL, cell, normal, 0.25, 2);
        }
    }
};



Bubble.prototype._testIntersections = function(initialWorldPosition, targetWorldPosition, possibleContactingBubbledCells) {
    for (let cell of possibleContactingBubbledCells) {
        const cellPosition = cell.getPosition();
        const raycastResults = Utils.checkSegmentSphereIntersection(initialWorldPosition, targetWorldPosition, cellPosition, this.entity.gameplayContainer.cellRadius * GameConfig.getAttribute('cellCollisionUpScale'));
        if (raycastResults) {
            // cell.model.enabled = true;
            // cell.getBubble().model.enabled = false;
            return true;
        }
    }

    if (targetWorldPosition.y >= this.entity.gameplayContainer.topLineY) {
        return true;
    }

    return false;
};



Bubble.prototype._findPossiblyIntersectedBubbledCells = function(initialWorldPosition, targetTowerAngle, targetElevation) {
    const nextFrameLocalPosition = this.entity.gameplayContainer.getTowerPointPosition(targetTowerAngle, targetElevation);
    const nextFrameWorldPosition = this.entity.parent.getWorldTransform().transformPoint(nextFrameLocalPosition);
    const approximatePathCenter = nextFrameWorldPosition.lerp(initialWorldPosition, nextFrameWorldPosition, 0.5);
    const filteringRadiusSquared = Math.pow(nextFrameWorldPosition.distance(initialWorldPosition) + this.entity.gameplayContainer.cellRadius, 2);
    const possibleContactingBubbledCells = this.entity.gameplayContainer.getBubbledCells().filter(cell => {
        const cellPosition = cell.getPosition();
        return (cellPosition.x - approximatePathCenter.x) * (cellPosition.x - approximatePathCenter.x) + (cellPosition.y - approximatePathCenter.y) * (cellPosition.y - approximatePathCenter.y) + (cellPosition.z - approximatePathCenter.z) * (cellPosition.z - approximatePathCenter.z) <= filteringRadiusSquared;
    });
    return possibleContactingBubbledCells;
};



Bubble.prototype._updateFallingDown = function(dt) {
    const worldPosition = this.entity.getPosition();

    this.entity.fallingVelocity.y -= this.entity.gravity * dt;
    const speedMultiplier = dt * 6;
    this.entity.setPosition(worldPosition.x + this.entity.fallingVelocity.x * speedMultiplier, worldPosition.y + this.entity.fallingVelocity.y * speedMultiplier, worldPosition.z + this.entity.fallingVelocity.z * speedMultiplier);

    if (worldPosition.y < GameConfig.getAttribute('oceanPositionY')) {
        this.entity.destroy();
    }
};


Bubble.prototype.buildTrajectoryPoint = function(entityLocalPosition) {
    if (Math.abs(entityLocalPosition.y < 25)) {
        const part = this.app.root.findByName('Library').findByName('Particle').clone();
        this.entity.parent.addChild(part);
        part.enabled = true;
        part.setLocalScale(0.1, 0.1, 0.1);
        part.setLocalPosition(entityLocalPosition);
    }
};


Bubble.prototype.handleDestroy = function() {
    this.entity.gameplayContainer = null;
    this.entity.parentCell = null;
    this.entity.effectsContainer = null;
};




var GameConfig = pc.createScript("gameConfig");
GameConfig.attributes.add("enableLogging", {
    type: "boolean",
    default: !0
}), GameConfig.attributes.add("displayGrid", {
    type: "boolean",
    default: !1
}), GameConfig.attributes.add("displayBubbleTrajectory", {
    type: "boolean",
    default: !1
}), GameConfig.attributes.add("cellScale", {
    type: "number",
    default: 1
}), GameConfig.attributes.add("numRows", {
    type: "number",
    default: 20
}), GameConfig.attributes.add("numColumns", {
    type: "number",
    default: 19
}), GameConfig.attributes.add("availableColors", {
    type: "number",
    default: 6
}), GameConfig.attributes.add("activeBubbleY", {
    type: "number",
    default: 10
}), GameConfig.attributes.add("redLineY", {
    type: "number",
    default: 11
}), GameConfig.attributes.add("bubbleLines", {
    type: "number",
    default: 10
}), GameConfig.attributes.add("bubbleLaunchSpeed", {
    type: "number",
    default: 20
}), GameConfig.attributes.add("bubblesShakingTweenDuration", {
    type: "number",
    default: 1
}), GameConfig.attributes.add("bubblesShakingAffectedLayers", {
    type: "number",
    default: 3
}), GameConfig.attributes.add("bubblesShakingIntencity", {
    type: "number",
    default: .25
}), GameConfig.attributes.add("bubblesShakingIntencityDecay", {
    type: "number",
    default: .5
}), GameConfig.attributes.add("singeBubbleAppearingDuration", {
    type: "number",
    default: .2
}), GameConfig.attributes.add("collisionDetectionMaxIterationDistance", {
    type: "number",
    default: .45
}), GameConfig.attributes.add("cellCollisionUpScale", {
    type: "number",
    default: 1.06
}), GameConfig.attributes.add("maxAimingAngle", {
    type: "number",
    min: 0,
    max: 90,
    default: 75
}), GameConfig.attributes.add("oceanPositionY", {
    type: "number",
    default: -20
}), GameConfig.attributes.add("towerOpeningAnimationDelay", {
    type: "number",
    default: .4
}), GameConfig.attributes.add("towerOpeningAnimationDuration", {
    type: "number",
    default: .8
}), GameConfig.attributes.add("bubblesAppearingAnimationDelay", {
    type: "number",
    default: 1.2
}), GameConfig.attributes.add("bubblesAppearingAnimationDuration", {
    type: "number",
    default: .9
}), GameConfig.attributes.add("firstBubbleAppearingDelay", {
    type: "number",
    default: 1.25
}), GameConfig.attributes.add("maxComboMultiplier", {
    type: "number",
    default: 10
}), GameConfig.attributes.add("comboValidityTimer", {
    type: "number",
    default: 4
}), GameConfig.attributes.add("fireballLaunchSpeed", {
    type: "number",
    default: 20
}), GameConfig.attributes.add("fireballLifeTime", {
    type: "number",
    default: 2
}), GameConfig.attributes.add("fireballCollisionScaleMultiplier", {
    type: "number",
    default: 2.5
}), GameConfig.attributes.add("fireballExplosionRadius", {
    type: "number",
    default: 2.5
}), GameConfig.attributes.add("fireballCooldown", {
    type: "number",
    default: 15
}), GameConfig.attributes.add("fireballInitialCooldown", {
    type: "number",
    default: 30
}), GameConfig.prototype.initialize = function() {
    GameConfig.app = this.app, GameConfig.instance = this
}, GameConfig.getAttribute = function(e) {
    return void 0 === GameConfig.instance[e] ? (console.warn("GameConfig doesnt have attribute " + e), null) : GameConfig.instance[e]
}, GameConfig.setAttribute = function(e, t) {
    void 0 !== GameConfig.instance[e] ? (GameConfig.instance[e] = t, console.log("attribute ", e, " updated to ", t)) : console.warn("GameConfig doesnt have attribute " + e)
};
var InputController = pc.createScript("inputController");
InputController.numTouches = 0, InputController.tapDistanceTolerance = 1, InputController.clickDistanceTolerance = 5, InputController.inputPosition = null, InputController.prototype.initialize = function() {
    this.app.touch ? (this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this)) : this.app.mouse && (this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this), this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this)), this.app.keyboard && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this), this.app.mouse && (this.app.mouse.disableContextMenu(), this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this)), this.on("destroy", this.destroy, this)
}, InputController.prototype.update = function(o) {}, InputController.prototype.onTouchStart = function(o) {
    o.touches.length >= 1 && (this.touchDownPosition = {
        id: o.touches[0].id,
        x: o.touches[0].x,
        y: o.touches[0].y
    }, InputController.inputPosition = {
        x: o.touches[0].x,
        y: o.touches[0].y,
        traveledDistance: 0
    }, this.app.fire(EventTypes.INPUT_DOWN, o.touches[0].x, o.touches[0].y))
}, InputController.prototype.onTouchMove = function(o) {
    o.changedTouches && o.changedTouches[0] && (InputController.inputPosition ? (InputController.inputPosition.traveledDistance += Utils.distanceBetween(InputController.inputPosition.x || 0, InputController.inputPosition.y || 0, o.changedTouches[0].x, o.changedTouches[0].y), InputController.inputPosition.x = o.changedTouches[0].x, InputController.inputPosition.y = o.changedTouches[0].y) : InputController.inputPosition = {
        x: o.changedTouches[0].x,
        y: o.changedTouches[0].y,
        traveledDistance: 0
    })
}, InputController.prototype.onTouchEnd = function(o) {
    o.changedTouches.length >= 1 && (this.touchDownPosition && InputController.inputPosition.traveledDistance < InputController.tapDistanceTolerance && this.touchDownPosition.id === o.changedTouches[0].id && this.handleTouch(o.changedTouches[0].x, o.changedTouches[0].y), this.app.fire(EventTypes.INPUT_UP, o.changedTouches[0].x, o.changedTouches[0].y))
}, InputController.prototype.onTouchCancel = function(o) {
    this.touchDownPosition = null
}, InputController.prototype.onKeyDown = function(o) {
    switch (o.key) {
        case pc.KEY_M:
            this.app.fire(SoundController.audioEnabled ? EventTypes.DISABLE_AUDIO : EventTypes.ENABLE_AUDIO)
    }
}, InputController.prototype.onMouseWheel = function(o) {
    o.event.preventDefault()
}, InputController.prototype.onMouseDown = function(o) {
    InputController.inputPosition = {
        x: o.x,
        y: o.y,
        traveledDistance: 0
    }, this.mouseDownPosition = {
        x: o.x,
        y: o.y
    }, this.app.fire(EventTypes.INPUT_DOWN, o.x, o.y)
}, InputController.prototype.onMouseUp = function(o) {
    this.app.fire(EventTypes.INPUT_UP, o.x, o.y), InputController.inputPosition && InputController.inputPosition.traveledDistance < InputController.clickDistanceTolerance && this.handleTouch(o.x, o.y), this.mouseDownPosition = null, InputController.inputPosition = null
}, InputController.prototype.onMouseMove = function(o) {
    InputController.inputPosition && (InputController.inputPosition.traveledDistance += Utils.distanceBetween(InputController.inputPosition.x || 0, InputController.inputPosition.y || 0, o.x, o.y), InputController.inputPosition.x = o.x, InputController.inputPosition.y = o.y)
}, InputController.prototype.handleTouch = function(o, t) {
    this.app.fire(EventTypes.INPUT_TAP, {
        x: o,
        y: t
    })
}, InputController.prototype.destroy = function() {
    console.log("Destroying touchControls..."), this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this), this.app.mouse && (this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this), this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this)), this.app.keyboard && this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this)
}; // gameplayController.js
/* jshint esversion: 6 */
var GameplayController = pc.createScript('gameplayController');

GameplayController.prototype.initialize = function() {

    this.activeBubble = null;
    this.bubbleIsFlying = false;
    this.nextBubbleColor = undefined;

    this.app.on(EventTypes.INPUT_TAP, this.handleInputDown, this);
    this.app.on(EventTypes.SHOOT, this.shoot, this);
    this.app.on(EventTypes.SHIFT_ROW, this.shiftBubblesOneRowDown, this);
    this.app.on(EventTypes.FIREBALL_DESTROYED, this.onFireballDestroyed, this);
    this.app.on(EventTypes.BUBBLE_REACHED_DESTINATION, this.onBubbleReachedDestination, this);
    this.app.on(EventTypes.PREPARE_FIRST_BUBBLE, this.prepareFirstBubble, this);
    this.app.on(EventTypes.TURN_FINISHED, this.handleTurnFinished, this);
    this.app.on(EventTypes.POWERUP_ACTIVATED, this.activatePowerup, this);
    this.app.on(EventTypes.FIREBALL_EXPLODED, this.onFireballExploded, this);
    this.app.on(EventTypes.BUBBLE_DESTROYED, this.dispatchBubbleDestroyed, this);
    this.app.on(EventTypes.LEVEL_RESET, this.resetLevel, this);

    this.app.on(EventTypes.SHAKE_CONTACTING_CELL, this.shakeContactingNeighbors, this);
};


GameplayController.prototype.resetLevel = function() {
    if (this.activeBubble) {
        this.activeBubble.destroy();
    }
    this.activeBubble = null;

    /* remove bubbles */
    for (let i = this.entity.bubblesContainer.children.length - 1; i > -1; i--) {
        this.entity.bubblesContainer.children[i].destroy();
    }

    /* remove effects */
    for (let i = this.entity.effectsContainer.children.length - 1; i > -1; i--) {
        this.entity.effectsContainer.children[i].destroy();
    }

    /* reset bubble colors */
    this.nextBubbleColor = undefined;

    /* reset combo counter */
    this.entity.comboCounter = 0;
    this.entity.comboCountdown = 0;
};

GameplayController.prototype.handleInputDown = function(screenPosition) {
    if (this.entity.isGameRunning()) {
        if (this.bubbleIsFlying) {
            console.log(`Can't shoot while buuble is on its way `);
            return;
        }
        this.shootByAngle(screenPosition);
    }
};


GameplayController.prototype.shootByAngle = function(screenPosition) {
    if (!this.entity.isGameRunning()) {
        return;
    }

    if (!this.activeBubble) {
        // this.prepareNextBubble();
        return;
    }

    var from = this.entity.camera.camera.screenToWorld(screenPosition.x, screenPosition.y, this.entity.camera.camera.nearClip);
    var to = this.entity.camera.camera.screenToWorld(screenPosition.x, screenPosition.y, this.entity.camera.camera.farClip);

    const raycastResults = Utils.raycastAllAdvanced(from, to).filter(result => result && result.entity).filter(result => result.entity.name === 'TowerInputCatcher');
    if (raycastResults.length > 0) {


        const initialPoint = this.entity.activeBubbleContainer.getPosition().clone();
        const targetPoint = raycastResults[0].point.clone();

        const activeBubbleAngle = this.entity.getTowerPointAngleByWorldPosition(this.entity.activeBubbleContainer.getPosition());
        const targetAngle = this.entity.getTowerPointAngleByWorldPosition(targetPoint);
        const normalizedDeltaAngle = Utils.normalizeAngle(targetAngle - activeBubbleAngle);
        const verticalDistance = targetPoint.y - initialPoint.y;
        const horizontalDistance = normalizedDeltaAngle * this.entity.structureRadius;
        const aimingAngle = Math.atan2(horizontalDistance, verticalDistance);

        // console.group("Aiming params:");
        // console.log('initial angle: ', ~~(pc.math.RAD_TO_DEG * activeBubbleAngle));
        // console.log('target angle: ', ~~(pc.math.RAD_TO_DEG * targetAngle));
        // console.log('delta angle: ', ~~(pc.math.RAD_TO_DEG * normalizedDeltaAngle));
        // console.log('H-distance ', horizontalDistance);
        // console.log('V-distance', verticalDistance);
        // console.log('Aiming angle: ', ~~(pc.math.RAD_TO_DEG * aimingAngle));
        // console.groupEnd();


        if (Math.abs(aimingAngle) >= GameConfig.getAttribute('maxAimingAngle') * pc.math.DEG_TO_RAD) {
            return;
        }

        this.app.fire(EventTypes.SHOOT, aimingAngle);
    }
};

GameplayController.prototype.shoot = function(aimingAngle) {
    if (!TutorialController.shootingAllowed()) {
        return;
    }

    if (!this.entity.isGameRunning()) {
        return;
    }
    if (!this.activeBubble) {
        console.log(`Can't shoot: no active marble found`);
        return;
    }
    const initialPoint = this.entity.activeBubbleContainer.getPosition().clone();
    const activeBubbleAngle = this.entity.getTowerPointAngleByWorldPosition(this.entity.activeBubbleContainer.getPosition());

    const launchedBubble = this.activeBubble;
    launchedBubble.enabled = true;
    launchedBubble.reparent(this.entity.bubblesContainer);
    launchedBubble.setPosition(initialPoint);


    if (this.activeBubble.isBubble()) {
        launchedBubble.launch(this.entity, activeBubbleAngle, initialPoint.y, aimingAngle, GameConfig.getAttribute('bubbleLaunchSpeed'), this.entity.structureRadius);
        this.app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['throw01', 'throw02']));
        this.app.fire(EventTypes.BUBBLE_SHOT, launchedBubble.getColor());
    } else if (this.activeBubble.isFireball()) {
        launchedBubble.launch(this.entity, activeBubbleAngle, initialPoint.y, aimingAngle, GameConfig.getAttribute('fireballLaunchSpeed'), this.entity.structureRadius);
    }

    this.bubbleIsFlying = true;
    this.activeBubble = null;
};

GameplayController.prototype.handleTurnFinished = function(turnSuccessful) {
    this.prepareNextBubble();
};

GameplayController.prototype.prepareFirstBubble = function() {
    this.prepareNextBubble();
};

GameplayController.prototype.prepareNextBubble = function() {
    if (this.activeBubble) {
        return;
        // this.activeBubble.destroy();
        // this.activeBubble = null;
    }

    if (this.nextBubbleColor == undefined) {
        this.generateNextBubbleColor();
    }

    let bubbleColor = this.nextBubbleColor;
    this.activeBubble = this.entity.assetsLibrary.findByName('Bubble').clone();
    this.activeBubble.enabled = true;
    this.activeBubble.reparent(this.entity.activeBubbleContainer);
    this.activeBubble.setLocalPosition(0, 0, 0);
    this.activeBubble.setColor(bubbleColor);

    this.activeBubble.setLocalScale(0, 0, 0);
    this.activeBubble.tween(this.activeBubble.getLocalScale())
        .to(new pc.Vec3(GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale')), 0.13, pc.BackOut)
        .start();

    this.generateNextBubbleColor(this.nextBubbleColor);
};


GameplayController.prototype.activatePowerup = function() {
    if (this.activeBubble) {
        this.activeBubble.destroy();
        this.activeBubble = null;
    }

    // let bubbleColor = this.nextBubbleColor;
    this.activeBubble = this.entity.assetsLibrary.findByName('Fireball').clone();
    this.activeBubble.enabled = true;
    this.activeBubble.reparent(this.entity.activeBubbleContainer);
    this.activeBubble.setLocalPosition(0, 0, 0);
    this.activeBubble.animateAppearing();

    // this.generateNextBubbleColor(this.nextBubbleColor);
};

GameplayController.prototype.generateNextBubbleColor = function(skipColor) {
    this.nextBubbleColor = this.entity.getRandomAvailableColorBut(skipColor);
    this.app.fire(EventTypes.SET_NEXT_BUBBLE_COLOR, this.nextBubbleColor);
};


GameplayController.prototype.startChainExposion = function(cell) {
    const sameColoredBubblesChain = [
        [cell]
    ];
    const sameColoredBubblesList = [cell];
    const propagateNextIteration = (iterationNumber) => {
        const currentIterationCells = sameColoredBubblesChain[iterationNumber];
        if (currentIterationCells) {
            const nextIterationCells = [];
            currentIterationCells.forEach(currentCell => {
                const sameColoredNeighbors = currentCell.getBubbledNeighbors().filter(bubbleCell => bubbleCell.getBubble().color === currentCell.getBubble().color && sameColoredBubblesList.indexOf(bubbleCell) === -1 && nextIterationCells.indexOf(bubbleCell) === -1);
                nextIterationCells.push(...sameColoredNeighbors);
            });
            if (nextIterationCells.length > 0) {
                sameColoredBubblesList.push(...nextIterationCells);
                sameColoredBubblesChain[iterationNumber + 1] = nextIterationCells;
                propagateNextIteration(iterationNumber + 1);
            }
        }
    };
    propagateNextIteration(0);

    if (cell.hasBubble()) {
        this.shakeNeighbors(cell, cell.getBubble().shootingDirection);
    }

    if (sameColoredBubblesList.length >= 3) {
        const cellDelay = 30;

        const comboValue = this.entity.comboCounter + 1;
        this.entity.comboCounter = pc.math.clamp(comboValue, 1, GameConfig.getAttribute('maxComboMultiplier'));
        this.entity.comboCountdown = GameConfig.getAttribute('comboValidityTimer');
        this.app.fire(EventTypes.PLAY_AUDIO, 'combo' + pc.math.clamp(this.entity.comboCounter, 1, 7));
        this.app.fire(EventTypes.SHOW_COMBO_EFFECT, comboValue, Utils.getRandomItem(sameColoredBubblesList).getPosition());

        this.app.fire(EventTypes.PLAY_AUDIO, 'ballDestroying', 50);

        sameColoredBubblesList.forEach((cell, chainIndex) => {
            cell.delayedCall(chainIndex * cellDelay, () => {
                if (cell.hasBubble()) {
                    const bubbleColor = this.app.colorsStorage.getTrailColor(cell.getBubble().getColor());
                    const scores = (10 + Math.max(chainIndex - 2, 0) * 5) * this.entity.comboCounter;
                    cell.removeBubble(true);
                    this.app.fire(EventTypes.ADD_SCORES, scores);
                    this.app.fire(EventTypes.SHOW_SCORES_EFFECT, scores, cell.getPosition(), bubbleColor);
                }
            });
        });

        setTimeout(() => this.app.fire(EventTypes.TURN_FINISHED, true), sameColoredBubblesList.length * cellDelay);
    } else {
        this.entity.comboCounter = 0;
        this.entity.comboCountdown = 0;
        this.app.fire(EventTypes.PLAY_AUDIO, Utils.getRandomItem(['put01', 'put02']), 50);
        this.app.fire(EventTypes.TURN_FINISHED, false);
    }

};


GameplayController.prototype.verifyActiveBallColor = function() {
    const availableColors = this.entity.getPossibleBubbleColors();
    if (availableColors.length > 0 && availableColors.indexOf(this.nextBubbleColor) === -1) {
        this.generateNextBubbleColor();
    }
};


GameplayController.prototype.onFireballExploded = function(worldPosition) {
    this.entity.getBubbledCells().filter(cell => cell.getPosition().distance(worldPosition) < GameConfig.getAttribute('fireballExplosionRadius')).forEach((cell, index) => {
        if (cell.hasBubble()) {
            const bubbleColor = this.app.colorsStorage.getTrailColor(cell.getBubble().getColor());
            const scores = 100 + (index) * 25;
            cell.detachBubble(true);
            this.app.fire(EventTypes.ADD_SCORES, scores);
            this.app.fire(EventTypes.SHOW_SCORES_EFFECT, scores, cell.getPosition(), bubbleColor);
        }
    });
};



GameplayController.prototype.dispatchBubbleDestroyed = function(cell) {
    this.recalculateNextFrame = true;
};

GameplayController.prototype.shakeNeighbors = function(cell, shootingDirection) {
    const operatingVector = new pc.Vec3();
    const zeroPositionVector = new pc.Vec3(0, 0, 0);
    const neighborsLayers = this._getNeighborsLayers(cell, GameConfig.getAttribute('bubblesShakingAffectedLayers'), true);
    const cellPosition = cell.getPosition();

    neighborsLayers.forEach((layer, layerIndex) => {
        const shakingImpulse = GameConfig.getAttribute('bubblesShakingIntencity') * Math.pow(GameConfig.getAttribute('bubblesShakingIntencityDecay'), layerIndex);
        layer.forEach(neighbor => {
            const neighborPosition = neighbor.getPosition();
            const neighborLookingVector = operatingVector.sub2(neighborPosition, cellPosition).normalize();
            const bubbleDisplacement = new pc.Vec3().add2(neighborLookingVector, shootingDirection).normalize().scale(shakingImpulse);
            neighbor.displaceAndShakeBubble(bubbleDisplacement, true);
        });
    });
};


GameplayController.prototype.shakeContactingNeighbors = function(cell, direction, intencity, affectedLayers) {
    const operatingVector = new pc.Vec3();
    const zeroPositionVector = new pc.Vec3(0, 0, 0);
    const neighborsLayers = this._getNeighborsLayers(cell, affectedLayers, true);
    const cellPosition = cell.getPosition();

    neighborsLayers.forEach((layer, layerIndex) => {
        const shakingImpulse = intencity * Math.pow(GameConfig.getAttribute('bubblesShakingIntencityDecay'), layerIndex);
        layer.forEach(neighbor => {
            const neighborPosition = neighbor.getPosition();
            const neighborLookingVector = operatingVector.sub2(neighborPosition, cellPosition).normalize();
            const dot = neighborLookingVector.dot(direction);
            const angleInRadians = Math.acos(dot);

            if (angleInRadians <= Math.PI / 2) {
                const bubbleDisplacement = new pc.Vec3().add2(neighborLookingVector, direction).normalize().scale(shakingImpulse);
                neighbor.displaceAndShakeBubble(bubbleDisplacement);
            }
        });
    });
};


GameplayController.prototype._getNeighborsLayers = function(cell, numLayers, onlyBubbled) {
    const layers = [
        [cell]
    ];
    const firstLevelNeighbors = onlyBubbled ? cell.getBubbledNeighbors() : cell.getNeighbors();

    for (let i = 1; i <= numLayers; i++) {

        const allPrevNeighbors = [].concat.apply([], layers);
        const prevLayerNeighbors = layers[i - 1];

        layers[i] = [];
        const currentCycleAddedCells = [];
        for (let prevLayerCell of prevLayerNeighbors) {
            for (let prevLayerCellNeighbor of(onlyBubbled ? prevLayerCell.getBubbledNeighbors() : prevLayerCell.getNeighbors())) {
                if (allPrevNeighbors.indexOf(prevLayerCellNeighbor) === -1 && currentCycleAddedCells.indexOf(prevLayerCellNeighbor) === -1) {
                    currentCycleAddedCells.push(prevLayerCellNeighbor);
                }
            }
        }
        layers[i].push(...currentCycleAddedCells);
    }

    return layers; //.slice(1);
};


GameplayController.prototype.checkLevelCompletion = function() {
    const bubblesLeft = this.entity.cellsList.reduce((sum, cell) => cell.bubble ? sum + 1 : sum, 0);

    if (bubblesLeft === 0) {
        this.app.fire(EventTypes.LEVEL_COMPLETED);
    }
};


GameplayController.prototype.findAndDestroyDetachedGroups = function() {
    const bubbledCells = this.entity.getBubbledCells();
    const initialCellsAmount = bubbledCells.length;
    const groups = [];

    const attachNeighbors = (neighborsQueue, group) => {
        while (neighborsQueue.length > 0) {
            const cell = neighborsQueue.splice(0, 1)[0];

            /* remove cell from bubbledCells */
            const listIndex = bubbledCells.indexOf(cell);
            if (listIndex != -1) {
                bubbledCells.splice(listIndex, 1);
            }

            /* add it to current group */
            if (group.indexOf(cell) === -1) {
                group.push(cell);
            }

            /* add its neighbors to queue */
            for (let neighbor of cell.getBubbledNeighbors()) {
                const neighborListIndex = bubbledCells.indexOf(neighbor);
                const neighborsQueueIndex = neighborsQueue.indexOf(neighbor);
                if (neighborListIndex != -1 && neighborsQueueIndex === -1) {
                    bubbledCells.splice(neighborListIndex, 1);
                    neighborsQueue.unshift(neighbor);
                }
            }
        }
    };

    const timestamp = performance.now();

    while (bubbledCells.length > 0) {
        const firstBubble = bubbledCells[0];
        const newGroup = [];
        attachNeighbors([firstBubble], newGroup);
        groups.push(newGroup);
    }


    /* find detached groups */
    if (groups.length > 1) {
        const detachedGroups = groups.filter(group => !group.some(cell => cell.gridPosition.y === this.entity.numLayers - 1));
        let bubbleIndex = 0;
        detachedGroups.forEach(group => {
            if (group.length > 0) {
                this.app.fire(EventTypes.PLAY_AUDIO, 'ballDetaching', 100);
            }
            group.forEach((cell, cellIndex) => {
                if (cell.hasBubble()) {
                    const bubbleColor = this.app.colorsStorage.getTrailColor(cell.getBubble().getColor());
                    const scores = 100 + (bubbleIndex++) * 25;
                    cell.detachBubble(true);
                    this.app.fire(EventTypes.ADD_SCORES, scores);
                    this.app.fire(EventTypes.SHOW_SCORES_EFFECT, scores, cell.getPosition(), bubbleColor);
                }
            });
        });
    }

    // console.log('Found ' + groups.length + ' groups containing ' + ([].concat.apply([], groups)).length + ' cells of ' + initialCellsAmount + '; Time spent: ' + (performance.now() - timestamp) + ' ms');
};

GameplayController.prototype.getMostBottomBubbledCell = function() {
    let mostBottomCell = null;
    let mostBottomCellY = 99999;
    this.entity.getBubbledCells().forEach(cell => {
        const cellY = cell.getLocalPosition().y;
        if (!mostBottomCell) {
            mostBottomCell = cell;
            mostBottomCellY = cellY;
        } else {
            if (cellY <= mostBottomCellY) {
                mostBottomCell = cell;
                mostBottomCellY = cellY;
            }
        }
    });
    return mostBottomCell;
};

GameplayController.prototype.onBubbleReachedDestination = function(bubble) {
    this.bubbleIsFlying = false;

    this.startChainExposion(bubble.getParentCell());
};

GameplayController.prototype.onFireballDestroyed = function(bubble) {
    this.bubbleIsFlying = false;

    this.prepareNextBubble();
};

GameplayController.prototype.shiftBubblesOneRowDown = function(numRows) {
    const movableContainerPosition = this.entity.movableContainer.getLocalPosition();
    const targetPosition = new pc.Vec3(movableContainerPosition.x, movableContainerPosition.y - numRows * this.entity.cellScale * Math.sqrt(3) / 2, movableContainerPosition.z);
    this.entity.movableContainer.tween(this.entity.movableContainer.getLocalPosition())
        .to(targetPosition, 0.3, pc.SineInOut)
        .start();
};

GameplayController.prototype.postUpdate = function(dt) {
    if (this.recalculateNextFrame) {
        this.findAndDestroyDetachedGroups();
        this.checkLevelCompletion();
        this.verifyActiveBallColor();

        this.recalculateNextFrame = false;
    }
};

GameplayController.prototype.update = function(dt) {
    if (!this.entity.isGameRunning()) {
        return;
    }

    /* update combo timer */
    if (this.entity.comboCountdown > 0) {
        this.entity.comboCountdown -= dt;
    } else {
        this.entity.comboCounter = 0;
    }

    /* update levelTime */
    ScoreManager.instance.increaseLevelTime(dt);

    const cameraYaw = this.entity.camera.script.orbitCamera._yaw * Math.PI / 180;
    const ballDistance = this.entity.structureRadius;

    const xPos = Math.sin(cameraYaw) * ballDistance;
    const yPos = GameConfig.getAttribute('activeBubbleY');
    const zPos = Math.cos(cameraYaw) * ballDistance;

    this.entity.activeBubbleContainer.setLocalPosition(xPos, yPos, zPos);

    const bottomCell = this.getMostBottomBubbledCell();
    if (bottomCell) {
        const bottomCellPosition = bottomCell.getPosition().y;
        if (bottomCellPosition <= this.entity.defeatLine.getPosition().y) {
            this.entity.getBubbledCells().forEach(cell => cell.detachBubble());
            this.app.fire(EventTypes.LEVEL_FAILED);
        }
    }
};

// particlesController.js
/* jshint esversion: 6 */
var ParticlesController = pc.createScript('particlesController');

ParticlesController.attributes.add('cacheSize', {
    description: 'num particles in cache',
    type: 'number',
    default: 150
});

ParticlesController.prototype.initialize = function() {
    this.assetsLibrary = this.app.root.findByName('Library');
    this.particleAsset = this.assetsLibrary.findByName('Particle');
    this.particleCache = [];
    this.activeParticles = [];
    this.prepareCache();
    this.app.on(EventTypes.BURST_PARTICLES, this.createExplosion, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.on("destroy", this.destroy, this);
};

ParticlesController.prototype.reset = function() {
    for (let i = this.activeParticles.length - 1; i > -1; i--) {
        this.resetPaticle(this.activeParticles[i]);
    }
};

ParticlesController.prototype.destroy = function() {
    this.app.off(EventTypes.BURST_PARTICLES, this.createExplosion, this);
};

ParticlesController.prototype.update = function(dt) {
    this.activeParticles.forEach(child => this.updateChild(child, dt));
};

ParticlesController.prototype.createExplosion = function(x, y, z, numParticles, material, diffuseMapTintArray) {
    numParticles = numParticles || 6;
    if (this.particleCache && this.particleCache.length < this.cacheSize * 0.6) {
        numParticles = Math.floor(pc.math.random(2, Math.max(2, Math.floor(numParticles / 2))));
    }
    for (let i = 0; i < numParticles; i++) {
        this.addParticle(x, y, z, material, diffuseMapTintArray);
    }
};

ParticlesController.prototype.updateChild = function(child, dt) {
    //position
    const pos = child.getPosition();
    pos.x += child.speedX * dt;
    pos.y += child.speedY * dt;
    pos.z += child.speedZ * dt;
    child.setPosition(pos);
    child.speedY += child.gravity * dt;

    //scale
    child.currentScale += child.scaleSpeed * dt;
    child.scaleSpeed += child.scaleAcceleration * dt;
    if (child.currentScale <= 0) {
        child.currentScale = 0;
        child.completed = true;
    }
    child.setLocalScale(child.currentScale, child.currentScale, child.currentScale);

    if (child.completed) {
        this.resetPaticle(child);
    }
};


ParticlesController.prototype.addParticle = function(x, y, z, material, diffuseMapTintArray) {
    let particle;

    if (this.particleCache.length > 0) {
        particle = this.particleCache.splice(this.particleCache.length - 1, 1)[0];
    } else {
        particle = this.particleAsset.clone();
        this.entity.addChild(particle);
    }

    particle.enabled = true;
    particle.model.meshInstances[0].material = material;
    if (diffuseMapTintArray) {
        particle.model.meshInstances[0].setParameter('material_diffuse', diffuseMapTintArray);
    } else {
        particle.model.meshInstances[0].deleteParameter('material_diffuse');
    }
    particle.setPosition(x, y, z);
    particle.setLocalEulerAngles(pc.math.random(-180, 180), pc.math.random(-180, 180), pc.math.random(-180, 180));
    particle.speedX = pc.math.random(-4, 4);
    particle.speedY = pc.math.random(-2, 7);
    particle.speedZ = pc.math.random(-4, 4);
    particle.gravity = pc.math.random(-25, -15);
    particle.currentScale = pc.math.random(0.25, 0.35);
    particle.setLocalScale(particle.currentScale, particle.currentScale, particle.currentScale);
    particle.scaleSpeed = pc.math.random(1.0, 1.4);
    particle.scaleAcceleration = pc.math.random(-10, -5);
    particle.completed = false;

    this.activeParticles.push(particle);
};


ParticlesController.prototype.resetPaticle = function(particle) {
    const index = this.activeParticles.indexOf(particle);
    if (index != -1) {
        this.activeParticles.splice(index, 1);
    }
    particle.enabled = false;
    particle.setPosition(0, -50, 0);
    this.particleCache.push(particle);
};


ParticlesController.prototype.prepareCache = function() {
    this.particleCache = [];
    for (let i = 0; i < this.cacheSize; i++) {
        const particle = this.particleAsset.clone();
        particle.enabled = false;
        particle.setPosition(0, -50, 0);
        particle.completed = true;
        this.entity.addChild(particle);
        this.particleCache.push(particle);
    }

    console.log("Prepared ", this.particleCache.length, " particles");
};

// soundController.js
/* jshint esversion: 6 */
var SoundController = pc.createScript('soundController');

SoundController.attributes.add('soundStorage', {
    title: "Sound storage entity",
    type: 'entity'
});

SoundController.attributes.add('autoPlayMelody', {
    title: "Auto play melody",
    type: 'boolean',
    default: false
});


SoundController.soundStateLoaded = false;
SoundController.audioEnabled = true;

SoundController.prototype.initialize = function() {
    this.app.on(EventTypes.PLAY_AUDIO, this.playSound, this);
    this.app.on(EventTypes.STOP_AUDIO, this.stopSound, this);
    this.app.on(EventTypes.MUTE_SOUND, this.muteSound, this);
    this.app.on(EventTypes.UNMUTE_SOUND, this.unmuteSound, this);
    this.app.on(EventTypes.ENABLE_AUDIO, this.enableAudio, this);
    this.app.on(EventTypes.DISABLE_AUDIO, this.disableAudio, this);
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);

    if (this.autoPlayMelody) {
        this.soundStorage.sound.slot('melody').play();
    }

    const savedAudioState = LocalStorageController.getSavedValue('audioEnabled');
    if (savedAudioState != undefined) {
        SoundController.soundStateLoaded = true;
        if (savedAudioState) {
            this.enableAudio();
        } else {
            this.disableAudio();
        }
    } else {
        SoundController.soundStateLoaded = true;
        this.enableAudio();
        this.app.fire(EventTypes.SAVE_APP);
    }
};

SoundController.prototype.update = function(dt) {

};

SoundController.prototype.playSound = function(key, debounceDelay) {
    if (debounceDelay) {
        var currentTimestamp = new Date().getTime();
        var lastTimestamp = this.soundStorage.sound.slot(key).lastTimeStamp;
        if (lastTimestamp && currentTimestamp - lastTimestamp < debounceDelay) {
            return;
        }
        this.soundStorage.sound.slot(key).lastTimeStamp = currentTimestamp;
    }
    this.soundStorage.sound.play(key);
};

SoundController.prototype.stopSound = function(key) {
    this.soundStorage.sound.stop(key);
};

SoundController.prototype.muteSound = function(key) {
    this.soundStorage.sound.slot(key).volume = 0;
};

SoundController.prototype.unmuteSound = function(key, volume) {
    this.soundStorage.sound.slot(key).volume = volume;
};

SoundController.prototype.enableAudio = function() {
    SoundController.audioEnabled = true;
    this.app.systems.sound.volume = 1;
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);
};

SoundController.prototype.disableAudio = function() {
    SoundController.audioEnabled = false;
    this.app.systems.sound.volume = 0;
    this.app.fire(EventTypes.AUDIO_STATE_CHANGED, SoundController.audioEnabled);
};

var DebugScreen = pc.createScript("debugScreen");
DebugScreen.prototype.initialize = function() {}, DebugScreen.prototype.update = function(e) {};
var Constants = pc.createScript("constants");
Constants.GAME_NAME = "BubblesTower", Constants.GAME_VERSION = "v1.0.0", Constants.MODE_GAMEPLAY = 1, Constants.MODE_EDITOR = 2; // towerController.js
/* jshint esversion: 6 */
var TowerController = pc.createScript('towerController');


TowerController.prototype.initialize = function() {
    this.bindEntityMethods();

    this.app.on(EventTypes.BUILD_TOWER_MODEL, this.buildTowerModel, this);
    this.app.on(EventTypes.ANIMATE_TOWER_OPENING, this.animateTowerOpening, this);
};


TowerController.prototype.update = function(dt) {

};


TowerController.prototype.buildTowerModel = function() {
    for (let i = this.entity.towerContainer.children.length - 1; i > -1; i--) {
        this.entity.towerContainer.children[i].destroy();
    }

    this._buildTowerBase();
    this._buildTowerBottom();
    this._buildTowerCap();
    this._buildInputCatcher();
    this._buildDefeatLine();
    this._buildCameraFocusContainer();
};

TowerController.prototype._buildTowerBase = function() {
    /* add tower base */
    const towerHeight = this.entity.towerHeight * 2;
    this.entity.tower = this.entity.assetsLibrary.findByName('TowerBase').clone();
    this.entity.tower.enabled = true;
    this.entity.towerContainer.addChild(this.entity.tower);
    this.entity.tower.setLocalPosition(0, GameConfig.getAttribute('activeBubbleY') + towerHeight / 4, 0);
    this.entity.tower.setLocalScale(this.entity.towerRadius * 2, towerHeight, this.entity.towerRadius * 2);
    this.entity.tower.model.meshInstances[0].material = this.entity.tower.model.meshInstances[0].material.clone();
    this.entity.tower.model.meshInstances[0].material.diffuseMapTiling = new pc.Vec2(this.entity.towerRadius * 2, towerHeight / 3);
    this.entity.tower.model.meshInstances[0].material.normalMapTiling = new pc.Vec2(this.entity.towerRadius * 2, towerHeight / 3);
};

TowerController.prototype._buildTowerBottom = function() {
    const elementScale = this.entity.towerRadius * 2 + 4 * this.entity.cellRadius;
    this.entity.towerBottom = this.entity.assetsLibrary.findByName('TowerHolder').clone();
    this.entity.towerBottom.enabled = true;
    this.entity.towerContainer.addChild(this.entity.towerBottom);
    this.entity.towerBottom.setLocalScale(elementScale, elementScale, elementScale);
    this.entity.towerBottom.setLocalPosition(0, this._getInitialTowerBottomY(), 0);

};

TowerController.prototype._buildTowerCap = function() {
    const elementScale = this.entity.towerRadius * 2 + 4 * this.entity.cellRadius;
    this.entity.towerCap = this.entity.assetsLibrary.findByName('TowerCap').clone();
    this.entity.towerCap.enabled = true;
    this.entity.towerContainer.addChild(this.entity.towerCap);
    this.entity.towerCap.setLocalScale(elementScale, elementScale, elementScale);
    this.entity.towerCap.setLocalPosition(0, this._getInitialTowerCapY(), 0);
};

TowerController.prototype._buildInputCatcher = function() {
    this.entity.towerInputCatcher = this.entity.assetsLibrary.findByName('TowerInputCatcher').clone();
    this.entity.towerInputCatcher.enabled = true;
    this.entity.towerContainer.addChild(this.entity.towerInputCatcher);
    this.entity.towerInputCatcher.setLocalPosition(0, GameConfig.getAttribute('activeBubbleY') + this.entity.towerHeight / 2, 0);
    this.entity.towerInputCatcher.setLocalScale(2 * this.entity.structureRadius, this.entity.towerHeight + this.entity.cellScale, 2 * this.entity.structureRadius);
    this.entity.towerInputCatcher.collision.height = this.entity.towerHeight + this.entity.cellScale;
    this.entity.towerInputCatcher.collision.radius = this.entity.structureRadius;
};

TowerController.prototype._buildDefeatLine = function() {
    this.entity.defeatLine = this.entity.assetsLibrary.findByName('DefeatLine').clone();
    this.entity.defeatLine.enabled = true;
    this.entity.towerContainer.addChild(this.entity.defeatLine);
    this.entity.defeatLine.setLocalScale(this.entity.towerRadius * 2 + 0.05, 0.15, this.entity.towerRadius * 2 + 0.05);
    this.entity.defeatLine.setLocalPosition(0, GameConfig.getAttribute('redLineY'), 0);
};

TowerController.prototype._buildCameraFocusContainer = function() {
    this.entity.cameraFocusContainer = this.entity.findByName('CameraFocusContainer');
    this.entity.cameraFocusContainer.setLocalPosition(0, GameConfig.getAttribute('activeBubbleY') + this.entity.towerHeight / 2, 0);
    this.entity.cameraFocusContainer.setLocalScale(new pc.Vec3(this.entity.towerRadius * 2 + 1, this.entity.towerHeight, this.entity.towerRadius * 2 + 1));
    this.app.fire(EventTypes.REFOCUS_CAMERA);
};

TowerController.prototype._getTowerCapY = function() {
    return GameConfig.getAttribute('activeBubbleY') + this.entity.towerHeight + this.entity.cellRadius * 1.45;
};

TowerController.prototype._getTowerBottomY = function() {
    return GameConfig.getAttribute('activeBubbleY') - this.entity.cellRadius;
};


TowerController.prototype._getInitialTowerCapY = function() {
    return GameConfig.getAttribute('activeBubbleY') + this.entity.towerHeight * 0.4 + 0.05;
};

TowerController.prototype._getInitialTowerBottomY = function() {
    return GameConfig.getAttribute('activeBubbleY') + this.entity.towerHeight * 0.4 - 0.05;
};


TowerController.prototype.animateTowerOpening = function() {
    const towerOpeningDelay = GameConfig.getAttribute('towerOpeningAnimationDelay');
    const towerOpeningDuration = GameConfig.getAttribute('towerOpeningAnimationDuration');

    this.entity.delayedCall(towerOpeningDelay * 1000, () => this.app.fire(EventTypes.PLAY_AUDIO, 'towerOpening'));

    this.entity.towerCap.tween(this.entity.towerCap.getLocalPosition())
        .to(new pc.Vec3(0, this._getTowerCapY(), 0), towerOpeningDuration, pc.BackOut)
        .delay(towerOpeningDelay)
        .start();

    this.entity.towerBottom.tween(this.entity.towerBottom.getLocalPosition())
        .to(new pc.Vec3(0, this._getTowerBottomY(), 0), towerOpeningDuration * 0.65, pc.SineOut)
        .delay(towerOpeningDelay)
        .start();

    // this.entity.towerCap.setLocalRotation(0, 179.99999, 0);
    // this.entity.towerCap.tween(this.entity.towerCap.getLocalRotation())
    //     .to(new pc.Vec3(0, 160, 0), towerOpeningDuration, pc.SineOut)
    //     .delay(towerOpeningDelay)
    //     .start();


    // this.entity.towerBottom.setLocalRotation(0, 179.9999, 0);
    // this.entity.towerBottom.tween(this.entity.towerBottom.getLocalRotation())
    //     .to(new pc.Vec3(0, 90, 0), towerOpeningDuration * 0.65, pc.SineOut)
    //     .delay(towerOpeningDelay)
    //     .start();
};


/**
 * Entity-context methods
 */

TowerController.prototype.bindEntityMethods = function() {

    this.entity.getTowerPointAngle = function(localPosition) {
        return Math.atan2(localPosition.x, localPosition.z);
    }.bind(this.entity);


    this.entity.getTowerPointAngleByWorldPosition = function(worldPosition) {
        const entityPosition = this.getPosition();
        return Math.atan2(worldPosition.x - entityPosition.x, worldPosition.z - entityPosition.z);
    }.bind(this.entity);


    this.entity.getTowerPointPosition = function(towerAngle, towerElevation) {
        towerAngle = Utils.normalizeAngle(towerAngle);
        const localPoint = new pc.Vec3();
        localPoint.set(Math.sin(towerAngle) * this.structureRadius, towerElevation, Math.cos(towerAngle) * this.structureRadius);
        return localPoint;
    }.bind(this.entity);


    this.entity.getTrajectoryLength = function(towerAngleA, towerElevationA, towerAngleB, towerElevationB) {
        const deltaElevation = Math.abs(towerElevationA - towerElevationB);
        const deltaAngle = Math.abs(Utils.normalizeAngle(towerAngleB - towerAngleA));
        const horizontalDistance = deltaAngle * this.structureRadius;
        return Math.sqrt(deltaElevation * deltaElevation + horizontalDistance * horizontalDistance);
    }.bind(this.entity);


    this.entity.findClosestEmptyCell = function(towerAngle, towerElevation) {
        const emptyCells = this.getEmptyCells();
        const cellLocalPosition = new pc.Vec3();
        const movableContainerPosition = this.movableContainer.getLocalPosition();
        const towerPointPosition = this.getTowerPointPosition(towerAngle, towerElevation);

        let closestCell = null;
        let minDistance = 99999;

        for (let cell of emptyCells) {
            cellLocalPosition.copy(cell.getLocalPosition()).add(movableContainerPosition);
            const distance = cellLocalPosition.distance(towerPointPosition);
            if (distance < minDistance) {
                minDistance = distance;
                closestCell = cell;
            }
        }
        return closestCell;
    }.bind(this.entity);

};

// levelController.js
/* jshint esversion: 6 */
var LevelController = pc.createScript('levelController');


LevelController.prototype.initialize = function() {
    this.reset();

    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.app.on(EventTypes.TURN_FINISHED, this.handleTurnFinished, this);
};


LevelController.prototype.update = function(dt) {

};


LevelController.prototype.reset = function() {
    clearTimeout(this.shiftRowTimeout);
    this.maxLives = 6;
    this.numLives = this.maxLives;
    this.currentSetSize = this.numLives;
    this.bubblesInSet = this.currentSetSize;
    this.app.fire(EventTypes.UPDATE_BUBBLES_COUNTER, this.bubblesInSet);
};

LevelController.prototype.handleTurnFinished = function(turnSuccesfull) {
    this.numLives = this.calculateBubbleColorsAmount();
    if (!turnSuccesfull) {
        this.bubblesInSet -= 1;
        if (this.bubblesInSet <= 0) {
            this.currentSetSize -= 1;
            this.shiftNextRow();
            if (this.currentSetSize <= 0) {
                this.currentSetSize = this.numLives;
            }
            this.bubblesInSet = this.currentSetSize;
        }
        this.app.fire(EventTypes.UPDATE_BUBBLES_COUNTER, this.bubblesInSet);
    }
};

LevelController.prototype.shiftNextRow = function() {
    this.shiftRowTimeout = setTimeout(() => {
        if (this.entity.isGameRunning()) {
            this.app.fire(EventTypes.SHIFT_ROW, this.maxLives - this.numLives + 1);
        }
    }, 100);
};

LevelController.prototype.calculateBubbleColorsAmount = function() {
    return pc.math.clamp(this.entity.getPossibleBubbleColors().length, 2, 6);
};

// gameManager.js
/* jshint esversion: 6 */
var GameManager = pc.createScript('gameManager');

GameManager.gameStarted = false;

GameManager.prototype.initialize = function() {
    this.bindEntityMethods();
    this.initGlobalVariables();
    this.addEventListeners();

    this.app.on(EventTypes.FIRST_LAUCH, this.firstLauch, this);

    setTimeout(() => {
        this.prepareForFirstLaunch();
    }, 100);
};

GameManager.prototype.initGlobalVariables = function() {
    console.log('Initializing global game variables...');
    this.entity.camera = this.app.root.findByName("Camera");
    this.entity.assetsLibrary = this.app.root.findByName('Library');
    this.entity.movableContainer = this.entity.findByName('MovableContainer');
    this.entity.gridContainer = this.entity.findByName('GridContainer');
    this.entity.bubblesContainer = this.entity.findByName('BubblesContainer');
    this.entity.towerContainer = this.entity.findByName('TowerContainer');
    this.entity.effectsContainer = this.entity.findByName('EffectsContainer');
    this.entity.aimContainer = this.entity.findByName('AimContainer');
    this.entity.bubbleTrailContainer = this.entity.findByName('BubbleTrailContainer');
    this.entity.activeBubbleContainer = this.app.root.findByName('ActiveBubbleContainer');
    this.entity._gameRunning = false;
};

GameManager.prototype.addEventListeners = function() {
    this.app.on(EventTypes.LEVEL_COMPLETED, this.handleLevelCompleted, this);
    this.app.on(EventTypes.LEVEL_FAILED, this.handleLevelFailed, this);
    this.app.on(EventTypes.RESET_GAME, this.buildGame, this);
};

GameManager.prototype.prepareForFirstLaunch = function() {
    this.app.fire(EventTypes.RESET_SCORES);
    this.app.fire(EventTypes.LEVEL_RESET);
    this.app.fire(EventTypes.PREPARE_BUBBLE_COLORS);
    this.app.fire(EventTypes.CALCULATE_TOWER_PROPERTIES);
    this.app.fire(EventTypes.BUILD_TOWER_MODEL);
    this.app.fire(EventTypes.BUILD_GRID);

    setTimeout(() => this.startPerformanceMeasurement(), 250);
};

GameManager.prototype.buildGame = function() {
    this.app.fire(EventTypes.RESET_SCORES);
    this.app.fire(EventTypes.LEVEL_RESET);
    this.app.fire(EventTypes.PREPARE_BUBBLE_COLORS);
    this.app.fire(EventTypes.CALCULATE_TOWER_PROPERTIES);
    this.app.fire(EventTypes.BUILD_TOWER_MODEL);
    this.app.fire(EventTypes.BUILD_GRID);
    this.app.fire(EventTypes.SHOW_UI);
    this.app.fire(EventTypes.CREATE_BUBBLES);
    this.app.fire(EventTypes.ANIMATE_TOWER_OPENING);
    this.app.fire(EventTypes.ANIMATE_BUBBLES_APPEARING);

    this.entity.camera.script.orbitCamera.setInitialDistance();

    setTimeout(() => {
        this.app.fire(EventTypes.PREPARE_FIRST_BUBBLE);
        this.entity._gameRunning = true;
    }, GameConfig.getAttribute('firstBubbleAppearingDelay') * 1000);

    if (window.famobi_analytics) {
        window.famobi_analytics.trackEvent('EVENT_LEVELRESTART', {
            levelName: ''
        });
    }
};

GameManager.prototype.firstLauch = function() {
    GameManager.gameStarted = true;

    this.app.fire(EventTypes.SHOW_UI);
    this.app.fire(EventTypes.CREATE_BUBBLES);
    this.app.fire(EventTypes.ANIMATE_TOWER_OPENING);
    this.app.fire(EventTypes.ANIMATE_BUBBLES_APPEARING);
    this.app.fire(EventTypes.START_TUTORIAL);

    this.entity.camera.script.orbitCamera.setInitialDistance();

    setTimeout(() => {
        this.app.fire(EventTypes.PREPARE_FIRST_BUBBLE);
        this.entity._gameRunning = true;
    }, GameConfig.getAttribute('firstBubbleAppearingDelay') * 1000);

    /* tracking */
    ApiController.trackLevelStart({
        "level": 1
    });
    if (window.famobi_analytics) {
        window.famobi_analytics.trackEvent('EVENT_LEVELSTART', {
            levelName: ''
        });
    }

};

GameManager.prototype.update = function(dt) {
    if (this.performanceMeasurementStarted) {
        const elapsedTime = new Date().getTime() - this.performanceMeasurementStartTimestamp;
        if (elapsedTime > 2000 || this.frameTimes.length > 30) {
            const averageFrameTime = this.frameTimes.reduce((sum, curr) => sum + curr, 0) / this.frameTimes.length;

            // this.app.root.findByName('DebugText').enabled = true;
            // this.app.root.findByName('DebugText').element.text = ['L', 'M', 'H'][this.currentQualityIndex] + ' ' + (1 / averageFrameTime);

            this.performanceMeasurementStarted = false;
            const fpsLimit = this.currentQualityIndex == ScaleManager.QUALITY_HIGH ? 20 : 25;
            if (this.currentQualityIndex > ScaleManager.QUALITY_LOW && (1 / averageFrameTime) < fpsLimit) {
                ScaleManager.qualityIndex = this.currentQualityIndex - 1;
                this.app.fire(EventTypes.QUALITY_UPDATE);
                this.startPerformanceMeasurement();
            }


        }
        this.frameTimes.push(dt);
    }
};

GameManager.prototype.startPerformanceMeasurement = function() {
    if (ScaleManager.savedQuality === undefined) {
        this.currentQualityIndex = ScaleManager.qualityIndex;
        this.performanceMeasurementStartTimestamp = new Date().getTime();
        this.performanceMeasurementStarted = true;
        this.frameTimes = [];
    }
};

/* Entity methods */

GameManager.prototype.bindEntityMethods = function() {

    this.entity.isGameRunning = function() {
        return this._gameRunning;
    }.bind(this.entity);
};


/* Event handlers */

GameManager.prototype.handleLevelCompleted = function() {
    this.entity._gameRunning = false;
    setTimeout(() => WindowManager.showResults(true), 1100);

    this.app.fire(EventTypes.CONFETTI);

    const eventDetails = {
        "success": true,
        "score": ScoreManager.instance.getScores()
    };
    ApiController.trackLevelEnd(eventDetails);
};

GameManager.prototype.handleLevelFailed = function() {
    this.entity._gameRunning = false;
    setTimeout(() => WindowManager.showResults(false), 500);

    const eventDetails = {
        "success": false,
        "score": ScoreManager.instance.getScores(),
    };
    ApiController.trackLevelEnd(eventDetails);
};

// aimController.js
/* jshint esversion: 6 */
var AimController = pc.createScript('aimController');


AimController.attributes.add('maxPoints', {
    type: 'number',
    default: 20
});

AimController.attributes.add('pointSpacing', {
    type: 'number',
    default: 0.8
});

AimController.attributes.add('firstPointScale', {
    type: 'number',
    default: 0.5
});

AimController.attributes.add('lastPointScale', {
    type: 'number',
    default: 0.25
});

AimController.attributes.add('animated', {
    type: 'boolean',
    default: true
});

AimController.attributes.add('animationSpeed', {
    type: 'number',
    default: 2
});


AimController.prototype.initialize = function() {
    this.aimBallPrefab = this.app.root.findByName('Library').findByName('AimBall');
    this.aimingPoints = [];
    this.prepareAimPoints();
    this.entity.aimingActive = false;
    this.app.on(EventTypes.INPUT_DOWN, this.handleInputDown, this);
    this.app.on(EventTypes.INPUT_UP, this.handleInputUp, this);
};


AimController.prototype.prepareAimPoints = function() {
    for (let i = this.aimingPoints.length; i < this.maxPoints; i++) {
        const aimPoint = this.aimBallPrefab.clone();
        this.entity.aimContainer.addChild(aimPoint);
        aimPoint.enabled = false;
        aimPoint.setLocalScale(0, 0, 0);
        this.aimingPoints.push(aimPoint);
    }
};

AimController.prototype.update = function(dt) {
    this.clearAimLine();
    this.updatePhase(dt);

    if (!this.entity.aimingActive) {
        return;
    }

    const screenPosition = InputController.inputPosition;
    if (screenPosition) {
        this.findTargetTowerPoint(screenPosition);
    }
};


AimController.prototype.findTargetTowerPoint = function(screenPosition) {
    var from = this.entity.camera.camera.screenToWorld(screenPosition.x, screenPosition.y, this.entity.camera.camera.nearClip);
    var to = this.entity.camera.camera.screenToWorld(screenPosition.x, screenPosition.y, this.entity.camera.camera.farClip);

    const raycastResults = Utils.raycastAllAdvanced(from, to).filter(result => result && result.entity).filter(result => result.entity.name === 'TowerInputCatcher');
    if (raycastResults.length > 0) {

        const initialPoint = this.entity.activeBubbleContainer.getPosition().clone();
        const targetPoint = raycastResults[0].point.clone();

        const initialBubbleElevation = initialPoint.y;
        const initialBubbleAngle = this.entity.getTowerPointAngleByWorldPosition(this.entity.activeBubbleContainer.getPosition());
        const targetAngle = this.entity.getTowerPointAngleByWorldPosition(targetPoint);
        const normalizedDeltaAngle = Utils.normalizeAngle(targetAngle - initialBubbleAngle);
        const verticalDistance = targetPoint.y - initialPoint.y;
        const horizontalDistance = normalizedDeltaAngle * this.entity.structureRadius;
        const aimingAngle = pc.math.clamp(Math.atan2(horizontalDistance, verticalDistance), -GameConfig.getAttribute('maxAimingAngle') * pc.math.DEG_TO_RAD, GameConfig.getAttribute('maxAimingAngle') * pc.math.DEG_TO_RAD);

        this.entity.currentAimingAngle = aimingAngle;
        this.buildAimLine(initialBubbleAngle, initialBubbleElevation, aimingAngle);
        this.resizeAimingPoints();

    } else {
        this.entity.currentAimingAngle = undefined;
    }
};

AimController.prototype.clearAimLine = function() {
    for (let i = this.entity.aimContainer.children.length - 1; i > -1; i--) {
        this.entity.aimContainer.children[i].enabled = false;
    }
};

AimController.prototype.buildAimLine = function(initialTowerAngle, initialElevation, launchAngle) {
    const elevationDelta = Math.cos(launchAngle) * this.pointSpacing;
    const angularDelta = Math.sin(launchAngle) * this.pointSpacing / this.entity.structureRadius;

    let prevTowerElevation = initialElevation;
    let prevTowerAngle = initialTowerAngle;
    let prevWorldPosition = this.entity.activeBubbleContainer.getPosition().clone();
    for (let i = 1 + this.phaseDelta; i < this.maxPoints + 1; i++) {
        const pointIndex = Math.floor(i);
        const currentTowerElevation = initialElevation + i * elevationDelta;
        const currentTowerAngle = initialTowerAngle + i * angularDelta;

        const currentLocalPosition = this.entity.getTowerPointPosition(currentTowerAngle, currentTowerElevation);
        const currentWorldPosition = this.entity.parent.getWorldTransform().transformPoint(currentLocalPosition);

        if (this._testIntersections(prevWorldPosition, currentWorldPosition, this.entity.getBubbledCells())) {
            // const trajectoryLength = this.entity.getTrajectoryLength(initialTowerAngle, initialElevation, currentTowerAngle, currentTowerElevation);
            // console.log('trajectory ', trajectoryLength);
            return;
        } else {
            this.showAimingPoint(pointIndex, this.entity.getTowerPointPosition(currentTowerAngle, currentTowerElevation), pc.math.lerp(this.firstPointScale, this.lastPointScale, i / this.maxPoints));
        }

        prevTowerElevation = currentTowerElevation;
        prevTowerAngle = currentTowerAngle;
        prevWorldPosition = currentWorldPosition;
    }
};

AimController.prototype.resizeAimingPoints = function() {
    const activePoints = this.entity.aimContainer.children.reduce((sum, curr) => curr.enabled ? sum + 1 : sum, 0);
    for (let i = 1; i <= activePoints; i++) {
        const aimPoint = this.aimingPoints[i];
        if (aimPoint && aimPoint.enabled) {
            const scale = pc.math.lerp(this.firstPointScale, this.lastPointScale, i / activePoints);
            aimPoint.setLocalScale(scale, scale, scale);
        }
    }
};

AimController.prototype._testIntersections = function(initialWorldPosition, targetWorldPosition, possibleContactingBubbledCells) {
    for (let cell of possibleContactingBubbledCells) {
        const cellPosition = cell.getPosition();
        const raycastResults = Utils.checkSegmentSphereIntersection(initialWorldPosition, targetWorldPosition, cellPosition, this.entity.cellRadius * GameConfig.getAttribute('cellCollisionUpScale'));
        if (raycastResults) {
            return true;
        }
    }

    if (targetWorldPosition.y >= this.entity.topLineY) {
        return true;
    }

    return false;
};

AimController.prototype.showAimingPoint = function(pointIndex, pointLocalPosition, pointScale) {
    const aimPoint = this.aimingPoints[pointIndex];
    if (aimPoint) {
        aimPoint.enabled = true;
        aimPoint.setLocalScale(pointScale, pointScale, pointScale);
        aimPoint.setLocalPosition(pointLocalPosition);
    }
};


AimController.prototype.updatePhase = function(dt) {
    if (this.animated) {
        this.phaseDelta = ((this.phaseDelta || 0) + dt * this.animationSpeed) % 1;
    } else {
        this.phaseDelta = 0;
    }
};


/* Event listeners */

AimController.prototype.handleInputDown = function(x, y) {
    this.aimingTimeout = setTimeout(() => {
        if (InputController.inputPosition && InputController.inputPosition.traveledDistance < InputController.tapDistanceTolerance) {
            this.startAiming();
        }
    }, 300);
};

AimController.prototype.handleInputUp = function(x, y) {
    clearTimeout(this.aimingTimeout);
    this.endAiming();
};

AimController.prototype.startAiming = function(dt) {
    this.prepareAimPoints();
    this.entity.aimingActive = true;
    this.app.fire(EventTypes.AIMING_STARTED);
};

AimController.prototype.endAiming = function(dt) {
    if (this.entity.aimingActive) {

        if (this.entity.currentAimingAngle != null) {
            this.app.fire(EventTypes.SHOOT, this.entity.currentAimingAngle);
        }

        this.entity.aimingActive = false;
        this.entity.currentAimingAngle = undefined;
    }
};


// bubblesCounter.js
/* jshint esversion: 6 */
var BubblesCounter = pc.createScript('bubblesCounter');


BubblesCounter.prototype.initialize = function() {
    this.entity.bubblesCounter = this.entity.findByName('BubblesCounter');
    this.entity.inactiveBubblesContainer = this.entity.findByName('InactiveBubblesContainer');
    this.entity.nextBubbleContainer = this.entity.findByName('NextBubbleContainer');
    this.entity.nextMarble = this.entity.findByName('NextMarble');

    this.numBubbles = 0;

    this.app.on(EventTypes.SHOW_BUBBLES_COUNTER, this.show, this);
    this.app.on(EventTypes.HIDE_BUBBLES_COUNTER, this.hide, this);
    this.app.on(EventTypes.UPDATE_BUBBLES_COUNTER, this.updateBubblesCounter, this);
    this.app.on(EventTypes.SET_NEXT_BUBBLE_COLOR, this.setNextBubbleColor, this);
};


BubblesCounter.prototype.update = function(dt) {

};

BubblesCounter.prototype.show = function(delay) {
    this.entity.bubblesCounter.enabled = true;

    const baseDelay = delay;
    const bubbleDelay = 0.045;

    this.entity.inactiveBubblesContainer.children.forEach((marble, index) => {
        marble.setLocalScale(0, 0, 0);
        marble.tween(marble.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
            .delay(baseDelay + index * bubbleDelay)
            .start();
    });

    this.entity.nextBubbleContainer.setLocalScale(0, 0, 0);
    this.entity.nextBubbleContainer.tween(this.entity.nextBubbleContainer.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
        .delay(baseDelay + this.numBubbles * bubbleDelay)
        .start();
};

BubblesCounter.prototype.hide = function() {
    this.entity.bubblesCounter.enabled = false;
};

BubblesCounter.prototype.updateBubblesCounter = function(numBubbles) {
    /* update next bubbles */
    this.entity.inactiveBubblesContainer.children.forEach((child, index) => {
        child.enabled = index < numBubbles - 1;
    });

    /* update next marble */
    this.entity.nextBubbleContainer.setLocalPosition(this.entity.inactiveBubblesContainer.children[numBubbles - 1].getLocalPosition());

    /* animate next/colored marble */
    if (this.numBubbles != numBubbles) {
        this.numBubbles = numBubbles;
    }
};

BubblesCounter.prototype.setNextBubbleColor = function(color) {
    const materialName = this.app.colorsStorage.getMaterial(color).name;
    const asset = this.app.assets.find(`marble${materialName}.png`);
    this.entity.nextMarble.element.textureAsset = asset.id;

    this.entity.nextMarble.setLocalScale(0.5, 0.5, 0.5);
    this.entity.nextMarble.tween(this.entity.nextMarble.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.2, pc.BackOut)
        .start();
};


var BasicButton = pc.createScript("basicButton");
BasicButton.attributes.add("applyScalingTween", {
    title: "Apply scaling tween",
    type: "boolean",
    default: !0
}), BasicButton.attributes.add("defaultScale", {
    title: "Default scale",
    type: "number",
    default: 1,
    min: .5,
    max: 1.5
}), BasicButton.attributes.add("hoverScale", {
    title: "Hover scale",
    type: "number",
    default: 1.03,
    min: .5,
    max: 1.5
}), BasicButton.attributes.add("pressedScale", {
    title: "Pressed scale",
    type: "number",
    default: .97,
    min: .5,
    max: 1.5
}), BasicButton.attributes.add("upScaleDuration", {
    title: "Tween duration",
    type: "number",
    default: .085,
    min: .005,
    max: 1
}), BasicButton.attributes.add("clickSound", {
    title: "Play sound",
    type: "boolean",
    default: !0
}), BasicButton.prototype.initialize = function() {
    this.hovered = !1, pc.platform.mobile && this.app.touch ? (this.entity.element.on("touchstart", this.onPress, this), this.entity.element.on("touchend", this.onRelease, this)) : (this.entity.element.on("mouseenter", this.onEnter, this), this.entity.element.on("mousedown", this.onPress, this), this.entity.element.on("mouseup", this.onRelease, this), this.entity.element.on("mouseleave", this.onLeave, this))
}, BasicButton.prototype.onEnter = function(e) {
    this.hovered = !0, this.applyScalingTween && e.element.entity.tween(e.element.entity.getLocalScale()).to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), this.upScaleDuration, pc.Linear).start(), document.body.style.cursor = "pointer"
}, BasicButton.prototype.onLeave = function(e) {
    this.hovered = !1, this.applyScalingTween && e.element.entity.tween(e.element.entity.getLocalScale()).to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), this.upScaleDuration, pc.Linear).start(), document.body.style.cursor = "default"
}, BasicButton.prototype.onPress = function(e) {
    e.stopPropagation(), this.clickSound && this.app.fire(EventTypes.PLAY_AUDIO, "click"), this.applyScalingTween && e.element.entity.tween(e.element.entity.getLocalScale()).to(new pc.Vec3(this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale, this.defaultScale * this.pressedScale), .5 * this.upScaleDuration, pc.SineOut).start()
}, BasicButton.prototype.onRelease = function(e) {
    this.applyScalingTween && (this.hovered ? e.element.entity.tween(e.element.entity.getLocalScale()).to(new pc.Vec3(this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale, this.defaultScale * this.hoverScale), .5 * this.upScaleDuration, pc.Linear).start() : e.element.entity.tween(e.element.entity.getLocalScale()).to(new pc.Vec3(this.defaultScale, this.defaultScale, this.defaultScale), .5 * this.upScaleDuration, pc.Linear).start())
}; // settingsPanel.js
/* jshint esversion: 6 */
var SettingsPanel = pc.createScript('settingsPanel');

SettingsPanel.prototype.initialize = function() {

    this.entity.settingsPanelContainer = this.entity.findByName("SettingsPanelContainer");
    this.entity.buttonSettings = this.entity.findByName("ButtonSettings");
    this.entity.soundButtonsContainer = this.entity.settingsPanelContainer.findByName('SoundButtonsContainer');
    this.entity.buttonSoundOn = this.entity.settingsPanelContainer.findByName("ButtonSoundOn");
    this.entity.buttonSoundOff = this.entity.settingsPanelContainer.findByName("ButtonSoundOff");
    this.entity.qualityButtonsContainer = this.entity.settingsPanelContainer.findByName('QualityButtonsContainer');
    this.entity.buttonQualityLow = this.entity.settingsPanelContainer.findByName("ButtonQualityLow");
    this.entity.buttonQualityMedium = this.entity.settingsPanelContainer.findByName("ButtonQualityMedium");
    this.entity.buttonQualityHigh = this.entity.settingsPanelContainer.findByName("ButtonQualityHigh");

    this.entity.settingsPanelOpened = false;
    this.entity.soundButtonsContainer.setLocalPosition(0, 0, 0);
    this.entity.soundButtonsContainer.setLocalScale(0, 0, 0);
    this.entity.qualityButtonsContainer.setLocalPosition(0, 0, 0);
    this.entity.qualityButtonsContainer.setLocalScale(0, 0, 0);

    this.app.on(EventTypes.QUALITY_CHANGED, this.updateQualityButtons, this);
    this.app.on(EventTypes.AUDIO_STATE_CHANGED, this.updateAudioButtons, this);

    this.assignAction(this.entity.buttonQualityLow, this.rescalePressed, this);
    this.assignAction(this.entity.buttonQualityMedium, this.rescalePressed, this);
    this.assignAction(this.entity.buttonQualityHigh, this.rescalePressed, this);
    this.updateQualityButtons();

    this.assignAction(this.entity.buttonSoundOn, this.disableAudio, this);
    this.assignAction(this.entity.buttonSoundOff, this.enableAudio, this);
    this.updateAudioButtons(true);

    this.assignAction(this.entity.buttonSettings, this.toggleSettings, this);


    /* show method */
    this.entity.show = function() {
        this.enabled = true;
    }.bind(this.entity);


    /* hide method */
    this.entity.hide = function() {

        this.settingsPanelOpened = false;
        const pos = this.settingsPanelContainer.getLocalPosition();
        pos.y = SettingsPanel.panelClosedY;
        this.settingsPanelContainer.setLocalPosition(pos);

        this.enabled = false;
    }.bind(this.entity);


    this.entity.show();
};

SettingsPanel.prototype.assignAction = function(button, handler, handlerContext) {
    if (this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } else if (this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    } else {
        console.warn("SettingsPanel.assignAction - either touch or mouse are not detected");
    }
};


SettingsPanel.prototype.update = function(dt) {

};

SettingsPanel.prototype.rescalePressed = function() {
    this.app.fire(EventTypes.QUALITY_NEXT);
};

SettingsPanel.prototype.enableAudio = function() {
    this.app.fire(EventTypes.ENABLE_AUDIO);
    if (window.famobi_analytics) {
        famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
            bgmVolume: 1,
            sfxVolume: 1
        });
    }
    this.app.fire(EventTypes.SAVE_APP);
};

SettingsPanel.prototype.disableAudio = function() {
    this.app.fire(EventTypes.DISABLE_AUDIO);
    if (window.famobi_analytics) {
        famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
            bgmVolume: 0,
            sfxVolume: 0
        });
    }
    this.app.fire(EventTypes.SAVE_APP);
};

SettingsPanel.prototype.updateQualityButtons = function() {
    this.entity.buttonQualityLow.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_LOW;
    this.entity.buttonQualityMedium.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_MEDIUM;
    this.entity.buttonQualityHigh.enabled = ScaleManager.qualityIndex === ScaleManager.QUALITY_HIGH;
};

SettingsPanel.prototype.updateAudioButtons = function(dontSaveState) {
    this.entity.buttonSoundOn.enabled = SoundController.audioEnabled;
    this.entity.buttonSoundOff.enabled = !SoundController.audioEnabled;
};

SettingsPanel.prototype.toggleSettings = function() {

    this.entity.settingsPanelOpened = !this.entity.settingsPanelOpened;

    this.entity.buttonSettings.angle = this.entity.settingsPanelOpened ? 0 : 180;
    this.entity.buttonSettings.tween(this.entity.buttonSettings)
        .to({
            angle: this.entity.settingsPanelOpened ? 180 : 0
        }, 0.2, pc.SineInOut)
        .on('update', () => this.entity.buttonSettings.setLocalEulerAngles(0, 0, this.entity.buttonSettings.angle))
        .start();

    const soundButtonsContainerPosition = this.entity.soundButtonsContainer.getLocalPosition();
    this.entity.soundButtonsContainer.tween(this.entity.soundButtonsContainer.getLocalPosition())
        .to(new pc.Vec3(soundButtonsContainerPosition.x, this.entity.settingsPanelOpened ? -100 : 0, soundButtonsContainerPosition.z), 0.3, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.CircularOut)
        .start();
    this.entity.soundButtonsContainer.tween(this.entity.soundButtonsContainer.getLocalScale())
        .to(this.entity.settingsPanelOpened ? new pc.Vec3(1, 1, 1) : new pc.Vec3(0, 0, 0), this.entity.settingsPanelOpened ? 0.3 : 0.12, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.SineOut)
        .start();


    const qualityButtonsContainerPosition = this.entity.qualityButtonsContainer.getLocalPosition();
    this.entity.qualityButtonsContainer.tween(this.entity.qualityButtonsContainer.getLocalPosition())
        .to(new pc.Vec3(qualityButtonsContainerPosition.x, this.entity.settingsPanelOpened ? -200 : 0, qualityButtonsContainerPosition.z), 0.3, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.CircularOut)
        .start();
    this.entity.qualityButtonsContainer.tween(this.entity.qualityButtonsContainer.getLocalScale())
        .to(this.entity.settingsPanelOpened ? new pc.Vec3(1, 1, 1) : new pc.Vec3(0, 0, 0), this.entity.settingsPanelOpened ? 0.3 : 0.15, this.entity.settingsPanelOpened ? pc.QuinticOut : pc.SineOut)
        .start();
};


// scaleManager.js
/* jshint esversion: 6 */
var ScaleManager = pc.createScript('scaleManager');

ScaleManager.QUALITY_LOW = 0;
ScaleManager.QUALITY_MEDIUM = 1;
ScaleManager.QUALITY_HIGH = 2;

ScaleManager.qualityIndex = undefined;
ScaleManager.qualityFactor = 1;
ScaleManager.screenRatio = 1;
ScaleManager.mobileLandscapeMode = false;

ScaleManager.SCREEN_RATIO_MIN = 9 / 16;
ScaleManager.SCREEN_RATIO_MAX = 4 / 3;

ScaleManager.screenWidth = 0;
ScaleManager.screenHeight = 0;

ScaleManager.attributes.add('mainLight', {
    title: "Main light",
    type: 'entity'
});

ScaleManager.attributes.add('hiqhQualityFPSThreshold', {
    type: 'number',
    default: 30
});

ScaleManager.attributes.add('mediumQualityFPSThreshold', {
    type: 'number',
    default: 24
});

ScaleManager.attributes.add('numIterations', {
    type: 'number',
    default: 3
});

ScaleManager.attributes.add('framesPerIteration', {
    type: 'number',
    default: 15
});

ScaleManager.attributes.add('desktopQuality', {
    title: "Desktop quality",
    type: 'number',
    array: true,
    default: [0.5, 0.75, 1]
});

ScaleManager.attributes.add('mobileQuality', {
    title: "Mobile quality",
    type: 'number',
    array: true,
    default: [0.75, 1, 2]
});

ScaleManager.attributes.add('defaultMobileQuality', {
    type: 'number',
    default: 2
});

ScaleManager.attributes.add('defaultDesktopQuality', {
    type: 'number',
    default: 2
});

ScaleManager.prototype.initialize = function() {
    const savedQuality = LocalStorageController.getSavedValue('qualityIndex');
    if (pc.platform.mobile) {
        this.mobileQuality[1] = window.devicePixelRatio || 1;
        this.mobileQuality[2] = window.devicePixelRatio || 1;
        this.qualityPresets = this.mobileQuality;
    } else {
        this.qualityPresets = this.desktopQuality;
    }

    if (savedQuality != undefined) {
        ScaleManager.savedQuality = savedQuality;
        ScaleManager.qualityIndex = savedQuality;
    } else {
        ScaleManager.qualityIndex = pc.platform.mobile ? this.defaultMobileQuality : this.defaultDesktopQuality;
        this.app.fire(EventTypes.SAVE_APP);
    }


    this.app.on(EventTypes.QUALITY_NEXT, this.setNextQuality, this);
    this.app.on(EventTypes.QUALITY_UPDATE, this.resetQualitySettings, this);
    this.app.on(EventTypes.MEASURE_PERFORMANCE, this.measurePerformance, this);

    console.log("Adding resize handler...");
    if (window.visualViewport) {
        this.useVisualViewport = true;
        window.visualViewport.addEventListener('resize', this.resize.bind(this));
    } else {
        this.useVisualViewport = false;
        window.addEventListener('resize', this.resize.bind(this), true);
    }

    this.resetQualitySettings();
};

ScaleManager.prototype.measurePerformance = function() {
    if (ScaleManager.savedQuality === undefined) {
        this.customMeasurementStarted = true;
        this.customMeasurementIteration = 0;
        this.currentMeasurementSession = {
            frames: 0,
            time: 0
        };
        this.customMeasurementResults = [
            [],
            [],
            []
        ];
        this.customMeasurementLastTimestamp = performance.now();
    }
};

ScaleManager.prototype.update = function(dt) {
    if (this.customMeasurementStarted) {
        const now = performance.now();
        const msSinceLastFrame = now - this.customMeasurementLastTimestamp;
        this.customMeasurementLastTimestamp = now;

        this.currentMeasurementSession.frames += 1;
        this.currentMeasurementSession.time += msSinceLastFrame;

        if (this.currentMeasurementSession.frames >= this.framesPerIteration) {
            this.customMeasurementResults[ScaleManager.qualityIndex].push(this.currentMeasurementSession);
            this.currentMeasurementSession = {
                frames: 0,
                time: 0
            };
            this.customMeasurementIteration += 1;
            ScaleManager.qualityIndex = ScaleManager.qualityIndex > 0 ? (ScaleManager.qualityIndex - 1) : (this.qualityPresets.length - 1);
            this.updateShadowsSettings();
            this.updateScreenSize();

            if (this.customMeasurementIteration >= this.qualityPresets.length * this.numIterations) {
                this.customMeasurementStarted = false;
                console.log(this.customMeasurementResults);

                const averageFPS = [0, 0, 0];

                for (let i = 0; i < 3; i++) {
                    let frames = 0;
                    let times = 0;
                    var rec = this.customMeasurementResults[i];
                    for (let q = 0; q < this.numIterations; q++) {
                        times += rec[q].time;
                        frames += rec[q].frames;
                    }
                    averageFPS[i] = (1000 / times * frames);
                }

                if (averageFPS[ScaleManager.QUALITY_HIGH] >= this.hiqhQualityFPSThreshold) {
                    ScaleManager.qualityIndex = ScaleManager.QUALITY_HIGH;
                    this.resetQualitySettings();
                } else if (averageFPS[ScaleManager.QUALITY_MEDIUM] >= this.mediumQualityFPSThreshold) {
                    ScaleManager.qualityIndex = ScaleManager.QUALITY_MEDIUM;
                    this.resetQualitySettings();
                } else {
                    ScaleManager.qualityIndex = ScaleManager.QUALITY_LOW;
                    this.resetQualitySettings();
                }
                this.app.fire(EventTypes.SAVE_APP);

                this.app.root.findByName("DebugText").enabled = true;
                this.app.root.findByName("DebugText").element.text = ['L', 'M', 'H'][ScaleManager.qualityIndex] + ' ' + ~~averageFPS[ScaleManager.QUALITY_HIGH] + ' ' + ~~averageFPS[ScaleManager.QUALITY_MEDIUM] + ' ' + ~~averageFPS[ScaleManager.QUALITY_LOW];
            }
        }
    }
};

ScaleManager.prototype.setNextQuality = function() {
    ScaleManager.qualityIndex = ((ScaleManager.qualityIndex || 0) + 1) % this.qualityPresets.length;
    this.resetQualitySettings();
    this.app.fire(EventTypes.SAVE_APP);
};

ScaleManager.prototype.resetQualitySettings = function() {
    ScaleManager.qualityFactor = this.qualityPresets[ScaleManager.qualityIndex];
    this.updateShadowsSettings();
    this.resize();
};

ScaleManager.prototype.updateShadowsSettings = function() {
    if (this.mainLight) {
        if (ScaleManager.qualityIndex === ScaleManager.QUALITY_HIGH) {
            this.mainLight.light.castShadows = true;
        } else {
            this.mainLight.light.castShadows = false;
        }
    }
};

ScaleManager.prototype.resize = function() {
    this.updateScreenSize();

    if (pc.platform.ios || pc.platform.mobile) {
        setTimeout(() => this.updateScreenSize(), 500);
    }
};

ScaleManager.prototype.updateScreenSize = function() {
    const width = this.useVisualViewport ? window.visualViewport.width : window.innerWidth;
    const height = this.useVisualViewport ? window.visualViewport.height : window.innerHeight;
    ScaleManager.qualityFactor = this.qualityPresets[ScaleManager.qualityIndex];
    this.app.graphicsDevice.resizeCanvas(Math.floor(width * ScaleManager.qualityFactor), Math.floor(height * ScaleManager.qualityFactor));

    ScaleManager.screenWidth = width * ScaleManager.qualityFactor;
    ScaleManager.screenHeight = height * ScaleManager.qualityFactor;
    ScaleManager.mobileLandscapeMode = false;
    ScaleManager.screenRatio = this.app.graphicsDevice.canvas.width / this.app.graphicsDevice.canvas.height;
    if (ScaleManager.screenRatio < ScaleManager.SCREEN_RATIO_MIN) {
        this.distance = GameplayController.cameraToTowerMinDistance;
    } else if (ScaleManager.screenRatio > ScaleManager.SCREEN_RATIO_MAX) {
        if (pc.platform.mobile) {
            ScaleManager.mobileLandscapeMode = true;
        }
    } else {

    }

    this.app.fire(EventTypes.QUALITY_CHANGED, ScaleManager.qualityIndex);
    this.app.fire(EventTypes.VIEWPORT_RESIZE, Math.floor(ScaleManager.screenWidth), Math.floor(ScaleManager.screenHeight));
};



// DatGUI.js
/* jshint esversion: 6 */
var DatGui = pc.createScript('datGui');
var datGuiInstance;
var GlobalConfig;

// initialize code called once per entity
DatGui.prototype.initialize = function() {
    GlobalConfig = {
        numRows: GameConfig.getAttribute('numRows'),
        numColumns: GameConfig.getAttribute('numColumns'),
        bubbleLines: GameConfig.getAttribute('bubbleLines'),
        availableColors: GameConfig.getAttribute('availableColors'),

        save: function() {
            pc.app.fire(EventTypes.RESET_GAME);
        }
    };

    datGuiInstance = new dat.GUI();
    var globalConfigFolder = datGuiInstance.addFolder('Settings');
    this.addOption(globalConfigFolder, GlobalConfig, 'numRows', 5, 30, 1, this.updateValue, this);
    this.addOption(globalConfigFolder, GlobalConfig, 'numColumns', 1, 30, 1, this.updateValue, this);
    this.addOption(globalConfigFolder, GlobalConfig, 'bubbleLines', 1, 15, 1, this.updateValue, this);
    this.addOption(globalConfigFolder, GlobalConfig, 'availableColors', 1, 6, 1, this.updateValue, this);
    this.addMethod(globalConfigFolder, GlobalConfig, 'save');
    globalConfigFolder.open();

    datGuiInstance.close();
};

DatGui.prototype.updateValue = function(key, value) {
    GameConfig.setAttribute(key, GlobalConfig[key]);
};

DatGui.prototype.addOption = function(folder, optionHolder, optionKey, min, max, step, listener, listenerContext) {
    folder.add(optionHolder, optionKey, min, max).onChange(value => listener.call(listenerContext, optionKey, value)).step(step);
};

DatGui.prototype.addMethod = function(folder, optionHolder, optionKey) {
    folder.add(optionHolder, optionKey);
};

DatGui.prototype.update = function(dt) {

};

// dat.gui.min.js
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.dat = t() : e.dat = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = n(1),
            r = o(i);
        e.exports = r["default"]
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(2),
            r = o(i),
            a = n(6),
            l = o(a),
            s = n(3),
            u = o(s),
            d = n(7),
            c = o(d),
            f = n(8),
            _ = o(f),
            p = n(10),
            h = o(p),
            m = n(11),
            b = o(m),
            g = n(12),
            v = o(g),
            y = n(13),
            w = o(y),
            x = n(14),
            E = o(x),
            C = n(15),
            A = o(C),
            S = n(16),
            k = o(S),
            O = n(9),
            T = o(O),
            R = n(17),
            L = o(R);
        t["default"] = {
            color: {
                Color: r["default"],
                math: l["default"],
                interpret: u["default"]
            },
            controllers: {
                Controller: c["default"],
                BooleanController: _["default"],
                OptionController: h["default"],
                StringController: b["default"],
                NumberController: v["default"],
                NumberControllerBox: w["default"],
                NumberControllerSlider: E["default"],
                FunctionController: A["default"],
                ColorController: k["default"]
            },
            dom: {
                dom: T["default"]
            },
            gui: {
                GUI: L["default"]
            },
            GUI: L["default"]
        }
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t, n) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "RGB" === this.__state.space ? this.__state[t] : (h.recalculateRGB(this, t, n), this.__state[t])
                },
                set: function(e) {
                    "RGB" !== this.__state.space && (h.recalculateRGB(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                }
            })
        }

        function a(e, t) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "HSV" === this.__state.space ? this.__state[t] : (h.recalculateHSV(this), this.__state[t])
                },
                set: function(e) {
                    "HSV" !== this.__state.space && (h.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = e
                }
            })
        }
        t.__esModule = !0;
        var l = n(3),
            s = o(l),
            u = n(6),
            d = o(u),
            c = n(4),
            f = o(c),
            _ = n(5),
            p = o(_),
            h = function() {
                function e() {
                    if (i(this, e), this.__state = s["default"].apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments");
                    this.__state.a = this.__state.a || 1
                }
                return e.prototype.toString = function() {
                    return (0, f["default"])(this)
                }, e.prototype.toHexString = function() {
                    return (0, f["default"])(this, !0)
                }, e.prototype.toOriginal = function() {
                    return this.__state.conversion.write(this)
                }, e
            }();
        h.recalculateRGB = function(e, t, n) {
            if ("HEX" === e.__state.space) e.__state[t] = d["default"].component_from_hex(e.__state.hex, n);
            else {
                if ("HSV" !== e.__state.space) throw new Error("Corrupted color state");
                p["default"].extend(e.__state, d["default"].hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
            }
        }, h.recalculateHSV = function(e) {
            var t = d["default"].rgb_to_hsv(e.r, e.g, e.b);
            p["default"].extend(e.__state, {
                s: t.s,
                v: t.v
            }), p["default"].isNaN(t.h) ? p["default"].isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
        }, h.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r(h.prototype, "r", 2), r(h.prototype, "g", 1), r(h.prototype, "b", 0), a(h.prototype, "h"), a(h.prototype, "s"), a(h.prototype, "v"), Object.defineProperty(h.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(e) {
                this.__state.a = e
            }
        }), Object.defineProperty(h.prototype, "hex", {
            get: function() {
                return "HEX" !== !this.__state.space && (this.__state.hex = d["default"].rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
            },
            set: function(e) {
                this.__state.space = "HEX", this.__state.hex = e
            }
        }), t["default"] = h
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(4),
            r = o(i),
            a = n(5),
            l = o(a),
            s = [{
                litmus: l["default"].isString,
                conversions: {
                    THREE_CHAR_HEX: {
                        read: function(e) {
                            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                            return null !== t && {
                                space: "HEX",
                                hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
                            }
                        },
                        write: r["default"]
                    },
                    SIX_CHAR_HEX: {
                        read: function(e) {
                            var t = e.match(/^#([A-F0-9]{6})$/i);
                            return null !== t && {
                                space: "HEX",
                                hex: parseInt("0x" + t[1].toString(), 0)
                            }
                        },
                        write: r["default"]
                    },
                    CSS_RGB: {
                        read: function(e) {
                            var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== t && {
                                space: "RGB",
                                r: parseFloat(t[1]),
                                g: parseFloat(t[2]),
                                b: parseFloat(t[3])
                            }
                        },
                        write: r["default"]
                    },
                    CSS_RGBA: {
                        read: function(e) {
                            var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                            return null !== t && {
                                space: "RGB",
                                r: parseFloat(t[1]),
                                g: parseFloat(t[2]),
                                b: parseFloat(t[3]),
                                a: parseFloat(t[4])
                            }
                        },
                        write: r["default"]
                    }
                }
            }, {
                litmus: l["default"].isNumber,
                conversions: {
                    HEX: {
                        read: function(e) {
                            return {
                                space: "HEX",
                                hex: e,
                                conversionName: "HEX"
                            }
                        },
                        write: function(e) {
                            return e.hex
                        }
                    }
                }
            }, {
                litmus: l["default"].isArray,
                conversions: {
                    RGB_ARRAY: {
                        read: function(e) {
                            return 3 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b]
                        }
                    },
                    RGBA_ARRAY: {
                        read: function(e) {
                            return 4 === e.length && {
                                space: "RGB",
                                r: e[0],
                                g: e[1],
                                b: e[2],
                                a: e[3]
                            }
                        },
                        write: function(e) {
                            return [e.r, e.g, e.b, e.a]
                        }
                    }
                }
            }, {
                litmus: l["default"].isObject,
                conversions: {
                    RGBA_OBJ: {
                        read: function(e) {
                            return !!(l["default"].isNumber(e.r) && l["default"].isNumber(e.g) && l["default"].isNumber(e.b) && l["default"].isNumber(e.a)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b,
                                a: e.a
                            }
                        }
                    },
                    RGB_OBJ: {
                        read: function(e) {
                            return !!(l["default"].isNumber(e.r) && l["default"].isNumber(e.g) && l["default"].isNumber(e.b)) && {
                                space: "RGB",
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        },
                        write: function(e) {
                            return {
                                r: e.r,
                                g: e.g,
                                b: e.b
                            }
                        }
                    },
                    HSVA_OBJ: {
                        read: function(e) {
                            return !!(l["default"].isNumber(e.h) && l["default"].isNumber(e.s) && l["default"].isNumber(e.v) && l["default"].isNumber(e.a)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v,
                                a: e.a
                            }
                        }
                    },
                    HSV_OBJ: {
                        read: function(e) {
                            return !!(l["default"].isNumber(e.h) && l["default"].isNumber(e.s) && l["default"].isNumber(e.v)) && {
                                space: "HSV",
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        },
                        write: function(e) {
                            return {
                                h: e.h,
                                s: e.s,
                                v: e.v
                            }
                        }
                    }
                }
            }],
            u = void 0,
            d = void 0,
            c = function() {
                d = !1;
                var e = arguments.length > 1 ? l["default"].toArray(arguments) : arguments[0];
                return l["default"].each(s, function(t) {
                    if (t.litmus(e)) return l["default"].each(t.conversions, function(t, n) {
                        if (u = t.read(e), d === !1 && u !== !1) return d = u, u.conversionName = n, u.conversion = t, l["default"].BREAK
                    }), l["default"].BREAK
                }), d
            };
        t["default"] = c
    }, function(e, t) {
        "use strict";
        t.__esModule = !0, t["default"] = function(e, t) {
            var n = e.__state.conversionName.toString(),
                o = Math.round(e.r),
                i = Math.round(e.g),
                r = Math.round(e.b),
                a = e.a,
                l = Math.round(e.h),
                s = e.s.toFixed(1),
                u = e.v.toFixed(1);
            if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                for (var d = e.hex.toString(16); d.length < 6;) d = "0" + d;
                return "#" + d
            }
            return "CSS_RGB" === n ? "rgb(" + o + "," + i + "," + r + ")" : "CSS_RGBA" === n ? "rgba(" + o + "," + i + "," + r + "," + a + ")" : "HEX" === n ? "0x" + e.hex.toString(16) : "RGB_ARRAY" === n ? "[" + o + "," + i + "," + r + "]" : "RGBA_ARRAY" === n ? "[" + o + "," + i + "," + r + "," + a + "]" : "RGB_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + "}" : "RGBA_OBJ" === n ? "{r:" + o + ",g:" + i + ",b:" + r + ",a:" + a + "}" : "HSV_OBJ" === n ? "{h:" + l + ",s:" + s + ",v:" + u + "}" : "HSVA_OBJ" === n ? "{h:" + l + ",s:" + s + ",v:" + u + ",a:" + a + "}" : "unknown format"
        }
    }, function(e, t) {
        "use strict";
        t.__esModule = !0;
        var n = Array.prototype.forEach,
            o = Array.prototype.slice,
            i = {
                BREAK: {},
                extend: function(e) {
                    return this.each(o.call(arguments, 1), function(t) {
                        var n = this.isObject(t) ? Object.keys(t) : [];
                        n.forEach(function(n) {
                            this.isUndefined(t[n]) || (e[n] = t[n])
                        }.bind(this))
                    }, this), e
                },
                defaults: function(e) {
                    return this.each(o.call(arguments, 1), function(t) {
                        var n = this.isObject(t) ? Object.keys(t) : [];
                        n.forEach(function(n) {
                            this.isUndefined(e[n]) && (e[n] = t[n])
                        }.bind(this))
                    }, this), e
                },
                compose: function() {
                    var e = o.call(arguments);
                    return function() {
                        for (var t = o.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                        return t[0]
                    }
                },
                each: function(e, t, o) {
                    if (e)
                        if (n && e.forEach && e.forEach === n) e.forEach(t, o);
                        else if (e.length === e.length + 0) {
                        var i = void 0,
                            r = void 0;
                        for (i = 0, r = e.length; i < r; i++)
                            if (i in e && t.call(o, e[i], i) === this.BREAK) return
                    } else
                        for (var a in e)
                            if (t.call(o, e[a], a) === this.BREAK) return
                },
                defer: function(e) {
                    setTimeout(e, 0)
                },
                debounce: function(e, t) {
                    var n = void 0;
                    return function() {
                        function o() {
                            n = null
                        }
                        var i = this,
                            r = arguments,
                            a = !n;
                        clearTimeout(n), n = setTimeout(o, t), a && e.apply(i, r)
                    }
                },
                toArray: function(e) {
                    return e.toArray ? e.toArray() : o.call(e)
                },
                isUndefined: function(e) {
                    return void 0 === e
                },
                isNull: function(e) {
                    return null === e
                },
                isNaN: function(e) {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function(e) {
                    return isNaN(e)
                }),
                isArray: Array.isArray || function(e) {
                    return e.constructor === Array
                },
                isObject: function(e) {
                    return e === Object(e)
                },
                isNumber: function(e) {
                    return e === e + 0
                },
                isString: function(e) {
                    return e === e + ""
                },
                isBoolean: function(e) {
                    return e === !1 || e === !0
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            };
        t["default"] = i
    }, function(e, t) {
        "use strict";
        t.__esModule = !0;
        var n = void 0,
            o = {
                hsv_to_rgb: function(e, t, n) {
                    var o = Math.floor(e / 60) % 6,
                        i = e / 60 - Math.floor(e / 60),
                        r = n * (1 - t),
                        a = n * (1 - i * t),
                        l = n * (1 - (1 - i) * t),
                        s = [
                            [n, l, r],
                            [a, n, r],
                            [r, n, l],
                            [r, a, n],
                            [l, r, n],
                            [n, r, a]
                        ][o];
                    return {
                        r: 255 * s[0],
                        g: 255 * s[1],
                        b: 255 * s[2]
                    }
                },
                rgb_to_hsv: function(e, t, n) {
                    var o = Math.min(e, t, n),
                        i = Math.max(e, t, n),
                        r = i - o,
                        a = void 0,
                        l = void 0;
                    return 0 === i ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (l = r / i, a = e === i ? (t - n) / r : t === i ? 2 + (n - e) / r : 4 + (e - t) / r, a /= 6, a < 0 && (a += 1), {
                        h: 360 * a,
                        s: l,
                        v: i / 255
                    })
                },
                rgb_to_hex: function(e, t, n) {
                    var o = this.hex_with_component(0, 2, e);
                    return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n)
                },
                component_from_hex: function(e, t) {
                    return e >> 8 * t & 255
                },
                hex_with_component: function(e, t, o) {
                    return o << (n = 8 * t) | e & ~(255 << n)
                }
            };
        t["default"] = o
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var o = function() {
            function e(t, o) {
                n(this, e), this.initialValue = t[o], this.domElement = document.createElement("div"), this.object = t, this.property = o, this.__onChange = void 0, this.__onFinishChange = void 0
            }
            return e.prototype.onChange = function(e) {
                return this.__onChange = e, this
            }, e.prototype.onFinishChange = function(e) {
                return this.__onFinishChange = e, this
            }, e.prototype.setValue = function(e) {
                return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
            }, e.prototype.getValue = function() {
                return this.object[this.property]
            }, e.prototype.updateDisplay = function() {
                return this
            }, e.prototype.isModified = function() {
                return this.initialValue !== this.getValue()
            }, e
        }();
        t["default"] = o
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var l = n(7),
            s = o(l),
            u = n(9),
            d = o(u),
            c = function(e) {
                function t(n, o) {
                    function a() {
                        s.setValue(!s.__prev)
                    }
                    i(this, t);
                    var l = r(this, e.call(this, n, o)),
                        s = l;
                    return l.__prev = l.getValue(), l.__checkbox = document.createElement("input"), l.__checkbox.setAttribute("type", "checkbox"), d["default"].bind(l.__checkbox, "change", a, !1), l.domElement.appendChild(l.__checkbox), l.updateDisplay(), l
                }
                return a(t, e), t.prototype.setValue = function(t) {
                    var n = e.prototype.setValue.call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n
                }, t.prototype.updateDisplay = function() {
                    return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, e.prototype.updateDisplay.call(this)
                }, t
            }(s["default"]);
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e) {
            if ("0" === e || a["default"].isUndefined(e)) return 0;
            var t = e.match(u);
            return a["default"].isNull(t) ? 0 : parseFloat(t[1])
        }
        t.__esModule = !0;
        var r = n(5),
            a = o(r),
            l = {
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            },
            s = {};
        a["default"].each(l, function(e, t) {
            a["default"].each(e, function(e) {
                s[e] = t
            })
        });
        var u = /(\d+(\.\d+)?)px/,
            d = {
                makeSelectable: function(e, t) {
                    void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                        return !1
                    } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
                },
                makeFullscreen: function(e, t, n) {
                    var o = n,
                        i = t;
                    a["default"].isUndefined(i) && (i = !0), a["default"].isUndefined(o) && (o = !0), e.style.position = "absolute", i && (e.style.left = 0, e.style.right = 0), o && (e.style.top = 0, e.style.bottom = 0)
                },
                fakeEvent: function(e, t, n, o) {
                    var i = n || {},
                        r = s[t];
                    if (!r) throw new Error("Event type " + t + " not supported.");
                    var l = document.createEvent(r);
                    switch (r) {
                        case "MouseEvents":
                            var u = i.x || i.clientX || 0,
                                d = i.y || i.clientY || 0;
                            l.initMouseEvent(t, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, u, d, !1, !1, !1, !1, 0, null);
                            break;
                        case "KeyboardEvents":
                            var c = l.initKeyboardEvent || l.initKeyEvent;
                            a["default"].defaults(i, {
                                cancelable: !0,
                                ctrlKey: !1,
                                altKey: !1,
                                shiftKey: !1,
                                metaKey: !1,
                                keyCode: void 0,
                                charCode: void 0
                            }), c(t, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                            break;
                        default:
                            l.initEvent(t, i.bubbles || !1, i.cancelable || !0)
                    }
                    a["default"].defaults(l, o), e.dispatchEvent(l)
                },
                bind: function(e, t, n, o) {
                    var i = o || !1;
                    return e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n), d
                },
                unbind: function(e, t, n, o) {
                    var i = o || !1;
                    return e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n), d
                },
                addClass: function(e, t) {
                    if (void 0 === e.className) e.className = t;
                    else if (e.className !== t) {
                        var n = e.className.split(/ +/);
                        n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                    }
                    return d
                },
                removeClass: function(e, t) {
                    if (t)
                        if (e.className === t) e.removeAttribute("class");
                        else {
                            var n = e.className.split(/ +/),
                                o = n.indexOf(t);
                            o !== -1 && (n.splice(o, 1), e.className = n.join(" "))
                        }
                    else e.className = void 0;
                    return d
                },
                hasClass: function(e, t) {
                    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
                },
                getWidth: function(e) {
                    var t = getComputedStyle(e);
                    return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width)
                },
                getHeight: function(e) {
                    var t = getComputedStyle(e);
                    return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height)
                },
                getOffset: function(e) {
                    var t = e,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (t.offsetParent)
                        do n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent; while (t);
                    return n
                },
                isActive: function(e) {
                    return e === document.activeElement && (e.type || e.href)
                }
            };
        t["default"] = d
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var l = n(7),
            s = o(l),
            u = n(9),
            d = o(u),
            c = n(5),
            f = o(c),
            _ = function(e) {
                function t(n, o, a) {
                    i(this, t);
                    var l = r(this, e.call(this, n, o)),
                        s = a,
                        u = l;
                    return l.__select = document.createElement("select"), f["default"].isArray(s) && ! function() {
                        var e = {};
                        f["default"].each(s, function(t) {
                            e[t] = t
                        }), s = e
                    }(), f["default"].each(s, function(e, t) {
                        var n = document.createElement("option");
                        n.innerHTML = t, n.setAttribute("value", e), u.__select.appendChild(n)
                    }), l.updateDisplay(), d["default"].bind(l.__select, "change", function() {
                        var e = this.options[this.selectedIndex].value;
                        u.setValue(e)
                    }), l.domElement.appendChild(l.__select), l
                }
                return a(t, e), t.prototype.setValue = function(t) {
                    var n = e.prototype.setValue.call(this, t);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n
                }, t.prototype.updateDisplay = function() {
                    return d["default"].isActive(this.__select) ? this : (this.__select.value = this.getValue(), e.prototype.updateDisplay.call(this))
                }, t
            }(s["default"]);
        t["default"] = _
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var l = n(7),
            s = o(l),
            u = n(9),
            d = o(u),
            c = function(e) {
                function t(n, o) {
                    function a() {
                        u.setValue(u.__input.value)
                    }

                    function l() {
                        u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
                    }
                    i(this, t);
                    var s = r(this, e.call(this, n, o)),
                        u = s;
                    return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), d["default"].bind(s.__input, "keyup", a), d["default"].bind(s.__input, "change", a), d["default"].bind(s.__input, "blur", l), d["default"].bind(s.__input, "keydown", function(e) {
                        13 === e.keyCode && this.blur()
                    }), s.updateDisplay(), s.domElement.appendChild(s.__input), s
                }
                return a(t, e), t.prototype.updateDisplay = function() {
                    return d["default"].isActive(this.__input) || (this.__input.value = this.getValue()), e.prototype.updateDisplay.call(this)
                }, t
            }(s["default"]);
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e) {
            var t = e.toString();
            return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
        }
        t.__esModule = !0;
        var s = n(7),
            u = o(s),
            d = n(5),
            c = o(d),
            f = function(e) {
                function t(n, o, a) {
                    i(this, t);
                    var s = r(this, e.call(this, n, o)),
                        u = a || {};
                    return s.__min = u.min, s.__max = u.max, s.__step = u.step, c["default"].isUndefined(s.__step) ? 0 === s.initialValue ? s.__impliedStep = 1 : s.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)) / 10 : s.__impliedStep = s.__step, s.__precision = l(s.__impliedStep), s
                }
                return a(t, e), t.prototype.setValue = function(t) {
                    var n = t;
                    return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max), void 0 !== this.__step && n % this.__step !== 0 && (n = Math.round(n / this.__step) * this.__step), e.prototype.setValue.call(this, n)
                }, t.prototype.min = function(e) {
                    return this.__min = e, this
                }, t.prototype.max = function(e) {
                    return this.__max = e, this
                }, t.prototype.step = function(e) {
                    return this.__step = e, this.__impliedStep = e, this.__precision = l(e), this
                }, t
            }(u["default"]);
        t["default"] = f
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e, t) {
            var n = Math.pow(10, t);
            return Math.round(e * n) / n
        }
        t.__esModule = !0;
        var s = n(12),
            u = o(s),
            d = n(9),
            c = o(d),
            f = n(5),
            _ = o(f),
            p = function(e) {
                function t(n, o, a) {
                    function l() {
                        var e = parseFloat(m.__input.value);
                        _["default"].isNaN(e) || m.setValue(e)
                    }

                    function s() {
                        m.__onFinishChange && m.__onFinishChange.call(m, m.getValue())
                    }

                    function u() {
                        s()
                    }

                    function d(e) {
                        var t = b - e.clientY;
                        m.setValue(m.getValue() + t * m.__impliedStep), b = e.clientY
                    }

                    function f() {
                        c["default"].unbind(window, "mousemove", d), c["default"].unbind(window, "mouseup", f), s()
                    }

                    function p(e) {
                        c["default"].bind(window, "mousemove", d), c["default"].bind(window, "mouseup", f), b = e.clientY
                    }
                    i(this, t);
                    var h = r(this, e.call(this, n, o, a));
                    h.__truncationSuspended = !1;
                    var m = h,
                        b = void 0;
                    return h.__input = document.createElement("input"), h.__input.setAttribute("type", "text"), c["default"].bind(h.__input, "change", l), c["default"].bind(h.__input, "blur", u), c["default"].bind(h.__input, "mousedown", p), c["default"].bind(h.__input, "keydown", function(e) {
                        13 === e.keyCode && (m.__truncationSuspended = !0, this.blur(), m.__truncationSuspended = !1, s())
                    }), h.updateDisplay(), h.domElement.appendChild(h.__input), h
                }
                return a(t, e), t.prototype.updateDisplay = function() {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : l(this.getValue(), this.__precision), e.prototype.updateDisplay.call(this)
                }, t
            }(u["default"]);
        t["default"] = p
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e, t, n, o, i) {
            return o + (i - o) * ((e - t) / (n - t))
        }
        t.__esModule = !0;
        var s = n(12),
            u = o(s),
            d = n(9),
            c = o(d),
            f = function(e) {
                function t(n, o, a, s, u) {
                    function d(e) {
                        document.activeElement.blur(), c["default"].bind(window, "mousemove", f), c["default"].bind(window, "mouseup", _), f(e)
                    }

                    function f(e) {
                        e.preventDefault();
                        var t = h.__background.getBoundingClientRect();
                        return h.setValue(l(e.clientX, t.left, t.right, h.__min, h.__max)), !1
                    }

                    function _() {
                        c["default"].unbind(window, "mousemove", f), c["default"].unbind(window, "mouseup", _), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
                    }
                    i(this, t);
                    var p = r(this, e.call(this, n, o, {
                            min: a,
                            max: s,
                            step: u
                        })),
                        h = p;
                    return p.__background = document.createElement("div"), p.__foreground = document.createElement("div"), c["default"].bind(p.__background, "mousedown", d), c["default"].addClass(p.__background, "slider"), c["default"].addClass(p.__foreground, "slider-fg"), p.updateDisplay(), p.__background.appendChild(p.__foreground), p.domElement.appendChild(p.__background), p
                }
                return a(t, e), t.prototype.updateDisplay = function() {
                    var t = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * t + "%", e.prototype.updateDisplay.call(this)
                }, t
            }(u["default"]);
        t["default"] = f
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        t.__esModule = !0;
        var l = n(7),
            s = o(l),
            u = n(9),
            d = o(u),
            c = function(e) {
                function t(n, o, a) {
                    i(this, t);
                    var l = r(this, e.call(this, n, o)),
                        s = l;
                    return l.__button = document.createElement("div"), l.__button.innerHTML = void 0 === a ? "Fire" : a, d["default"].bind(l.__button, "click", function(e) {
                        return e.preventDefault(), s.fire(), !1
                    }), d["default"].addClass(l.__button, "button"), l.domElement.appendChild(l.__button), l
                }
                return a(t, e), t.prototype.fire = function() {
                    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }, t
            }(s["default"]);
        t["default"] = c
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e, t, n, o) {
            e.style.background = "", g["default"].each(y, function(i) {
                e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); "
            })
        }

        function s(e) {
            e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
        }
        t.__esModule = !0;
        var u = n(7),
            d = o(u),
            c = n(9),
            f = o(c),
            _ = n(2),
            p = o(_),
            h = n(3),
            m = o(h),
            b = n(5),
            g = o(b),
            v = function(e) {
                function t(n, o) {
                    function a(e) {
                        h(e), f["default"].bind(window, "mousemove", h), f["default"].bind(window, "mouseup", u)
                    }

                    function u() {
                        f["default"].unbind(window, "mousemove", h), f["default"].unbind(window, "mouseup", u), _()
                    }

                    function d() {
                        var e = (0, m["default"])(this.value);
                        e !== !1 ? (y.__color.__state = e, y.setValue(y.__color.toOriginal())) : this.value = y.__color.toString()
                    }

                    function c() {
                        f["default"].unbind(window, "mousemove", b), f["default"].unbind(window, "mouseup", c), _()
                    }

                    function _() {
                        y.__onFinishChange && y.__onFinishChange.call(y, y.__color.toOriginal())
                    }

                    function h(e) {
                        e.preventDefault();
                        var t = y.__saturation_field.getBoundingClientRect(),
                            n = (e.clientX - t.left) / (t.right - t.left),
                            o = 1 - (e.clientY - t.top) / (t.bottom - t.top);
                        return o > 1 ? o = 1 : o < 0 && (o = 0), n > 1 ? n = 1 : n < 0 && (n = 0), y.__color.v = o, y.__color.s = n, y.setValue(y.__color.toOriginal()), !1
                    }

                    function b(e) {
                        e.preventDefault();
                        var t = y.__hue_field.getBoundingClientRect(),
                            n = 1 - (e.clientY - t.top) / (t.bottom - t.top);
                        return n > 1 ? n = 1 : n < 0 && (n = 0), y.__color.h = 360 * n, y.setValue(y.__color.toOriginal()), !1
                    }
                    i(this, t);
                    var v = r(this, e.call(this, n, o));
                    v.__color = new p["default"](v.getValue()), v.__temp = new p["default"](0);
                    var y = v;
                    v.domElement = document.createElement("div"), f["default"].makeSelectable(v.domElement, !1), v.__selector = document.createElement("div"), v.__selector.className = "selector", v.__saturation_field = document.createElement("div"), v.__saturation_field.className = "saturation-field", v.__field_knob = document.createElement("div"), v.__field_knob.className = "field-knob", v.__field_knob_border = "2px solid ", v.__hue_knob = document.createElement("div"), v.__hue_knob.className = "hue-knob", v.__hue_field = document.createElement("div"), v.__hue_field.className = "hue-field", v.__input = document.createElement("input"), v.__input.type = "text", v.__input_textShadow = "0 1px 1px ", f["default"].bind(v.__input, "keydown", function(e) {
                        13 === e.keyCode && d.call(this)
                    }), f["default"].bind(v.__input, "blur", d), f["default"].bind(v.__selector, "mousedown", function() {
                        f["default"].addClass(this, "drag").bind(window, "mouseup", function() {
                            f["default"].removeClass(y.__selector, "drag")
                        })
                    });
                    var w = document.createElement("div");
                    return g["default"].extend(v.__selector.style, {
                        width: "122px",
                        height: "102px",
                        padding: "3px",
                        backgroundColor: "#222",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                    }), g["default"].extend(v.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: v.__field_knob_border + (v.__color.v < .5 ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1
                    }), g["default"].extend(v.__hue_knob.style, {
                        position: "absolute",
                        width: "15px",
                        height: "2px",
                        borderRight: "4px solid #fff",
                        zIndex: 1
                    }), g["default"].extend(v.__saturation_field.style, {
                        width: "100px",
                        height: "100px",
                        border: "1px solid #555",
                        marginRight: "3px",
                        display: "inline-block",
                        cursor: "pointer"
                    }), g["default"].extend(w.style, {
                        width: "100%",
                        height: "100%",
                        background: "none"
                    }), l(w, "top", "rgba(0,0,0,0)", "#000"), g["default"].extend(v.__hue_field.style, {
                        width: "15px",
                        height: "100px",
                        border: "1px solid #555",
                        cursor: "ns-resize",
                        position: "absolute",
                        top: "3px",
                        right: "3px"
                    }), s(v.__hue_field), g["default"].extend(v.__input.style, {
                        outline: "none",
                        textAlign: "center",
                        color: "#fff",
                        border: 0,
                        fontWeight: "bold",
                        textShadow: v.__input_textShadow + "rgba(0,0,0,0.7)"
                    }), f["default"].bind(v.__saturation_field, "mousedown", a), f["default"].bind(v.__field_knob, "mousedown", a), f["default"].bind(v.__hue_field, "mousedown", function(e) {
                        b(e), f["default"].bind(window, "mousemove", b), f["default"].bind(window, "mouseup", c)
                    }), v.__saturation_field.appendChild(w), v.__selector.appendChild(v.__field_knob), v.__selector.appendChild(v.__saturation_field), v.__selector.appendChild(v.__hue_field), v.__hue_field.appendChild(v.__hue_knob), v.domElement.appendChild(v.__input), v.domElement.appendChild(v.__selector), v.updateDisplay(), v
                }
                return a(t, e), t.prototype.updateDisplay = function() {
                    var e = (0, m["default"])(this.getValue());
                    if (e !== !1) {
                        var t = !1;
                        g["default"].each(p["default"].COMPONENTS, function(n) {
                            if (!g["default"].isUndefined(e[n]) && !g["default"].isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                        }, this), t && g["default"].extend(this.__color.__state, e)
                    }
                    g["default"].extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                    var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                        o = 255 - n;
                    g["default"].extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, l(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), g["default"].extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + n + "," + n + "," + n + ")",
                        textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
                    })
                }, t
            }(d["default"]),
            y = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        t["default"] = v
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t, n) {
            var o = document.createElement("li");
            return t && o.appendChild(t), n ? e.__ul.insertBefore(o, n) : e.__ul.appendChild(o), e.onResize(), o
        }

        function r(e, t) {
            var n = e.__preset_select[e.__preset_select.selectedIndex];
            t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
        }

        function a(e, t, n) {
            if (n.__li = t, n.__gui = e, U["default"].extend(n, {
                    options: function(t) {
                        if (arguments.length > 1) {
                            var o = n.__li.nextElementSibling;
                            return n.remove(), s(e, n.object, n.property, {
                                before: o,
                                factoryArgs: [U["default"].toArray(arguments)]
                            })
                        }
                        if (U["default"].isArray(t) || U["default"].isObject(t)) {
                            var i = n.__li.nextElementSibling;
                            return n.remove(), s(e, n.object, n.property, {
                                before: i,
                                factoryArgs: [t]
                            })
                        }
                    },
                    name: function(e) {
                        return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                    },
                    listen: function() {
                        return n.__gui.listen(n), n
                    },
                    remove: function() {
                        return n.__gui.remove(n), n
                    }
                }), n instanceof B["default"]) ! function() {
                var e = new N["default"](n.object, n.property, {
                    min: n.__min,
                    max: n.__max,
                    step: n.__step
                });
                U["default"].each(["updateDisplay", "onChange", "onFinishChange", "step"], function(t) {
                    var o = n[t],
                        i = e[t];
                    n[t] = e[t] = function() {
                        var t = Array.prototype.slice.call(arguments);
                        return i.apply(e, t), o.apply(n, t)
                    }
                }), z["default"].addClass(t, "has-slider"), n.domElement.insertBefore(e.domElement, n.domElement.firstElementChild)
            }();
            else if (n instanceof N["default"]) {
                var o = function(t) {
                    if (U["default"].isNumber(n.__min) && U["default"].isNumber(n.__max)) {
                        var o = n.__li.firstElementChild.firstElementChild.innerHTML,
                            i = n.__gui.__listening.indexOf(n) > -1;
                        n.remove();
                        var r = s(e, n.object, n.property, {
                            before: n.__li.nextElementSibling,
                            factoryArgs: [n.__min, n.__max, n.__step]
                        });
                        return r.name(o), i && r.listen(), r
                    }
                    return t
                };
                n.min = U["default"].compose(o, n.min), n.max = U["default"].compose(o, n.max)
            } else n instanceof O["default"] ? (z["default"].bind(t, "click", function() {
                z["default"].fakeEvent(n.__checkbox, "click")
            }), z["default"].bind(n.__checkbox, "click", function(e) {
                e.stopPropagation()
            })) : n instanceof R["default"] ? (z["default"].bind(t, "click", function() {
                z["default"].fakeEvent(n.__button, "click")
            }), z["default"].bind(t, "mouseover", function() {
                z["default"].addClass(n.__button, "hover")
            }), z["default"].bind(t, "mouseout", function() {
                z["default"].removeClass(n.__button, "hover")
            })) : n instanceof j["default"] && (z["default"].addClass(t, "color"), n.updateDisplay = U["default"].compose(function(e) {
                return t.style.borderLeftColor = n.__color.toString(), e
            }, n.updateDisplay), n.updateDisplay());
            n.setValue = U["default"].compose(function(t) {
                return e.getRoot().__preset_select && n.isModified() && r(e.getRoot(), !0), t
            }, n.setValue)
        }

        function l(e, t) {
            var n = e.getRoot(),
                o = n.__rememberedObjects.indexOf(t.object);
            if (o !== -1) {
                var i = n.__rememberedObjectIndecesToControllers[o];
                if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) {
                    var r = n.load.remembered,
                        a = void 0;
                    if (r[e.preset]) a = r[e.preset];
                    else {
                        if (!r[Q]) return;
                        a = r[Q]
                    }
                    if (a[o] && void 0 !== a[o][t.property]) {
                        var l = a[o][t.property];
                        t.initialValue = l, t.setValue(l)
                    }
                }
            }
        }

        function s(e, t, n, o) {
            if (void 0 === t[n]) throw new Error('Object "' + t + '" has no property "' + n + '"');
            var r = void 0;
            if (o.color) r = new j["default"](t, n);
            else {
                var s = [t, n].concat(o.factoryArgs);
                r = C["default"].apply(e, s)
            }
            o.before instanceof S["default"] && (o.before = o.before.__li), l(e, r), z["default"].addClass(r.domElement, "c");
            var u = document.createElement("span");
            z["default"].addClass(u, "property-name"), u.innerHTML = r.property;
            var d = document.createElement("div");
            d.appendChild(u), d.appendChild(r.domElement);
            var c = i(e, d, o.before);
            return z["default"].addClass(c, oe.CLASS_CONTROLLER_ROW), r instanceof j["default"] ? z["default"].addClass(c, "color") : z["default"].addClass(c, g(r.getValue())), a(e, c, r), e.__controllers.push(r), r
        }

        function u(e, t) {
            return document.location.href + "." + t
        }

        function d(e, t, n) {
            var o = document.createElement("option");
            o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }

        function c(e, t) {
            t.style.display = e.useLocalStorage ? "block" : "none"
        }

        function f(e) {
            var t = e.__save_row = document.createElement("li");
            z["default"].addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), z["default"].addClass(t, "save-row");
            var n = document.createElement("span");
            n.innerHTML = "&nbsp;", z["default"].addClass(n, "button gears");
            var o = document.createElement("span");
            o.innerHTML = "Save", z["default"].addClass(o, "button"), z["default"].addClass(o, "save");
            var i = document.createElement("span");
            i.innerHTML = "New", z["default"].addClass(i, "button"), z["default"].addClass(i, "save-as");
            var r = document.createElement("span");
            r.innerHTML = "Revert", z["default"].addClass(r, "button"), z["default"].addClass(r, "revert");
            var a = e.__preset_select = document.createElement("select");
            e.load && e.load.remembered ? U["default"].each(e.load.remembered, function(t, n) {
                d(e, n, n === e.preset)
            }) : d(e, Q, !1), z["default"].bind(a, "change", function() {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                e.preset = this.value
            }), t.appendChild(a), t.appendChild(n), t.appendChild(o), t.appendChild(i), t.appendChild(r), q && ! function() {
                var t = document.getElementById("dg-local-explain"),
                    n = document.getElementById("dg-local-storage"),
                    o = document.getElementById("dg-save-locally");
                o.style.display = "block", "true" === localStorage.getItem(u(e, "isLocal")) && n.setAttribute("checked", "checked"), c(e, t), z["default"].bind(n, "change", function() {
                    e.useLocalStorage = !e.useLocalStorage, c(e, t)
                })
            }();
            var l = document.getElementById("dg-new-constructor");
            z["default"].bind(l, "keydown", function(e) {
                !e.metaKey || 67 !== e.which && 67 !== e.keyCode || Z.hide()
            }), z["default"].bind(n, "click", function() {
                l.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), Z.show(), l.focus(), l.select()
            }), z["default"].bind(o, "click", function() {
                e.save()
            }), z["default"].bind(i, "click", function() {
                var t = prompt("Enter a new preset name.");
                t && e.saveAs(t)
            }), z["default"].bind(r, "click", function() {
                e.revert()
            })
        }

        function _(e) {
            function t(t) {
                return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1
            }

            function n() {
                z["default"].removeClass(e.__closeButton, oe.CLASS_DRAG), z["default"].unbind(window, "mousemove", t), z["default"].unbind(window, "mouseup", n)
            }

            function o(o) {
                return o.preventDefault(), i = o.clientX, z["default"].addClass(e.__closeButton, oe.CLASS_DRAG), z["default"].bind(window, "mousemove", t), z["default"].bind(window, "mouseup", n), !1
            }
            var i = void 0;
            e.__resize_handle = document.createElement("div"), U["default"].extend(e.__resize_handle.style, {
                width: "6px",
                marginLeft: "-3px",
                height: "200px",
                cursor: "ew-resize",
                position: "absolute"
            }), z["default"].bind(e.__resize_handle, "mousedown", o), z["default"].bind(e.__closeButton, "mousedown", o), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
        }

        function p(e, t) {
            e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
        }

        function h(e, t) {
            var n = {};
            return U["default"].each(e.__rememberedObjects, function(o, i) {
                var r = {},
                    a = e.__rememberedObjectIndecesToControllers[i];
                U["default"].each(a, function(e, n) {
                    r[n] = t ? e.initialValue : e.getValue()
                }), n[i] = r
            }), n
        }

        function m(e) {
            for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t)
        }

        function b(e) {
            0 !== e.length && D["default"].call(window, function() {
                b(e)
            }), U["default"].each(e, function(e) {
                e.updateDisplay()
            })
        }
        var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            v = n(18),
            y = o(v),
            w = n(19),
            x = o(w),
            E = n(20),
            C = o(E),
            A = n(7),
            S = o(A),
            k = n(8),
            O = o(k),
            T = n(15),
            R = o(T),
            L = n(13),
            N = o(L),
            M = n(14),
            B = o(M),
            H = n(16),
            j = o(H),
            P = n(21),
            D = o(P),
            V = n(22),
            F = o(V),
            I = n(9),
            z = o(I),
            G = n(5),
            U = o(G),
            X = n(23),
            K = o(X);
        y["default"].inject(K["default"]);
        var Y = "dg",
            J = 72,
            W = 20,
            Q = "Default",
            q = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            }(),
            Z = void 0,
            $ = !0,
            ee = void 0,
            te = !1,
            ne = [],
            oe = function ie(e) {
                function t() {
                    var e = n.getRoot();
                    e.width += 1, U["default"].defer(function() {
                        e.width -= 1
                    })
                }
                var n = this,
                    o = e || {};
                this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), z["default"].addClass(this.domElement, Y), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], o = U["default"].defaults(o, {
                    autoPlace: !0,
                    width: ie.DEFAULT_WIDTH
                }), o = U["default"].defaults(o, {
                    resizable: o.autoPlace,
                    hideable: o.autoPlace
                }), U["default"].isUndefined(o.load) ? o.load = {
                    preset: Q
                } : o.preset && (o.load.preset = o.preset), U["default"].isUndefined(o.parent) && o.hideable && ne.push(this), o.resizable = U["default"].isUndefined(o.parent) && o.resizable, o.autoPlace && U["default"].isUndefined(o.scrollable) && (o.scrollable = !0);
                var r = q && "true" === localStorage.getItem(u(this, "isLocal")),
                    a = void 0;
                if (Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return o.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return o.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return o.autoPlace
                            }
                        },
                        preset: {
                            get: function() {
                                return n.parent ? n.getRoot().preset : o.load.preset
                            },
                            set: function(e) {
                                n.parent ? n.getRoot().preset = e : o.load.preset = e, m(this), n.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return o.width
                            },
                            set: function(e) {
                                o.width = e, p(n, e)
                            }
                        },
                        name: {
                            get: function() {
                                return o.name
                            },
                            set: function(e) {
                                o.name = e, titleRowName && (titleRowName.innerHTML = o.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return o.closed
                            },
                            set: function(e) {
                                o.closed = e, o.closed ? z["default"].addClass(n.__ul, ie.CLASS_CLOSED) : z["default"].removeClass(n.__ul, ie.CLASS_CLOSED), this.onResize(), n.__closeButton && (n.__closeButton.innerHTML = e ? ie.TEXT_OPEN : ie.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return o.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return r
                            },
                            set: function(e) {
                                q && (r = e, e ? z["default"].bind(window, "unload", a) : z["default"].unbind(window, "unload", a), localStorage.setItem(u(n, "isLocal"), e))
                            }
                        }
                    }), U["default"].isUndefined(o.parent)) {
                    if (o.closed = !1, z["default"].addClass(this.domElement, ie.CLASS_MAIN), z["default"].makeSelectable(this.domElement, !1), q && r) {
                        n.useLocalStorage = !0;
                        var l = localStorage.getItem(u(this, "gui"));
                        l && (o.load = JSON.parse(l))
                    }
                    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = ie.TEXT_CLOSED, z["default"].addClass(this.__closeButton, ie.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), z["default"].bind(this.__closeButton, "click", function() {
                        n.closed = !n.closed
                    })
                } else {
                    void 0 === o.closed && (o.closed = !0);
                    var s = document.createTextNode(o.name);
                    z["default"].addClass(s, "controller-name");
                    var d = i(n, s),
                        c = function(e) {
                            return e.preventDefault(), n.closed = !n.closed, !1
                        };
                    z["default"].addClass(this.__ul, ie.CLASS_CLOSED), z["default"].addClass(d, "title"), z["default"].bind(d, "click", c), o.closed || (this.closed = !1)
                }
                o.autoPlace && (U["default"].isUndefined(o.parent) && ($ && (ee = document.createElement("div"), z["default"].addClass(ee, Y), z["default"].addClass(ee, ie.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(ee), $ = !1), ee.appendChild(this.domElement), z["default"].addClass(this.domElement, ie.CLASS_AUTO_PLACE)), this.parent || p(n, o.width)), this.__resizeHandler = function() {
                    n.onResizeDebounced()
                }, z["default"].bind(window, "resize", this.__resizeHandler), z["default"].bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), z["default"].bind(this.__ul, "transitionend", this.__resizeHandler), z["default"].bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), o.resizable && _(this), a = function() {
                    q && "true" === localStorage.getItem(u(n, "isLocal")) && localStorage.setItem(u(n, "gui"), JSON.stringify(n.getSaveObject()))
                }, this.saveToLocalStorageIfPossible = a, o.parent || t()
            };
        oe.toggleHide = function() {
            te = !te, U["default"].each(ne, function(e) {
                e.domElement.style.display = te ? "none" : ""
            })
        }, oe.CLASS_AUTO_PLACE = "a", oe.CLASS_AUTO_PLACE_CONTAINER = "ac", oe.CLASS_MAIN = "main", oe.CLASS_CONTROLLER_ROW = "cr", oe.CLASS_TOO_TALL = "taller-than-window", oe.CLASS_CLOSED = "closed", oe.CLASS_CLOSE_BUTTON = "close-button", oe.CLASS_DRAG = "drag", oe.DEFAULT_WIDTH = 245, oe.TEXT_CLOSED = "Close settings", oe.TEXT_OPEN = "Open settings", oe._keydownHandler = function(e) {
            "text" === document.activeElement.type || e.which !== J && e.keyCode !== J || oe.toggleHide()
        }, z["default"].bind(window, "keydown", oe._keydownHandler, !1), U["default"].extend(oe.prototype, {
            add: function(e, t) {
                return s(this, e, t, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(e, t) {
                return s(this, e, t, {
                    color: !0
                })
            },
            remove: function(e) {
                this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
                var t = this;
                U["default"].defer(function() {
                    t.onResize()
                })
            },
            destroy: function() {
                this.autoPlace && ee.removeChild(this.domElement), z["default"].unbind(window, "keydown", oe._keydownHandler, !1), z["default"].unbind(window, "resize", this.__resizeHandler), this.saveToLocalStorageIfPossible && z["default"].unbind(window, "unload", this.saveToLocalStorageIfPossible)
            },
            addFolder: function(e) {
                if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                var t = {
                    name: e,
                    parent: this
                };
                t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                var n = new oe(t);
                this.__folders[e] = n;
                var o = i(this, n.domElement);
                return z["default"].addClass(o, "folder"), n
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            onResize: function() {
                var e = this.getRoot();
                if (e.scrollable) {
                    var t = z["default"].getOffset(e.__ul).top,
                        n = 0;
                    U["default"].each(e.__ul.childNodes, function(t) {
                        e.autoPlace && t === e.__save_row || (n += z["default"].getHeight(t))
                    }), window.innerHeight - t - W < n ? (z["default"].addClass(e.domElement, oe.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - W + "px") : (z["default"].removeClass(e.domElement, oe.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                }
                e.__resize_handle && U["default"].defer(function() {
                    e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
            },
            onResizeDebounced: U["default"].debounce(function() {
                this.onResize()
            }, 200),
            remember: function() {
                if (U["default"].isUndefined(Z) && (Z = new F["default"], Z.domElement.innerHTML = x["default"]), this.parent) throw new Error("You can only call remember on a top level GUI.");
                var e = this;
                U["default"].each(Array.prototype.slice.call(arguments), function(t) {
                    0 === e.__rememberedObjects.length && f(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t)
                }), this.autoPlace && p(this, this.width)
            },
            getRoot: function() {
                for (var e = this; e.parent;) e = e.parent;
                return e
            },
            getSaveObject: function() {
                var e = this.load;
                return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = h(this)), e.folders = {}, U["default"].each(this.__folders, function(t, n) {
                    e.folders[n] = t.getSaveObject()
                }), e
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = h(this), r(this, !1), this.saveToLocalStorageIfPossible()
            },
            saveAs: function(e) {
                this.load.remembered || (this.load.remembered = {}, this.load.remembered[Q] = h(this, !0)), this.load.remembered[e] = h(this), this.preset = e, d(this, e, !0), this.saveToLocalStorageIfPossible()
            },
            revert: function(e) {
                U["default"].each(this.__controllers, function(t) {
                    this.getRoot().load.remembered ? l(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
                }, this), U["default"].each(this.__folders, function(e) {
                    e.revert(e)
                }), e || r(this.getRoot(), !1)
            },
            listen: function(e) {
                var t = 0 === this.__listening.length;
                this.__listening.push(e), t && b(this.__listening)
            },
            updateDisplay: function() {
                U["default"].each(this.__controllers, function(e) {
                    e.updateDisplay()
                }), U["default"].each(this.__folders, function(e) {
                    e.updateDisplay()
                })
            }
        }), e.exports = oe
    }, function(e, t) {
        "use strict";
        e.exports = {
            load: function(e, t) {
                var n = t || document,
                    o = n.createElement("link");
                o.type = "text/css", o.rel = "stylesheet", o.href = e, n.getElementsByTagName("head")[0].appendChild(o)
            },
            inject: function(e, t) {
                var n = t || document,
                    o = document.createElement("style");
                o.type = "text/css", o.innerHTML = e;
                var i = n.getElementsByTagName("head")[0];
                try {
                    i.appendChild(o)
                } catch (r) {}
            }
        }
    }, function(e, t) {
        e.exports = "<div id=dg-save class=\"dg dialogue\"> Here's the new load parameter for your <code>GUI</code>'s constructor: <textarea id=dg-new-constructor></textarea> <div id=dg-save-locally> <input id=dg-local-storage type=checkbox /> Automatically save values to <code>localStorage</code> on exit. <div id=dg-local-explain>The values saved to <code>localStorage</code> will override those passed to <code>dat.GUI</code>'s constructor. This makes it easier to work incrementally, but <code>localStorage</code> is fragile, and your friends may not see the same values you do. </div> </div> </div>"
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(10),
            r = o(i),
            a = n(13),
            l = o(a),
            s = n(14),
            u = o(s),
            d = n(11),
            c = o(d),
            f = n(15),
            _ = o(f),
            p = n(8),
            h = o(p),
            m = n(5),
            b = o(m),
            g = function(e, t) {
                var n = e[t];
                return b["default"].isArray(arguments[2]) || b["default"].isObject(arguments[2]) ? new r["default"](e, t, arguments[2]) : b["default"].isNumber(n) ? b["default"].isNumber(arguments[2]) && b["default"].isNumber(arguments[3]) ? b["default"].isNumber(arguments[4]) ? new u["default"](e, t, arguments[2], arguments[3], arguments[4]) : new u["default"](e, t, arguments[2], arguments[3]) : b["default"].isNumber(arguments[4]) ? new l["default"](e, t, {
                    min: arguments[2],
                    max: arguments[3],
                    step: arguments[4]
                }) : new l["default"](e, t, {
                    min: arguments[2],
                    max: arguments[3]
                }) : b["default"].isString(n) ? new c["default"](e, t) : b["default"].isFunction(n) ? new _["default"](e, t, "") : b["default"].isBoolean(n) ? new h["default"](e, t) : null
            };
        t["default"] = g
    }, function(e, t) {
        "use strict";

        function n(e) {
            setTimeout(e, 1e3 / 60)
        }
        t.__esModule = !0, t["default"] = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || n
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        t.__esModule = !0;
        var r = n(9),
            a = o(r),
            l = n(5),
            s = o(l),
            u = function() {
                function e() {
                    i(this, e), this.backgroundElement = document.createElement("div"), s["default"].extend(this.backgroundElement.style, {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        top: 0,
                        left: 0,
                        display: "none",
                        zIndex: "1000",
                        opacity: 0,
                        WebkitTransition: "opacity 0.2s linear",
                        transition: "opacity 0.2s linear"
                    }), a["default"].makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), s["default"].extend(this.domElement.style, {
                        position: "fixed",
                        display: "none",
                        zIndex: "1001",
                        opacity: 0,
                        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                        transition: "transform 0.2s ease-out, opacity 0.2s linear"
                    }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                    var t = this;
                    a["default"].bind(this.backgroundElement, "click", function() {
                        t.hide()
                    })
                }
                return e.prototype.show = function() {
                    var e = this;
                    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), s["default"].defer(function() {
                        e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                    })
                }, e.prototype.hide = function t() {
                    var e = this,
                        t = function n() {
                            e.domElement.style.display = "none", e.backgroundElement.style.display = "none", a["default"].unbind(e.domElement, "webkitTransitionEnd", n), a["default"].unbind(e.domElement, "transitionend", n), a["default"].unbind(e.domElement, "oTransitionEnd", n)
                        };
                    a["default"].bind(this.domElement, "webkitTransitionEnd", t), a["default"].bind(this.domElement, "transitionend", t), a["default"].bind(this.domElement, "oTransitionEnd", t), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
                }, e.prototype.layout = function() {
                    this.domElement.style.left = window.innerWidth / 2 - a["default"].getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - a["default"].getHeight(this.domElement) / 2 + "px"
                }, e
            }();
        t["default"] = u
    }, function(e, t, n) {
        t = e.exports = n(24)(), t.push([e.id, ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1!important}.dg.main .close-button.drag,.dg.main:hover .close-button{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;transition:opacity .1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save>ul{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height .1s ease-out;transition:height .1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid transparent}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.boolean,.dg .cr.boolean *,.dg .cr.function,.dg .cr.function *,.dg .cr.function .property-name{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco,monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px Lucida Grande,sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid hsla(0,0%,100%,.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.boolean:hover,.dg .cr.function:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}", ""])
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var o = {}, i = 0; i < this.length; i++) {
                    var r = this[i][0];
                    "number" == typeof r && (o[r] = !0)
                }
                for (i = 0; i < t.length; i++) {
                    var a = t[i];
                    "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    }])
});

// trailController.js
/* jshint esversion: 6 */
var TrailController = pc.createScript('trailController');


TrailController.prototype.initialize = function() {
    this.app.on(EventTypes.LEVEL_RESET, this.resetLevel, this);
    this.app.on(EventTypes.BUBBLE_SHOT, this.updateColor, this);

    this.bubbleTrail = this.entity.findByName('BubbleTrail');
    this.bubbleTrail.particlesystem.play();
};


TrailController.prototype.update = function(dt) {
    if (this.entity.bubblesContainer.children.length > 0) {
        const bubble = this.entity.bubblesContainer.children[this.entity.bubblesContainer.children.length - 1];
        if (bubble.isBubble()) {
            this.bubbleTrail.setPosition(bubble.getPosition());
        } else {
            this.resetTrailPosition();
        }
    } else {
        this.resetTrailPosition();
    }
};


TrailController.prototype.updateColor = function(colorID) {
    const color = this.app.colorsStorage.getTrailColor(colorID);

    this.bubbleTrail.particlesystem.colorGraph.curves[0].keys[0][1] = color.r;
    this.bubbleTrail.particlesystem.colorGraph.curves[1].keys[0][1] = color.g;
    this.bubbleTrail.particlesystem.colorGraph.curves[2].keys[0][1] = color.b;
    this.bubbleTrail.particlesystem.rebuild();
};


TrailController.prototype.resetTrailPosition = function() {
    this.bubbleTrail.setPosition(0, -50, 0);
};

var ScoreManager = pc.createScript("scoreManager");
ScoreManager.prototype.initialize = function() {
    ScoreManager.instance = this, this.currentScores = 0, this.maxScores = LocalStorageController.getSavedValue("maxScores") || 0, this.prevMaxScores = this.maxScores, this.levelTime = 0, this.app.on(EventTypes.ADD_SCORES, this.addScores, this), this.app.on(EventTypes.RESET_SCORES, this.resetScores, this)
}, ScoreManager.prototype.addScores = function(e, r) {
    this.currentScores += e, this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores), this.maxScores < this.currentScores && (this.maxScores = this.currentScores, this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores))
}, ScoreManager.prototype.resetScores = function() {
    this.levelTime = 0, this.currentScores = 0, this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores), this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores)
}, ScoreManager.prototype.getScores = function() {
    return this.currentScores
}, ScoreManager.prototype.getMaxScores = function() {
    return this.maxScores
}, ScoreManager.prototype.getPrevMaxScores = function() {
    return this.prevMaxScores
}, ScoreManager.prototype.setScores = function(e) {
    this.currentScores = e, this.app.fire(EventTypes.SCORES_CHANGED, this.currentScores)
}, ScoreManager.prototype.setPrevMaxScores = function(e) {
    this.prevMaxScores = e
}, ScoreManager.prototype.setMaxScores = function(e) {
    this.maxScores = e, this.prevMaxScores = e, this.app.fire(EventTypes.MAX_SCORES_CHANGED, this.maxScores)
}, ScoreManager.prototype.increaseLevelTime = function(e) {
    this.levelTime += e
}, ScoreManager.prototype.getLevelTime = function() {
    return this.levelTime
}, ScoreManager.prototype.update = function(e) {};
var ScoresCounter = pc.createScript("scoresCounter");
ScoresCounter.prototype.initialize = function() {
    this.scoresText = this.entity.findByName("ScoresText"), this.scoresValue = 0, this.app.on(EventTypes.SHOW_SCORES_TEXT, this.show, this), this.app.on(EventTypes.HIDE_SCORES_TEXT, this.hide, this), this.app.on(EventTypes.SCORES_CHANGED, this.updateScoresText, this)
}, ScoresCounter.prototype.update = function(e) {}, ScoresCounter.prototype.show = function(e) {
    this.scoresText.enabled = !0, this.scoresText.setLocalScale(0, 0, 0), this.scoresText.tween(this.scoresText.getLocalScale()).to(new pc.Vec3(1, 1, 1), .35, pc.BackOut).delay(e).start()
}, ScoresCounter.prototype.hide = function() {
    this.scoresText.enabled = !1
}, ScoresCounter.prototype.updateScoresText = function(e) {
    Utils.tweenText(this.scoresText, this.scoresValue, e, .25, 0, pc.SineOut, !0), this.scoresValue = e
}; // mainMenu.js
/* jshint esversion: 6 */
var MainMenu = pc.createScript('mainMenu');

MainMenu.prototype.initialize = function() {
    this.entity.headingContainer = this.entity.findByName("HeadingContainer");
    this.entity.headingIcon = this.entity.findByName("HeadingIcon");
    this.entity.handContainer = this.entity.findByName("HandContainer");
    this.entity.tutorialHand = this.entity.handContainer.findByName('TutorialHand');
    this.entity.clickZone = this.entity.handContainer.findByName('ClickZone');

    this.app.on(EventTypes.PRELOADER_FINISHED, () => {
        if (!this.preloaderFinsihed) {
            console.log('Preloader finished!');
            this.preloaderFinsihed = true;
            this.assignAction(this.entity.clickZone, this.playPressed, this);
        }
    });

    /* show method */
    this.entity.show = function() {
        this.enabled = true;

        if (window.famobi_analytics) {
            window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_HOME);
        }

        const baseDelay = 0.5;

        /* tween heading icon */
        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween =
            this.headingIcon.tween(this.headingIcon.element)
            .to({
                opacity: 1.0
            }, 0.5, pc.SineIn)
            .delay(baseDelay).start();

        this.headingContainer.setLocalScale(0.6, 0.6, 0.6);
        var headingAppearingScaleTween =
            this.headingContainer.tween(this.headingContainer.getLocalScale())
            .to(new pc.Vec3(1.0, 1.0, 1.0), 0.5, pc.BackOut)
            .delay(baseDelay).start();


        this.tutorialHand.element.opacity = 0.0;
        this.tutorialHand.tween(this.tutorialHand.element)
            .to({
                opacity: 1.0
            }, 0.55, pc.SineIn)
            .delay(baseDelay + 0.35)
            .start();

        this.tutorialHand.tween(this.tutorialHand.getLocalScale())
            .to(new pc.Vec3(1.25, 1.25, 1.25), 0.55, pc.SineInOut)
            .delay(baseDelay + 0.35)
            .yoyo(true)
            .repeat(100000)
            .start();

    }.bind(this.entity);


    /* hide method */
    this.entity.hide = function() {

        /* tween heading icon */
        this.headingIcon.element.opacity = 1.0;
        var headingAppearingTween =
            this.headingIcon.tween(this.headingIcon.element)
            .to({
                opacity: 0.0
            }, 0.35, pc.SineOut)
            .start();

        var position = this.headingIcon.getLocalPosition();
        this.headingIcon.tween(this.headingIcon.getLocalPosition())
            .to(new pc.Vec3(position.x, position.y + 50, position.z), 0.35, pc.SineIn)
            .start();

        this.tutorialHand.tween(this.tutorialHand.element)
            .to({
                opacity: 0.0
            }, 0.25, pc.Linear)
            .on('complete', () => {
                this.enabled = false;
            })
            .start();

    }.bind(this.entity);


    this.entity.show();
};

MainMenu.prototype.update = function(dt) {

};

MainMenu.prototype.assignAction = function(button, handler, handlerContext) {
    if (this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } else if (this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    } else {
        console.warn("MainMenu.assignAction - either touch or mouse are not detected");
    }
};

MainMenu.prototype.playPressed = function() {
    this.entity.clickZone.enabled = false;
    WindowManager.startGameplay();

    this.app.fire(EventTypes.FIRST_LAUCH);
    // this.entity.delayedCall(100, () => this.app.fire(EventTypes.MEASURE_PERFORMANCE));
};


// brandingImage.js
/* jshint esversion: 6 */
var BrandingImage = pc.createScript('brandingImage');

BrandingImage.prototype.initialize = function() {

    this.entity.element.opacity = 0.0;

    if (window.famobi) {

        var self = this;
        this.app.loader.getHandler("texture").crossOrigin = "anonymous";

        var asset = new pc.Asset("brandingImage", "texture", {
            url: window.famobi.getBrandingButtonImage()
        });

        this.app.assets.add(asset);

        asset.on("error", function(message) {
            console.log("Branding image loading failed: ", message);
        });

        asset.on("load", function(asset) {
            var material = self.entity.element.texture = asset.resource;
            self.entity.element.opacity = 1;
            self.assignAction(self.entity, self.brandingPressed, self);
        });

        this.app.assets.load(asset);
    }

    this.app.on(EventTypes.FIRST_LAUCH, this.handlePlayPressed, this);
};

BrandingImage.prototype.handlePlayPressed = function() {
    const position = this.entity.getLocalPosition().clone();
    this.entity.tween(this.entity.getLocalPosition())
        .to(new pc.Vec3(position.x, position.y - 200, position.z), 0.35, pc.SineOut)
        .start();

    this.entity.tween(this.entity.element)
        .to({
            opacity: 0
        }, 0.35, pc.Linear)
        .start()
        .on('complete', () => this.entity.enabled = false);
};

BrandingImage.prototype.assignAction = function(button, handler, handlerContext) {
    if (this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } else if (this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    } else {
        console.warn("BrandingImage.assignAction - either touch or mouse are not detected");
    }
};

BrandingImage.prototype.update = function(dt) {

};

BrandingImage.prototype.brandingPressed = function() {
    if (window.famobi) {
        window.famobi.openBrandingLink();
    }
};


var WindowManager = pc.createScript("windowManager");
WindowManager.prototype.initialize = function() {
    WindowManager.app = this.app, WindowManager.resultsWindow = this.app.root.findByName("UIContainer").findByName("ResultsWindow"), WindowManager.gameplayUI = this.app.root.findByName("UIContainer").findByName("GameplayUI"), WindowManager.settingsPanel = this.app.root.findByName("UIContainer").findByName("SettingsPanel"), WindowManager.mainMenu = this.app.root.findByName("UIContainer").findByName("MainMenu")
}, WindowManager.prototype.update = function(n) {}, WindowManager.hideAll = function() {
    WindowManager.settingsPanel.hide(), WindowManager.mainMenu.hide()
}, WindowManager.showResults = function(n) {
    WindowManager.resultsWindow.show(n)
}, WindowManager.startGameplay = function() {
    WindowManager.mainMenu.hide(), WindowManager.gameplayUI.show(), window.famobi_analytics && window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVEL)
}, WindowManager.exitGameplay = function() {
    WindowManager.hideAll(), WindowManager.mainMenu.show(), WindowManager.settingsPanel.show()
}, WindowManager.hasOpenedWindows = function() {
    return WindowManager.resultsWindow.enabled || WindowManager.defeatWindow.enabled || WindowManager.powerupWindow.enabled
};
var GameplayUi = pc.createScript("gameplayUi");
GameplayUi.prototype.initialize = function() {
    this.app.on(EventTypes.LEVEL_RESET, this.hideUI, this), this.app.on(EventTypes.SHOW_UI, this.showUI, this), this.entity.show = function() {}.bind(this.entity), this.entity.hide = function() {}.bind(this.entity), this.entity.hide()
}, GameplayUi.prototype.hideUI = function(t) {
    this.app.fire(EventTypes.HIDE_SCORES_TEXT), this.app.fire(EventTypes.HIDE_BUBBLES_COUNTER), this.app.fire(EventTypes.HIDE_POWERUP_BUTTON)
}, GameplayUi.prototype.showUI = function(t) {
    this.app.fire(EventTypes.SHOW_SCORES_TEXT, .95), this.app.fire(EventTypes.SHOW_BUBBLES_COUNTER, .65), this.app.fire(EventTypes.SHOW_POWERUP_BUTTON, 1.25)
}, GameplayUi.prototype.update = function(t) {}; // localStorageController.js
/* jshint esversion: 6 */
var LocalStorageController = pc.createScript('localStorageController');

LocalStorageController.prototype.initialize = function() {
    LocalStorageController.app = this.app;
    LocalStorageController.currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;

    this.app.on(EventTypes.SAVE_APP, () => LocalStorageController.saveData(), this);

    LocalStorageController.loadData();
};

LocalStorageController.prototype.update = function(dt) {

};

LocalStorageController.prepareSaveData = function() {
    LocalStorageController.lastSaveData = {
        maxScores: ScoreManager.instance ? ScoreManager.instance.getMaxScores() : 0,
        qualityIndex: ScaleManager.qualityIndex,
        audioEnabled: SoundController.soundStateLoaded ? SoundController.audioEnabled : true,
        tutorialCompleted: TutorialController.TUTORIAL_COMPLETED || false
    };
    return LocalStorageController.lastSaveData;
};

LocalStorageController.getSlotKey = function() {
    return Constants.GAME_NAME + Constants.GAME_VERSION;
};

LocalStorageController.saveData = function(immediately) {
    console.log('Saving progress...');
    if (immediately) {
        var data = LocalStorageController.prepareSaveData();
        LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(data));
    } else {
        setTimeout(() => {
            var data = LocalStorageController.prepareSaveData();
            LocalStorageController.currentLocalStorage.setItem(LocalStorageController.getSlotKey(), JSON.stringify(data));
        }, 50);
    }
};

LocalStorageController.loadData = function() {
    var data = LocalStorageController.currentLocalStorage.getItem(LocalStorageController.getSlotKey());
    var dataLoaded = false;

    if (data) {
        try {
            data = JSON.parse(data);
            dataLoaded = true;
        } catch (e) {
            data = LocalStorageController.prepareSaveData();
            LocalStorageController.saveData(true);
        }
    } else {
        data = LocalStorageController.prepareSaveData();
        LocalStorageController.saveData(true);
    }

    LocalStorageController.lastSaveData = data;

    console.info('Saved data loaded');
};

LocalStorageController.getSavedValue = function(key) {
    if (LocalStorageController.lastSaveData) {
        return LocalStorageController.lastSaveData[key];
    } else {
        console.warn(`getSavedValue: No saved value with key '${key}' was loaded`);
    }
};



// scoresEffectManager.js
/* jshint esversion: 6 */
var ScoresEffectManager = pc.createScript('scoresEffectManager');

ScoresEffectManager.attributes.add('cacheSize', {
    description: 'num scores in cache',
    type: 'number',
    default: 15
});

ScoresEffectManager.attributes.add('maxScoresOnScreen', {
    description: 'max scores on screen',
    type: 'number',
    default: 15
});

ScoresEffectManager.prototype.initialize = function() {
    this.particleCache = [];
    this.activeParticles = [];
    this.assetsLibrary = this.app.root.findByName('Library');
    this.camera = this.app.root.findByName('Camera');
    this.scoresEffectParticle = this.assetsLibrary.findByName("ScoresEarnedText");
    this.prepareCache();
    this.app.on(EventTypes.SHOW_SCORES_EFFECT, this.addScoresEffect, this);
    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
};

ScoresEffectManager.prototype.reset = function() {
    for (let i = this.activeParticles.length - 1; i > -1; i--) {
        this.resetParticle(this.activeParticles[i]);
    }
};

ScoresEffectManager.prototype.update = function(dt) {
    this.activeParticles.forEach(particle => this.updateParticle(particle, dt));
};

ScoresEffectManager.prototype.updateParticle = function(particle, dt) {
    particle.lifeTime += dt;
    if (particle.lifeTime >= particle.duration) {
        this.resetParticle(particle);
    } else {
        particle.setLocalEulerAngles(0, this.camera.script.orbitCamera._yaw, 0);
    }
};

ScoresEffectManager.prototype.addScoresEffect = function(value, position, localPosition) {
    if (this.activeParticles.length > this.maxScoresOnScreen) {
        this.resetParticle(this.activeParticles[0]);
    }
    this.addParticle(value, position, localPosition);
};

ScoresEffectManager.prototype.addParticle = function(value, position, color) {
    let particle;

    if (this.particleCache.length > 0) {
        particle = this.particleCache.splice(this.particleCache.length - 1, 1)[0];
    } else {
        particle = this.scoresEffectParticle.clone();
        this.entity.addChild(particle);
    }


    if (particle.scaleTween && particle.scaleTween.playing) {
        particle.scaleTween.stop();
    }

    if (particle.opacityTween && particle.opacityTween.playing) {
        particle.opacityTween.stop();
    }

    const initialWorldOriginDistance = position.length();
    const speed = new pc.Vec2(position.x, position.z).normalize();
    const initialPosition = position.clone().add(new pc.Vec3(speed.x, 0, speed.y));

    particle.enabled = true;
    particle.completed = false;
    particle.element.text = '+' + value;
    particle.element.opacity = 0.9;
    particle.setPosition(initialPosition.x, initialPosition.y + 0.4, initialPosition.z);
    particle.setLocalScale(0.02 + pc.math.clamp(value, 1, 20) * 0.0004, 0.02 + pc.math.clamp(value, 1, 20) * 0.0004, 0.02 + pc.math.clamp(value, 1, 20) * 0.0004);
    particle.duration = pc.math.random(0.75, 0.9);
    particle.lifeTime = 0;

    particle.element.color = new pc.Color().lerp(color, new pc.Color(1, 1, 1), 0.2);
    particle.element.shadowColor = new pc.Color(0, 0, 0, 0.75);

    particle.scaleTween = particle.tween(particle.getLocalPosition())
        .to(new pc.Vec3(initialPosition.x + speed.x * pc.math.random(0.15, 0.4), initialPosition.y + pc.math.random(2.0, 3.0), initialPosition.z + speed.y * pc.math.random(0.15, 0.4)), particle.duration, pc.SineInOut)
        .start();

    particle.opacityTween = particle.tween(particle.element)
        .to({
            opacity: 0
        }, particle.duration * 0.98, pc.SineIn)
        .on('update', () => {
            const shadowColor = particle.element.shadowColor.clone();
            shadowColor.a = particle.element.opacity;
            particle.element.shadowColor = shadowColor;
        })
        .start();

    this.activeParticles.push(particle);
};


ScoresEffectManager.prototype.resetParticle = function(particle) {
    const index = this.activeParticles.indexOf(particle);
    if (index != -1) {
        this.activeParticles.splice(index, 1);
    }
    particle.enabled = false;
    particle.setPosition(0, -50, 0);
    this.particleCache.push(particle);
};


ScoresEffectManager.prototype.prepareCache = function() {
    this.particleCache = [];
    const basicParticle = this.scoresEffectParticle;
    for (let i = 0; i < this.cacheSize; i++) {
        const particle = basicParticle.clone();
        particle.enabled = false;
        particle.setPosition(0, -50, 0);
        particle.completed = true;
        this.entity.addChild(particle);
        this.particleCache.push(particle);
    }

    console.log("Prepared score effects");
};

// resultsWindow.js
/* jshint esversion: 6 */
var ResultsWindow = pc.createScript('resultsWindow');

ResultsWindow.attributes.add('victoryIcon', {
    type: 'asset',
    assetType: 'texture'
});

ResultsWindow.attributes.add('defeatIcon', {
    type: 'asset',
    assetType: 'texture'
});

ResultsWindow.prototype.initialize = function() {
    this.entity.headingContainer = this.entity.findByName("HeadingContainer");
    this.entity.headingIcon = this.entity.headingContainer.findByName("HeadingIcon");
    this.entity.leavesLeft = this.entity.headingContainer.findByName("LeavesLeft");
    this.entity.leavesRight = this.entity.headingContainer.findByName("LeavesRight");
    this.entity.buttonNext = this.entity.findByName("ButtonNext");
    this.entity.background = this.entity.findByName("Background");
    this.entity.scoreGroup = this.entity.findByName("ScoreGroup");
    this.entity.maxScoreGroup = this.entity.findByName("MaxScoreGroup");
    this.entity.timeGroup = this.entity.findByName("TimeGroup");
    this.entity.newBestScoreIcon = this.entity.maxScoreGroup.findByName("NewBestScoreIcon");
    this.entity.scoreText = this.entity.scoreGroup.findByName("Text");
    this.entity.maxScoreText = this.entity.maxScoreGroup.findByName("Text");
    this.entity.timeText = this.entity.timeGroup.findByName("Text");

    this.assignAction(this.entity.buttonNext, this.nextPressed, this);

    const scriptContext = this;

    /* show method */
    this.entity.show = function(success) {
        this.enabled = true;

        scriptContext.app.fire(EventTypes.SAVE_APP);
        scriptContext.app.fire(EventTypes.PLAY_AUDIO, success ? "results" : "defeat");

        if (scriptContext.buttonNextTween && scriptContext.buttonNextTween.playing) {
            scriptContext.buttonNextTween.stop();
        }

        this.buttonNext.setLocalScale(0, 0, 0);
        this.timeText.element.text = '' + Utils.humanizeTime(ScoreManager.instance.getLevelTime());

        if (success) {
            ApiController.trackStats('level_complete_time', ScoreManager.instance.getLevelTime());
        } else {
            ApiController.trackStats('level_lost_time', ScoreManager.instance.getLevelTime());
        }


        var showButtons = (delay) => {
            /* tween buttons */
            scriptContext.buttonNextTween = this.buttonNext
                .tween(this.buttonNext.getLocalScale())
                .to(new pc.Vec3(1, 1, 1), 0.5, pc.BackOut)
                .delay(delay)
                .start();
        };

        if (window.famobi_analytics) {
            window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVELRESULT);
            setTimeout(() => {
                Promise.all([
                    window.famobi_analytics.trackEvent(
                        success ? "EVENT_LEVELSUCCESS" : "EVENT_LEVELFAIL",
                        success ? {
                            levelName: ''
                        } : {
                            levelName: '',
                            reason: 'dead'
                        }
                    ),
                    window.famobi.showInterstitialAd(),
                    window.famobi_analytics.trackEvent(
                        "EVENT_LEVELSCORE", {
                            levelName: '',
                            levelScore: ScoreManager.instance.getScores()
                        }
                    ),
                ]).then(() => showButtons(1.2), () => showButtons(1.2));
            }, 750);
        } else {
            showButtons(1.85);
        }

        /* tween background */
        this.background.element.opacity = 0.0;
        this.background.tween(this.background.element)
            .to({
                opacity: 0.94
            }, 0.25, pc.Linear)
            .start();


        /* tween heading icon */
        if (success) {
            this.headingIcon.element.textureAsset = scriptContext.victoryIcon.id;
        } else {
            this.headingIcon.element.textureAsset = scriptContext.defeatIcon.id;
        }

        this.headingIcon.element.opacity = 0.0;
        var headingAppearingTween =
            this.headingIcon.tween(this.headingIcon.element)
            .to({
                opacity: 1
            }, 0.5, pc.Linear)
            .delay(0.25);

        this.headingContainer.setLocalPosition(0, -160, 0);
        var headingMovingTween =
            this.headingContainer.tween(this.headingContainer.getLocalPosition())
            .to(new pc.Vec3(0, 0, 0), 0.9, pc.SineOut)
            .delay(0.2);

        headingAppearingTween.chain(headingMovingTween).start();

        this.headingContainer.setLocalScale(0.4, 0.4, 0.4);
        var headingAppearingScaleTween =
            this.headingContainer.tween(this.headingContainer.getLocalScale())
            .to(new pc.Vec3(1.25, 1.25, 1.25), 0.55, pc.BackOut)
            .delay(0.25);

        const headingContainerTargetScale = ScaleManager.mobileLandscapeMode ? new pc.Vec3(0.9, 0.9, 0.9) : new pc.Vec3(1, 1, 1);
        var headingMovingScaleTween = this.headingContainer.tween(this.headingContainer.getLocalScale())
            .to(headingContainerTargetScale, 0.9, pc.SineOut)
            .delay(0.1);

        headingAppearingScaleTween.chain(headingMovingScaleTween).start();


        this.leavesLeft.element.opacity = 0.0;
        this.leavesLeft.tween(this.leavesLeft.element)
            .to({
                opacity: 1
            }, 1.0, pc.SineOut)
            .delay(1.1)
            .start();

        this.leavesLeft.setLocalPosition(0, -50, 0);
        this.leavesLeft.tween(this.leavesLeft.getLocalPosition())
            .to(new pc.Vec3(-170, 10, 1), 0.85, pc.BackOut)
            .delay(1.1)
            .start();


        this.leavesRight.element.opacity = 0.0;
        this.leavesRight.tween(this.leavesRight.element)
            .to({
                opacity: 1
            }, 1.0, pc.SineOut)
            .delay(1.2)
            .start();

        this.leavesRight.setLocalPosition(0, -50, 0);
        this.leavesRight.tween(this.leavesRight.getLocalPosition())
            .to(new pc.Vec3(170, 10, 1), 0.85, pc.BackOut)
            .delay(1.2)
            .start();





        /* tween text groups */

        this.timeGroup.setLocalScale(0, 0, 0);
        this.timeGroup.tween(this.timeGroup.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
            .delay(1.35)
            .start();

        this.scoreGroup.setLocalScale(0, 0, 0);
        this.scoreGroup.tween(this.scoreGroup.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
            .delay(1.5)
            .start();

        this.maxScoreGroup.setLocalScale(0, 0, 0);
        this.maxScoreGroup.tween(this.maxScoreGroup.getLocalScale())
            .to(new pc.Vec3(1, 1, 1), 0.45, pc.BackOut)
            .delay(1.65)
            .start();

        /* tween texts */
        const textTweenDelay = 1.75;
        if (ScoreManager.instance.getScores() > 0) {
            this.delayedCall(textTweenDelay * 1000, () => scriptContext.app.fire(EventTypes.UNMUTE_SOUND, "counting", 0.9));
            this.delayedCall((textTweenDelay + 1.0) * 1000, () => scriptContext.app.fire(EventTypes.MUTE_SOUND, "counting"));
        }

        Utils.tweenText(this.scoreText, 0, ScoreManager.instance.getScores(), 0.75, textTweenDelay, pc.SineOut, true);
        Utils.tweenText(this.maxScoreText, ScoreManager.instance.getPrevMaxScores(), ScoreManager.instance.getMaxScores(), 0.75, textTweenDelay + 0.25, pc.SineOut, true);
        ScoreManager.instance.setPrevMaxScores(ScoreManager.instance.getMaxScores());

        this.newBestScoreIcon.element.opacity = 0;
        this.newBestScoreIcon.setLocalScale(2, 2, 2);
        if (ScoreManager.instance.getScores() === ScoreManager.instance.getMaxScores()) {

            this.newBestScoreIcon.tween(this.newBestScoreIcon.element)
                .to({
                    opacity: 1
                }, 0.3, pc.Linear)
                .delay(textTweenDelay + 1)
                .on('update', () => {
                    this.newBestScoreIcon.setLocalPosition(this.maxScoreText.element.width + 66, 0, 0);
                })
                .start();

            this.delayedCall((textTweenDelay + 1) * 1000, () => {
                if (this.enabled) {
                    scriptContext.app.fire(EventTypes.PLAY_AUDIO, 'newBest');
                }
            });

            this.newBestScoreIcon.tween(this.newBestScoreIcon.getLocalScale())
                .to(new pc.Vec3(1, 1, 1), 0.42, pc.BackOut)
                .delay(textTweenDelay + 1)
                .start();
        }

    }.bind(this.entity);


    /* hide method */
    this.entity.hide = function() {
        this.enabled = false;
    }.bind(this.entity);

    this.entity.hide();
};

ResultsWindow.prototype.assignAction = function(button, handler, handlerContext) {
    if (this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } else if (this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    } else {
        console.warn("ResultsWindow.assignAction - either touch or mouse are not detected");
    }
};

ResultsWindow.prototype.update = function(dt) {

};

ResultsWindow.prototype.nextPressed = function() {
    TransitionScreen.instance.transitionTo(() => {
        this.entity.hide();
        this.app.fire(EventTypes.RESET_GAME);
    });
};

// tutorialController.js
/* jshint esversion: 6 */
var TutorialController = pc.createScript('tutorialController');

TutorialController.TUTORIAL_COMPLETED = false;
TutorialController.TUTORIAL_ACTIVE = false;
TutorialController._currentStep = undefined;

TutorialController.prototype.initialize = function() {
    this.app.on(EventTypes.START_TUTORIAL, this.startTutorial, this);
    this.app.on(EventTypes.SHOOT, this.dispatchBallShoot, this);

    TutorialController._currentStep = undefined;
    this.camera = this.app.root.findByName('Camera');

    this.tutorialHandContainer = this.entity.findByName('TutorialHandContainer');
    this.tutorialHand = this.entity.findByName('TutorialHand');

};


TutorialController.prototype.update = function(dt) {
    if (TutorialController.TUTORIAL_ACTIVE && TutorialController._currentStep === 1) {
        if (Math.abs(this.camera.script.orbitCamera.yaw - this.startCameraYaw) > 45) {
            this.showNextStep();
        }
    }
};


TutorialController.prototype.startTutorial = function() {
    TutorialController.TUTORIAL_COMPLETED = LocalStorageController.getSavedValue('tutorialCompleted');
    if (TutorialController.TUTORIAL_COMPLETED) {
        return;
    }
    if (!TutorialController.TUTORIAL_ACTIVE) {
        TutorialController.TUTORIAL_ACTIVE = true;
        TutorialController._currentStep = undefined;
        setTimeout(() => {
            TutorialController._currentStep = 0;
            this.showNextStep();
        }, 1900);
    }
};


TutorialController.prototype.showNextStep = function() {
    if (TutorialController._currentStep === 0) {
        this.startCameraYaw = this.camera.script.orbitCamera.yaw;
        TutorialController._currentStep = 1;
        this.showCameraRotatingTutorial();
    } else if (TutorialController._currentStep === 1) {
        TutorialController._currentStep = 2;
        this.playHandShakingTween();
    } else {
        this.finishTutorial();
    }
};


TutorialController.prototype.finishTutorial = function() {
    console.log('TUTORIAL COMPLETED');

    this.handAlphaDisappearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({
            opacity: 0
        }, 0.15, pc.Linear)
        .on('complete', () => this.tutorialHand.enabled = false)
        .start();

    TutorialController.TUTORIAL_COMPLETED = true;
    TutorialController.TUTORIAL_ACTIVE = false;
    this.app.fire(EventTypes.SAVE_APP);
};


TutorialController.prototype.dispatchBallShoot = function() {
    if (TutorialController.TUTORIAL_ACTIVE && TutorialController._currentStep === 2) {
        this.showNextStep();
    }
};


TutorialController.prototype.showCameraRotatingTutorial = function() {
    this.stopCameraRotatingTween();
    this.stopHandShakingTween();

    this.tutorialHand.enabled = true;
    this.tutorialHand.reparent(this.tutorialHandContainer);
    this.tutorialHand.setLocalPosition(-120, -90, 0);

    this.tutorialHandContainer.setLocalScale(1, 1, 1);

    this.cameraRotatingTween = this.tutorialHand.tween(this.tutorialHand.getLocalPosition())
        .to(new pc.Vec3(120, -90, 0), 1.35, pc.QuadraticInOut);

    this.handAlphaAppearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({
            opacity: 1
        }, 0.2, pc.Linear, 0.15);

    this.handAlphaDisappearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({
            opacity: 0
        }, 0.15, pc.Linear)
        .on('complete', () => this.tutorialHand.setLocalPosition(-120, -90, 0));

    this.handAlphaAppearingTween.chain(this.cameraRotatingTween);
    this.cameraRotatingTween.chain(this.handAlphaDisappearingTween);
    this.handAlphaDisappearingTween.chain(this.handAlphaAppearingTween);

    this.tutorialHand.element.opacity = 0;
    this.handAlphaAppearingTween.start();
};


TutorialController.prototype.stopCameraRotatingTween = function() {
    if (this.cameraRotatingTween && this.cameraRotatingTween.playing) {
        this.cameraRotatingTween.stop();
    }
    if (this.handAlphaAppearingTween && this.handAlphaAppearingTween.playing) {
        this.handAlphaAppearingTween.stop();
    }
    if (this.handAlphaDisappearingTween && this.handAlphaDisappearingTween.playing) {
        this.handAlphaDisappearingTween.stop();
    }
    this.tutorialHand.setLocalScale(1, 1, 1);
    this.tutorialHand.element.opacity = 0;
};


TutorialController.prototype.stopHandShakingTween = function() {
    if (this.handShakingTween && this.handShakingTween.playing) {
        this.handShakingTween.stop();
    }
    this.tutorialHand.setLocalScale(1, 1, 1);
};


TutorialController.prototype.playHandShakingTween = function() {
    this.stopCameraRotatingTween();
    this.stopHandShakingTween();

    this.tutorialHand.setLocalScale(1, 1, 1);
    this.tutorialHand.setLocalPosition(0, 0, 0);

    this.handAlphaAppearingTween = this.tutorialHand.tween(this.tutorialHand.element)
        .to({
            opacity: 1
        }, 0.2, pc.Linear, 0.15)
        .start();

    this.handShakingTween = this.tutorialHand.tween(this.tutorialHand.getLocalScale())
        .to(new pc.Vec3(1.15, 1.15, 1.15), 0.3, pc.SineInOut)
        .yoyo(true)
        .repeat(100000)
        .start();
};

TutorialController.shootingAllowed = function() {
    return TutorialController.TUTORIAL_COMPLETED || (TutorialController.TUTORIAL_ACTIVE && TutorialController._currentStep != 1);
};

// comboManager.js
/* jshint esversion: 6 */
var ComboManager = pc.createScript('comboManager');

ComboManager.attributes.add('UIContainer', {
    type: "entity"
});

ComboManager.attributes.add('sourceImages', {
    type: "asset",
    assetType: "texture",
    array: true
});


ComboManager.prototype.initialize = function() {
    this.comboImageGroup = this.entity.findByName('ComboImageGroup');
    this.comboImage = this.entity.findByName('ComboImage');
    this.camera = this.app.root.findByName('Camera');

    this.app.on(EventTypes.LEVEL_RESET, this.reset, this);
    this.app.on(EventTypes.SHOW_COMBO_EFFECT, this.showComboEffect, this);
};


ComboManager.prototype.update = function(dt) {

};


ComboManager.prototype.reset = function() {
    this.comboImageGroup.enabled = false;
};


ComboManager.prototype.showComboEffect = function(multiplier, worldPosition) {
    ApiController.trackStatsChange(`x${multiplier}_combos`, 1);

    /* reset tweens */
    this.resetTweens([this.comboImageOpacityTween, this.comboImageGroupScaleTween, this.comboImagePositionTween, this.scaleBouncingTween, this.scaleDisappearingTween]);

    /* set combo text */
    const sourceAssetIndex = pc.math.clamp(multiplier - 1, 0, this.sourceImages.length - 1);
    const sourceAsset = this.sourceImages[sourceAssetIndex];
    this.comboImage.element.textureAsset = sourceAsset.id;

    /* set position */
    const parentElementPosition = this.entity.parent.getLocalPosition();
    const screenPos = new pc.Vec3();
    this.camera.camera.worldToScreen(worldPosition, screenPos);
    const scale = this.UIContainer.screen.scale;
    const device = this.app.graphicsDevice;
    const targetPosition = new pc.Vec3((screenPos.x * ScaleManager.qualityFactor) / scale - parentElementPosition.x, (device.height - (screenPos.y * ScaleManager.qualityFactor)) / scale - parentElementPosition.y, 0);
    // const halfScreenWidth = this.app.graphicsDevice.width / 2;
    // targetPosition.x = Math.sign(targetPosition.x) * halfScreenWidth * 0.75;
    // this.comboImageGroup.setLocalPosition(targetPosition);

    if (targetPosition.x < 0) {
        this.comboImageGroup.setLocalPosition(-250, 0, 0);
    } else {
        this.comboImageGroup.setLocalPosition(250, 0, 0);
    }

    /* enable parent group */
    this.comboImageGroup.enabled = true;

    /* tween appearing */
    this.comboImage.element.opacity = 0;
    this.comboImageOpacityTween = this.comboImage.tween(this.comboImage.element)
        .to({
            opacity: 1
        }, 0.25, pc.Linear)
        .start();

    const groupScale = 0.8 + (sourceAssetIndex) * 0.065;
    this.comboImageGroup.setLocalScale(0, 0, 0);
    this.comboImageGroupScaleTween = this.comboImageGroup.tween(this.comboImageGroup.getLocalScale())
        .to(new pc.Vec3(groupScale, groupScale, groupScale), 0.25, pc.BackOut)
        .start();


    const bouncingTweenDuration = 0.25;
    const numRepeats = Math.ceil(GameConfig.getAttribute('comboValidityTimer') / bouncingTweenDuration);
    this.comboImage.setLocalPosition(0, 0, 0);
    this.comboImagePositionTween = this.comboImage.tween(this.comboImage.getLocalPosition())
        .to(new pc.Vec3(0, 10, 0), bouncingTweenDuration, pc.Linear)
        .repeat(numRepeats)
        .yoyo(true)
        .start();


    this.comboImage.setLocalScale(1, 1, 1);
    this.scaleBouncingTween = this.comboImage.tween(this.comboImage.getLocalScale())
        .to(new pc.Vec3(1.1, 1.1, 1.1), bouncingTweenDuration, pc.SineInOut)
        .repeat(numRepeats)
        .yoyo(true);


    this.scaleDisappearingTween = this.comboImage.tween(this.comboImage.getLocalScale())
        .to(new pc.Vec3(0, 0, 0), 0.12, pc.BackIn)
        .on('complete', () => {
            this.comboImageGroup.enabled = false;
        });

    this.scaleBouncingTween.chain(this.scaleDisappearingTween);
    this.scaleBouncingTween.start();
};

ComboManager.prototype.resetTweens = function(tweens) {
    if (tweens && tweens.length > 0) {
        tweens.forEach(t => {
            if (t && t.playing) t.stop();
        });
    }
};


// apiController.js
/* jshint esversion: 6 */
var ApiController = pc.createScript('apiController');

ApiController.prototype.initialize = function() {
    console.log('API controller initialized');
    game = this.app;

    if (window.famobi) {
        ApiController.initTracking();
    }
};

ApiController.prototype.update = function(dt) {

};

ApiController.isRewardedVideoFeatureEnabled = function() {
    return true;
};

ApiController.hasRewardedVideo = function() {
    if (ApiController.isRewardedVideoFeatureEnabled() && window.famobi && window.famobi.hasRewardedAd)
        return window.famobi.hasRewardedAd();
    else
        return false;
};

ApiController.showRewardedVideo = function(callback) {
    if (window.famobi && ApiController.hasRewardedVideo()) {
        window.famobi.rewardedAd(callback);
    } else {
        callback();
    }
};

ApiController.initTracking = function() {
    if (!window.famobi_tracking) {
        console.warn("Tracking API is not defined");
        return;
    }
    window.famobi_tracking.init('bubbles-tower-3d', null, 100, true, true);
    console.log('Tracking API initialized');
};

ApiController.trackLevelStart = function(eventParams) {
    if (!window.famobi_tracking) {
        console.warn("TrackLevelStart: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_START, eventParams);
};

ApiController.trackLevelRestart = function(eventParams) {
    if (!window.famobi_tracking) {
        console.warn("TrackLevelressart: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_START, eventParams);
};


ApiController.trackLevelUpdate = function(eventParams) {
    //  if(!window.famobi_tracking) {
    //     console.warn("TrackLevelUpdate: Tracking API is not defined");
    //     return;
    // }
    //  window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_UPDATE, eventParams);
};

ApiController.trackLevelEnd = function(eventParams) {
    if (!window.famobi_tracking) {
        console.warn("TrackLevelEnd: Tracking API is not defined");
        return;
    }
    window.famobi_tracking.trackEvent(window.famobi_tracking.EVENTS.LEVEL_END, eventParams);
};


/* Tracking stats */

ApiController.trackStats = function(key, value) {
    const currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
    const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
    trackableStats[key] = value;
    currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));
    // console.log(`track stats [${key}] = ${trackableStats[key]}`);

    if (window.famobi_analytics && window.famobi_analytics.trackStats) {
        window.famobi_analytics.trackStats(key, value);
    }
};


ApiController.trackStatsChange = function(key, delta) {
    const currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
    const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
    trackableStats[key] = (trackableStats[key] || 0) + delta;
    currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));
    // console.log(`track stats increment ${delta} [${key}] = ${trackableStats[key]}`);

    if (window.famobi_analytics && window.famobi_analytics.trackStats) {
        window.famobi_analytics.trackStats(key, trackableStats[key]);
    }
};


/* Pause/resume handling */

pc.Application.prototype.pauseGame = function() {
    this.applicationPaused = true;
    this.soundVolumeBeforePaused = this.systems.sound.volume;
    this.systems.sound.volume = 0;
    this.timeScale = 0;
    var inputBlocker = this.root.findByName("InputBlocker");
    if (inputBlocker) {
        inputBlocker.element.useInput = true;
    }
    console.log("Application:paused");
};

pc.Application.prototype.unpauseGame = function(forced) {
    if (isPageVisible && (!adIsShowing || force)) {
        this.applicationPaused = false;
        this.systems.sound.volume = this.soundVolumeBeforePaused;
        this.timeScale = 1;
        var inputBlocker = this.root.findByName("InputBlocker");
        if (inputBlocker) {
            inputBlocker.element.useInput = false;
        }
        console.log("Application:resumed");
    } else {
        console.log('resuming game is not allowed now because ads are displaying or page isn\'t visible...');
    }
};


/* Global scope variables */

var game;
var isPageVisible = true;
var adIsShowing = false;

//famobi pause/resume requests
window.famobi_onPauseRequested = function() {
    console.warn('famobi_onPauseRequested');
    adIsShowing = true;
    if (game) {
        game.pauseGame();
    }
};

window.famobi_onResumeRequested = function() {
    console.warn('famobi_onResumeRequested');
    adIsShowing = false;
    document.querySelector('canvas').focus();
    if (game) {
        game.unpauseGame();
    }
};

//visiblity
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange(hiddenState, reason) {
    if (hiddenState) {
        if (isPageVisible) {
            console.log('visibility: hidden ', reason);
            isPageVisible = false;
            if (game && !adIsShowing) game.pauseGame();
        }

    } else {
        console.log('visibility: restored ', reason);
        isPageVisible = true;
        if (game && !adIsShowing && game.applicationPaused) game.unpauseGame();
    }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("Browser doesn't support the Page Visibility API.");
} else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, () => handleVisibilityChange(document.hidden), false);
    window.addEventListener("focus", () => handleVisibilityChange(false, 'focus'));
    window.addEventListener("blur", () => handleVisibilityChange(true, 'blur'));
}

console.log("Window VisibilityAPI connected");

// fireball.js
/* jshint esversion: 6 */
var Fireball = pc.createScript('fireball');

Fireball.attributes.add('lightIntensity', {
    type: 'vec2',
    default: [2, 2]
});

Fireball.attributes.add('lightIntensityPeriod', {
    type: 'vec2',
    default: [0.02, 0.12]
});

Fireball.attributes.add('intensitySmoothing', {
    type: 'number',
    default: 0.5,
    min: 0.1,
    max: 0.9
});

Fireball.prototype.initialize = function() {
    this.entity.fireballLight = this.entity.findByName('FireballLight');
    this.entity.dynamicLightEnabled = false;
    this.entity.dynamicLightCooldown = 0;
    this.entity.lifeTimer = 0;
    this.entity.isFlying = false;
    this.entity.isLaunched = false;
    this.entity.isFinished = false;
    this.entity.effectsContainer = this.app.root.findByName('GameplayContainer').findByName('EffectsContainer');
    this.bindEntityMethods();

    this.on('destroy', this.handleDestroy, this);
};


Fireball.prototype.bindEntityMethods = function() {

    const scriptContext = this;

    this.entity.animateAppearing = function() {
        this.enabled = true;

        this.fireballLight.tween(this.fireballLight.light)
            .from({
                intensity: 0
            }, 0.75, pc.SineOut)
            .start();

        this.setLocalScale(0.1, 0.1, 0.1);
        this.tween(this.getLocalScale())
            .to(new pc.Vec3(GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale'), GameConfig.getAttribute('cellScale')), 0.9, pc.ElasticOut)
            .on('complete', () => this.dynamicLightEnabled = true)
            .start();

        this.particlesystem.play();

        this._app.fire(EventTypes.PLAY_AUDIO, 'fireball_start');

    }.bind(this.entity);

    this.entity.isBubble = function() {
        return false;
    }.bind(this.entity);

    this.entity.isFireball = function() {
        return true;
    }.bind(this.entity);

    this.entity.launch = function(gameplayContainer, initialTowerAngle, initialElevation, launchAngle, launchSpeed) {
        this.isLaunched = true;
        this.lifeTimer = GameConfig.getAttribute('fireballLifeTime');
        this.gameplayContainer = gameplayContainer;
        this.currentTowerAngle = initialTowerAngle;
        this.currentElevation = initialElevation;
        this.launchAngle = launchAngle;
        this.launchSpeed = launchSpeed;
        this.elevationSpeed = Math.cos(launchAngle) * launchSpeed;
        this.angularSpeed = Math.sin(launchAngle) * launchSpeed / this.gameplayContainer.structureRadius;
        this.ballRadiusElevationCorrection = Math.cos(launchAngle) * this.gameplayContainer.cellRadius;
        this.ballRadiusAngularCorrection = Math.sin(launchAngle) * this.gameplayContainer.cellRadius / this.gameplayContainer.structureRadius;
        this.shootingDirection = new pc.Vec3(0, 1, 0);

        ApiController.trackStatsChange('fireballs_shot', 1);
        this._app.fire(EventTypes.PLAY_AUDIO, 'fireball_launch');

    }.bind(this.entity);

};


Fireball.prototype.update = function(dt) {
    if (this.entity.isLaunched) {
        this.entity.lifeTimer -= dt;
        if (this.entity.lifeTimer <= 0) {
            this.app.fire(EventTypes.FIREBALL_EXPLODED, this.entity.getPosition().clone());
            this.app.fire(EventTypes.FIREBALL_DESTROYED);
            this.entity.isFinished = true;
            this.entity.destroy();
        } else {
            this._updateLaunched(dt);
            this._blinkLight(dt);
        }
    }
};

Fireball.prototype._updateLaunched = function(dt) {

    const frameDeltaAngle = this.entity.angularSpeed * dt;
    const frameDeltaElevation = this.entity.elevationSpeed * dt;
    const frameDeltaAngleCorrected = frameDeltaAngle + this.entity.ballRadiusAngularCorrection;
    const frameDeltaElevationCorrected = frameDeltaElevation + this.entity.ballRadiusElevationCorrection;

    const initialTowerAngleCorrected = this.entity.currentTowerAngle + this.entity.ballRadiusAngularCorrection;
    const initialTowerElevationCorrected = this.entity.currentElevation + this.entity.ballRadiusElevationCorrection;

    const nextTowerAngle = this.entity.currentTowerAngle + frameDeltaAngle;
    const nextElevation = this.entity.currentElevation + frameDeltaElevation;
    const nextTowerAngleCorrected = this.entity.currentTowerAngle + frameDeltaAngleCorrected;
    const nextElevationCorrected = this.entity.currentElevation + frameDeltaElevationCorrected;

    const iterationMaxDistance = this.entity.gameplayContainer.cellRadius * GameConfig.getAttribute('collisionDetectionMaxIterationDistance');
    const frameTrajectoryLength = this.entity.gameplayContainer.getTrajectoryLength(initialTowerAngleCorrected, initialTowerElevationCorrected, nextTowerAngleCorrected, nextElevationCorrected);
    const numIterations = frameTrajectoryLength / iterationMaxDistance;

    const possibleContactingBubbledCells = this._findPossiblyIntersectedBubbledCells(this.entity.getPosition(), nextTowerAngleCorrected, nextElevationCorrected);

    // console.log('frame distance ', frameTrajectoryLength, ' iterations ', numIterations);
    let currentIterationTrajectoryProgress = 0;
    let currentIterationAngle = initialTowerAngleCorrected;
    let currentIterationElevation = initialTowerElevationCorrected;
    let currentIterationWorldPosition = this.entity.getPosition().clone();
    for (let i = 1; i <= Math.ceil(numIterations); i++) {

        const nextIterationTrajectoryProgress = pc.math.clamp(i / numIterations, 0, 1);
        const nextIterationAngle = pc.math.lerp(initialTowerAngleCorrected, nextTowerAngleCorrected, nextIterationTrajectoryProgress);
        const nextIterationElevation = pc.math.lerp(initialTowerElevationCorrected, nextElevationCorrected, nextIterationTrajectoryProgress);

        const nextLocalPosition = this.entity.gameplayContainer.getTowerPointPosition(nextIterationAngle, nextIterationElevation);
        const nextIterationWorldPosition = this.entity.parent.getWorldTransform().transformPoint(nextLocalPosition);

        this._findIntersections(currentIterationWorldPosition, nextIterationWorldPosition, possibleContactingBubbledCells).forEach(cell => {
            if (cell.hasBubble()) {
                const bubbleColor = this.app.colorsStorage.getTrailColor(cell.getBubble().getColor());
                const scores = 50;
                this.app.fire(EventTypes.ADD_SCORES, scores);
                this.app.fire(EventTypes.SHOW_SCORES_EFFECT, scores, cell.getPosition(), bubbleColor);
                cell.removeBubble(true);
            }
        });


        currentIterationTrajectoryProgress = nextIterationTrajectoryProgress;
        currentIterationAngle = nextIterationAngle;
        currentIterationElevation = nextIterationElevation;
        currentIterationWorldPosition = nextIterationWorldPosition;

        if (nextIterationWorldPosition.y >= this.entity.gameplayContainer.topLineY - this.entity.gameplayContainer.cellRadius) {
            this.entity.elevationSpeed = -Math.abs(this.entity.elevationSpeed);
        } else if (nextIterationWorldPosition.y <= GameConfig.getAttribute('redLineY') - this.entity.gameplayContainer.cellRadius) {
            this.entity.elevationSpeed = Math.abs(this.entity.elevationSpeed);
        }
    }


    /* set final position if there are no collisions */
    this.entity.currentTowerAngle = nextTowerAngle;
    this.entity.currentElevation = nextElevation;
    this.entity.setLocalPosition(this.entity.gameplayContainer.getTowerPointPosition(this.entity.currentTowerAngle, this.entity.currentElevation));
};


Fireball.prototype._shakeContactedNeighbors = function(possibleContactingBubbledCells, worldPosition) {
    for (let cell of possibleContactingBubbledCells) {
        const cellPosition = cell.getPosition();
        const normal = Utils.findSpheresCollisionNormal(worldPosition, GameConfig.getAttribute('cellScale') / 2, cellPosition, GameConfig.getAttribute('cellScale') / 2);
        if (normal) {
            this.app.fire(EventTypes.SHAKE_CONTACTING_CELL, cell, normal, 0.25, 2);
        }
    }
};


Fireball.prototype._findIntersections = function(initialWorldPosition, targetWorldPosition, possibleContactingBubbledCells) {
    const intersectedCells = [];
    for (let cell of possibleContactingBubbledCells) {
        const cellPosition = cell.getPosition();
        const raycastResults = Utils.checkSegmentSphereIntersection(initialWorldPosition, targetWorldPosition, cellPosition, this.entity.gameplayContainer.cellRadius * GameConfig.getAttribute('cellCollisionUpScale') * GameConfig.getAttribute('fireballCollisionScaleMultiplier'));
        if (raycastResults) {
            intersectedCells.push(cell);
        }
    }

    return intersectedCells;
};


Fireball.prototype._blinkLight = function(dt) {
    if (!this._destoyed && this.entity.dynamicLightEnabled && this.entity.fireballLight.light) {
        this.entity.dynamicLightCooldown -= dt;
        if (this.entity.dynamicLightCooldown <= 0) {
            this.entity.dynamicLightTargetValue = pc.math.random(this.lightIntensity.x, this.lightIntensity.y);
            this.entity.dynamicLightCooldown = pc.math.random(this.lightIntensityPeriod.x, this.lightIntensityPeriod.y);
        }
        this.entity.fireballLight.light.intensity = this.entity.fireballLight.light.intensity + (this.entity.dynamicLightTargetValue - this.entity.fireballLight.light.intensity) * this.intensitySmoothing;
    }
};

Fireball.prototype._findPossiblyIntersectedBubbledCells = function(initialWorldPosition, targetTowerAngle, targetElevation) {
    const nextFrameLocalPosition = this.entity.gameplayContainer.getTowerPointPosition(targetTowerAngle, targetElevation);
    const nextFrameWorldPosition = this.entity.parent.getWorldTransform().transformPoint(nextFrameLocalPosition);
    const approximatePathCenter = nextFrameWorldPosition.lerp(initialWorldPosition, nextFrameWorldPosition, 0.5);
    const filteringRadiusSquared = Math.pow(nextFrameWorldPosition.distance(initialWorldPosition) + this.entity.gameplayContainer.cellRadius, 2);
    const possibleContactingBubbledCells = this.entity.gameplayContainer.getBubbledCells().filter(cell => {
        const cellPosition = cell.getPosition();
        return (cellPosition.x - approximatePathCenter.x) * (cellPosition.x - approximatePathCenter.x) + (cellPosition.y - approximatePathCenter.y) * (cellPosition.y - approximatePathCenter.y) + (cellPosition.z - approximatePathCenter.z) * (cellPosition.z - approximatePathCenter.z) <= filteringRadiusSquared;
    });
    return possibleContactingBubbledCells;
};


Fireball.prototype.handleDestroy = function() {
    this.entity.gameplayContainer = null;
    this.entity.effectsContainer = null;
    this._destroyed = true;
};




// powerupButtonController.js
/* jshint esversion: 6 */
var PowerupButtonController = pc.createScript('powerupButtonController');


PowerupButtonController.prototype.initialize = function() {
    this.entity.cooldown = GameConfig.getAttribute('fireballInitialCooldown');
    this.entity.powerupAvailable = false;

    this.powerupButtonContainer = this.entity.findByName('PowerupButtonContainer');
    this.powerupButton = this.powerupButtonContainer.findByName('PowerupButton');
    this.powerupButtonGreyed = this.powerupButtonContainer.findByName('PowerupButtonUnavailable');
    this.timeLeftText = this.powerupButtonContainer.findByName('TimeLeftText');
    this.watchAdButton = this.powerupButtonContainer.findByName('WatchAdButton');
    this.watchAdInput = this.powerupButtonContainer.findByName('WatchAdInput');

    this.powerupButton.tween(this.powerupButton.getLocalScale())
        .to(new pc.Vec3(1.125, 1.125, 1.125), 0.275, pc.Linear)
        .loop(true)
        .yoyo(true)
        .start();

    this.watchAdButton.tween(this.watchAdButton.getLocalScale())
        .to(new pc.Vec3(1.1, 1.1, 1.1), 0.25, pc.Linear)
        .loop(true)
        .yoyo(true)
        .start();

    this.app.on(EventTypes.SHOW_POWERUP_BUTTON, this.show, this);
    this.app.on(EventTypes.HIDE_POWERUP_BUTTON, this.hide, this);

    this.assignAction(this.powerupButton, this.powerupButtonPressed, this);
    this.assignAction(this.watchAdInput, this.watchVideoPressed, this);
};


PowerupButtonController.prototype.update = function(dt) {
    if (this.entity.cooldown > 0) {
        this.entity.cooldown -= dt;
        this.powerupButton.enabled = false;
        this.powerupButtonGreyed.enabled = true;
        this.timeLeftText.enabled = true;
        this.timeLeftText.element.text = '' + Utils.humanizeTime(this.entity.cooldown);
        this.watchAdButton.enabled = false;
        if (this.entity.cooldown <= 0) {
            this.entity.cooldown = 0;
            this.cooldownExpired();
        }
    }
};

PowerupButtonController.prototype.cooldownExpired = function() {
    if (ApiController.hasRewardedVideo()) {
        this.entity.powerupAvailable = false;
        this.powerupButton.enabled = false;
        this.powerupButtonGreyed.enabled = true;
        this.watchAdButton.enabled = true;
        this.timeLeftText.enabled = false;
    } else {
        this.activatePowerupButton();
    }
};

PowerupButtonController.prototype.activatePowerupButton = function() {
    this.app.fire(EventTypes.PLAY_AUDIO, 'powerupAvailable');
    this.entity.powerupAvailable = true;
    this.watchAdButton.enabled = false;
    this.timeLeftText.enabled = false;
    this.powerupButton.enabled = true;
    this.powerupButtonGreyed.enabled = false;
};


PowerupButtonController.prototype.show = function(delay) {
    this.powerupButtonContainer.enabled = true;
    this.powerupButtonContainer.setLocalScale(0, 0, 0);
    this.powerupButtonContainer.tween(this.powerupButtonContainer.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.35, pc.BackOut)
        .delay(delay)
        .start();
};

PowerupButtonController.prototype.hide = function() {
    this.powerupButtonContainer.enabled = false;
};

PowerupButtonController.prototype.powerupButtonPressed = function() {
    this.entity.powerupAvailable = false;
    this.entity.cooldown = GameConfig.getAttribute('fireballCooldown');
    this.app.fire(EventTypes.POWERUP_ACTIVATED);

    this.powerupButtonContainer.setLocalScale(0, 0, 0);
    this.powerupButtonContainer.tween(this.powerupButtonContainer.getLocalScale())
        .to(new pc.Vec3(1, 1, 1), 0.25, pc.BackOut)
        .start();
};

PowerupButtonController.prototype.watchVideoPressed = function() {
    ApiController.showRewardedVideo((result) => {
        if(result && result.rewardGranted) {
            this.activatePowerupButton();
        }
    });
};

PowerupButtonController.prototype.assignAction = function(button, handler, handlerContext) {
    if (this.app.touch) {
        button.element.on('touchstart', handler, handlerContext);
    } else if (this.app.mouse) {
        button.element.on('mousedown', handler, handlerContext);
    }
};



// explosionEffect.js
/* jshint esversion: 6 */
var ExplosionEffect = pc.createScript('explosionEffect');

ExplosionEffect.attributes.add('effectScale', {
    type: 'vec3',
    default: [2, 2, 2]
});

ExplosionEffect.attributes.add('ititialLightIntensity', {
    type: 'number',
    default: 20
});

ExplosionEffect.attributes.add('effectDuration', {
    type: 'number',
    default: 1.1
});


ExplosionEffect.prototype.initialize = function() {
    this.explosionLight = this.entity.findByName('ExplosionLight');

    this.app.fire(EventTypes.PLAY_AUDIO, 'explosion');
    this.app.fire(EventTypes.SHAKE_CAMERA, 0.75, 1.0);



    this.entity.setLocalScale(this.effectScale);
    this.entity.particlesystem.lifetime = this.effectDuration;
    this.entity.particlesystem.reset();
    this.entity.particlesystem.play();

    this.explosionLight.light.intensity = this.ititialLightIntensity;
    this.explosionLight.tween(this.explosionLight.light)
        .to({
            intensity: 0
        }, this.effectDuration, pc.QuadraticOut)
        .on('complete', () => this.entity.destroy())
        .start();
};


ExplosionEffect.prototype.update = function(dt) {

};


// explosionEffectsManager.js
/* jshint esversion: 6 */
var ExplosionEffectsManager = pc.createScript('explosionEffectsManager');


ExplosionEffectsManager.prototype.initialize = function() {
    this.assetsLibrary = this.app.root.findByName('Library');
    this.app.on(EventTypes.FIREBALL_EXPLODED, this.addExplosionEffect, this);
};


ExplosionEffectsManager.prototype.update = function(dt) {

};

ExplosionEffectsManager.prototype.addExplosionEffect = function(worldPosition) {
    const explosionEffect = this.assetsLibrary.findByName('Explosion').clone();
    explosionEffect.reparent(this.entity);
    explosionEffect.enabled = true;
    explosionEffect.setPosition(worldPosition);
};




// confettiController.js
/* jshint esversion: 6 */
var ConfettiController = pc.createScript('confettiController');

ConfettiController.prototype.initialize = function() {
    this.app.on(EventTypes.CONFETTI, this.generateConfetti, this);
    this.app.on(EventTypes.VIEWPORT_RESIZE, this.resize, this);

    this.resize(ScaleManager.screenWidth, ScaleManager.screenHeight);
};

ConfettiController.prototype.update = function(dt) {

};

ConfettiController.prototype.resize = function(width, height) {
    const ratio = width / height;

    const baseZ = 11;
    const baseY = 2.75;

    const minZ = 8;
    const maxZ = 15;
    const cameraZ = pc.math.clamp(baseZ * ratio, minZ, maxZ);

    this.entity.setLocalPosition(0, baseY, -cameraZ);
};

ConfettiController.prototype.generateConfetti = function() {

    const camera = this.app.root.findByName('Camera');
    // const worldPos = camera.camera.screenToWorld(this.app.graphicsDevice.width * ScaleManager.qualityFactor / 2, this.app.graphicsDevice.height  * ScaleManager.qualityFactor / 2, 10);
    // this.entity.setPosition(worldPos);
    // this.entity.lookAt(camera.getPosition());
    // const localPos = this.entity.getLocalPosition();
    //const cameraDistance = camera.script.orbitCamera.distance;
    // this.entity.setLocalPosition(localPos.x, localPos.y, cameraDistance / 3);


    this.app.fire(EventTypes.PLAY_AUDIO, 'confetti');

    this.entity.children.forEach(child => {
        child.enabled = true;
        child.particlesystem.reset();
        child.particlesystem.play();
    });

    // setTimeout(() => {
    //     this.entity.children.forEach(child => {
    //        child.enabled = false;
    //     });
    // }, 3000);
};
