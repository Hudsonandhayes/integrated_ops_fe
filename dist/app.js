/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = (typeof self !== 'undefined' ? self : this)["webpackHotUpdate"];
/******/ 	(typeof self !== 'undefined' ? self : this)["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "fd22fe231a8d82f8862e";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../themeConfig.js */ "./themeConfig.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vueAppClasses: []
    };
  },
  watch: {
    '$store.state.theme': function $storeStateTheme(val) {
      this.toggleClassInBody(val);
    },
    '$vs.rtl': function $vsRtl(val) {
      document.documentElement.setAttribute('dir', val ? 'rtl' : 'ltr');
    }
  },
  methods: {
    toggleClassInBody: function toggleClassInBody(className) {
      if (className === 'dark') {
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
        document.body.classList.add('theme-dark');
      } else if (className === 'semi-dark') {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-semi-dark');
      } else {
        if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
        if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
      }
    },
    setAppClasses: function setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr);
    },
    handleWindowResize: function handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth); // Set --vh property

      document.documentElement.style.setProperty('--vh', "".concat(window.innerHeight * 0.01, "px"));
    },
    handleScroll: function handleScroll() {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY);
    }
  },
  mounted: function mounted() {
    this.toggleClassInBody(_themeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"].theme);
    this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth);
    var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  },
  created: function () {
    var _created = Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var dir;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dir = this.$vs.rtl ? 'rtl' : 'ltr';
              document.documentElement.setAttribute('dir', dir);
              window.addEventListener('resize', this.handleWindowResize);
              window.addEventListener('scroll', this.handleScroll);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeatherIcon.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  functional: true,
  name: 'feather-icon',
  props: {
    icon: {
      required: true
    },
    svgClasses: {
      type: [String, Object, Array],
      default: ''
    },
    badge: {}
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    // Add feather classes
    data.staticClass ? data.staticClass = "".concat(data.staticClass, " feather-icon select-none relative") : data.staticClass = 'feather-icon select-none relative';
    var svg = h(vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__[props.icon], {
      class: props.svgClasses
    });
    var badgeEl = h('span', {
      class: 'feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center',
      style: 'top: -7px; right: -5px'
    }, [props.badge]);
    var children = [svg];
    if (props.badge) children.push(badgeEl);
    return h('span', data, children);
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-card/VxCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/utils/color.js */ "./src/assets/utils/color.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-card',
  props: {
    title: String,
    subtitle: String,
    actionButtons: {
      type: Boolean,
      default: false
    },
    actionButtonsColor: {
      type: String,
      default: 'success'
    },
    codeToggler: {
      type: Boolean,
      default: false
    },
    noShadow: {
      default: false,
      type: Boolean
    },
    noRadius: {
      default: false,
      type: Boolean
    },
    cardBorder: {
      default: false,
      type: Boolean
    },
    codeLanguage: {
      default: 'markup',
      type: String
    },
    collapseAction: {
      default: false,
      type: Boolean
    },
    refreshContentAction: {
      default: false,
      type: Boolean
    },
    removeCardAction: {
      default: false,
      type: Boolean
    },
    headerBackground: {
      default: '',
      type: String
    },
    // bodyBackground: {
    //   default: '',
    //   type: String
    // },
    // headerbackground: {
    //   default: '',
    //   type: String
    // },
    cardBackground: {
      default: '',
      type: String
    },
    contentColor: {
      default: '',
      type: String
    },
    titleColor: {
      default: '',
      type: String
    },
    subtitleColor: {
      default: '#b8c2cc',
      type: String
    }
  },
  data: function data() {
    return {
      isContentCollapsed: false,
      showCode: false,
      maxHeight: null,
      cardMaxHeight: null,
      codeContainerMaxHeight: '0px',
      tempHidden: false
    };
  },
  computed: {
    hasAction: function hasAction() {
      return this.$slots.actions || this.actionButtons || this.collapseAction || this.refreshContentAction || this.removeCardAction || this.codeToggler;
    },
    hasHeader: function hasHeader() {
      return this.hasAction || this.title || this.subtitle;
    },
    StyleItems: function StyleItems() {
      return {
        maxHeight: this.maxHeight
      };
    },
    cardStyles: function cardStyles() {
      var obj = {
        maxHeight: this.cardMaxHeight
      };
      if (!_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.cardBackground)) obj.background = _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].getColor(this.cardBackground);
      if (!_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.contentColor)) obj.color = _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].getColor(this.contentColor);
      return obj;
    },
    codeContainerStyles: function codeContainerStyles() {
      return {
        maxHeight: this.codeContainerMaxHeight
      };
    },
    cardClasses: function cardClasses() {
      var str = ''; // Add bg class

      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.cardBackground)) {
        str += " bg-".concat(this.cardBackground);
      } // add content color


      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.contentColor)) {
        str += " text-".concat(this.contentColor);
      }

      return str.trim();
    },
    titleStyles: function titleStyles() {
      return {
        color: _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].getColor(this.titleColor)
      };
    },
    titleClasses: function titleClasses() {
      var str = ''; // add content color

      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.titleColor)) {
        str += " text-".concat(this.titleColor);
      }

      return str.trim();
    },
    subtitleStyles: function subtitleStyles() {
      var obj = {};
      if (!_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.subtitleColor)) obj.color = _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].getColor(this.subtitleColor);
      return obj;
    },
    subtitleClasses: function subtitleClasses() {
      var str = ''; // add content color

      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_1__["default"].isColor(this.subtitleColor)) {
        str += " text-".concat(this.subtitleColor);
      }

      return str.trim();
    }
  },
  methods: {
    toggleContent: function toggleContent() {
      var _this = this;

      this.$refs.content.style.overflow = 'hidden';
      var scrollHeight = this.$refs.content.scrollHeight;

      if (this.maxHeight === '1.5rem') {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this.maxHeight = 'none';
          _this.$refs.content.style.overflow = null;
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this.maxHeight = '1.5rem';
          _this.$refs.content.style.overflow = null;
        }, 50);
      }

      this.isContentCollapsed = !this.isContentCollapsed;
      this.$emit('toggleCollapse', this.isContentCollapsed);
    },
    refreshcard: function refreshcard() {
      this.$vs.loading({
        container: this.$refs.content,
        scale: 0.5
      });
      this.tempHidden = true;
      this.$emit('refresh', this);
    },
    removeRefreshAnimation: function removeRefreshAnimation() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      setTimeout(function () {
        _this2.$vs.loading.close(_this2.$refs.content);

        _this2.tempHidden = false;
      }, time);
    },
    removeCard: function removeCard() {
      var _this3 = this;

      var scrollHeight = this.$refs.card.scrollHeight;
      this.cardMaxHeight = "".concat(scrollHeight, "px");
      this.$el.style.overflow = 'hidden';
      setTimeout(function () {
        _this3.cardMaxHeight = '0px';
      }, 50);
      this.$emit('remove');
    },
    toggleCode: function toggleCode() {
      var _this4 = this;

      this.tempHidden = true;
      this.showCode = !this.showCode;
      var scrollHeight = this.$refs.codeContainer.scrollHeight;

      if (this.codeContainerMaxHeight === '0px') {
        this.codeContainerMaxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this4.codeContainerMaxHeight = 'none';
          _this4.tempHidden = false;
        }, 300);
      } else {
        this.codeContainerMaxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this4.codeContainerMaxHeight = '0px';
          _this4.tempHidden = false;
        }, 150);
      }
    }
  },
  components: {
    Prism: vue_prism_component__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-input-group',
  props: {
    prependClasses: {
      type: String
    },
    appendClasses: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-list/VxList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-list',
  props: {
    list: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      default: 'ChevronsRightIcon'
    }
  },
  computed: {
    rtlSpecificIcon: function rtlSpecificIcon() {
      var i = this.icon;

      if (this.$vs.rtl) {
        if (i.includes('Left')) {
          i = i.replace('Left', 'Right');
        } else if (i.includes('Right')) {
          i = i.replace('Right', 'Left');
        }

        if (i.includes('Left')) {
          i = i.replace('Left', 'Right');
        } else if (i.includes('Right')) {
          i = i.replace('Right', 'Left');
        }
      }

      return i;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-breadcrumb'
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
/* harmony import */ var core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_sign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/utils */ "./src/assets/utils/index.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/utils/color.js */ "./src/assets/utils/color.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-tooltip',
  props: {
    title: {
      default: null,
      type: [String, Number]
    },
    text: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: null,
      type: String
    },
    position: {
      default: 'top',
      type: String
    },
    delay: {
      default: '0s',
      type: [Number, String]
    }
  },
  data: function data() {
    return {
      cords: {},
      active: false,
      widthx: 'auto',
      positionx: null,
      noneAfter: false
    };
  },
  computed: {
    style: function style() {
      return {
        left: this.cords.left,
        top: this.cords.top,
        transitionDelay: this.active ? this.delay : '0s',
        background: _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_3__["default"].getColor(this.color, 1),
        width: this.widthx
      };
    }
  },
  methods: {
    mouseenterx: function mouseenterx() {
      var _this = this;

      this.active = true;
      this.$nextTick(function () {
        _assets_utils__WEBPACK_IMPORTED_MODULE_2__["default"].insertBody(_this.$refs.vstooltip);

        _this.changePosition(_this.$refs.convstooltip, _this.$refs.vstooltip);
      });
    },
    mouseleavex: function mouseleavex() {
      this.active = false;
    },
    changePosition: function changePosition(elxEvent, tooltip) {
      this.noneAfter = false;
      this.positionx = null;
      var elx = elxEvent.closest('.con-vs-tooltip');
      var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
      var topx = elx.getBoundingClientRect().top + scrollTopx - tooltip.clientHeight - 4;
      var leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 + elx.clientWidth / 2;
      var widthx = elx.clientWidth;

      if (this.position == 'bottom') {
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
      } else if (this.position == 'left') {
        leftx = elx.getBoundingClientRect().left - tooltip.clientWidth - 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (Math.sign(leftx) == -1) {
          leftx = elx.getBoundingClientRect().left;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      } else if (this.position == 'right') {
        leftx = elx.getBoundingClientRect().left + elx.clientWidth + 4;
        topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight / 2 - tooltip.clientHeight / 2;

        if (window.innerWidth - (leftx + tooltip.clientWidth) <= 20) {
          leftx = elx.getBoundingClientRect().left - tooltip.clientWidth / 2 - 10;
          topx = elx.getBoundingClientRect().top + scrollTopx + elx.clientHeight + 4;
          this.positionx = 'bottom';
          this.noneAfter = true;
        }
      }

      this.cords = {
        left: "".concat(leftx, "px"),
        top: "".concat(topx, "px"),
        width: "".concat(widthx, "px")
      };
    },
    destroy: function destroy() {
      var _this2 = this;

      this.active = false;
      this.$nextTick(function () {
        if (_this2.active) {
          _assets_utils__WEBPACK_IMPORTED_MODULE_2__["default"].removeBody(_this2.$refs.vstooltip);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.vueAppClasses, attrs: { id: "app" } },
    [_c("router-view", { on: { setAppClasses: _vm.setAppClasses } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        ref: "card",
        staticClass: "vx-card",
        class: [
          { "overflow-hidden": _vm.tempHidden },
          { "no-shadow": _vm.noShadow },
          { "rounded-none": _vm.noRadius },
          { "card-border": _vm.cardBorder },
          _vm.cardClasses
        ],
        style: _vm.cardStyles
      },
      _vm.$listeners
    ),
    [
      _vm.hasHeader
        ? _c("div", { staticClass: "vx-card__header" }, [
            _c("div", { staticClass: "vx-card__title" }, [
              this.$props.title
                ? _c(
                    "h4",
                    { class: _vm.titleClasses, style: _vm.titleStyles },
                    [_vm._v(_vm._s(_vm.title))]
                  )
                : _vm._e(),
              this.$props.subtitle
                ? _c(
                    "h6",
                    { class: _vm.subtitleClasses, style: _vm.subtitleStyles },
                    [_vm._v(_vm._s(_vm.subtitle))]
                  )
                : _vm._e()
            ]),
            _vm.hasAction
              ? _c(
                  "div",
                  { staticClass: "vx-card__actions" },
                  [
                    _vm._t("actions", [
                      (_vm.actionButtons ||
                        _vm.collapseAction ||
                        _vm.refreshContentAction ||
                        _vm.removeCardAction) &&
                      !_vm.codeToggler
                        ? _c(
                            "div",
                            { staticClass: "vx-card__action-buttons" },
                            [
                              _vm.actionButtons || _vm.collapseAction
                                ? _c("feather-icon", {
                                    staticClass: "ml-4",
                                    class: {
                                      rotate180: !_vm.isContentCollapsed
                                    },
                                    attrs: { icon: "ChevronUpIcon" },
                                    on: { click: _vm.toggleContent }
                                  })
                                : _vm._e(),
                              _vm.actionButtons || _vm.refreshContentAction
                                ? _c("feather-icon", {
                                    staticClass: "ml-4",
                                    attrs: { icon: "RotateCwIcon" },
                                    on: { click: _vm.refreshcard }
                                  })
                                : _vm._e(),
                              _vm.actionButtons || _vm.removeCardAction
                                ? _c("feather-icon", {
                                    staticClass: "ml-4",
                                    attrs: { icon: "XIcon" },
                                    on: { click: _vm.removeCard }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm.codeToggler && !_vm.actionButtons
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "vx-card__code-toggler sm:block hidden"
                            },
                            [
                              _c("feather-icon", {
                                class: {
                                  "border border-solid border-primary border-t-0 border-r-0 border-l-0":
                                    _vm.showCode
                                },
                                attrs: { icon: "CodeIcon" },
                                on: { click: _vm.toggleCode }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ],
                  2
                )
              : _vm._e()
          ])
        : _vm._e(),
      _c(
        "div",
        {
          ref: "content",
          staticClass: "vx-card__collapsible-content vs-con-loading__container",
          class: [
            { collapsed: _vm.isContentCollapsed },
            { "overflow-hidden": _vm.tempHidden }
          ],
          style: _vm.StyleItems
        },
        [
          _vm._t("no-body"),
          this.$slots.default
            ? _c(
                "div",
                { staticClass: "vx-card__body" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm._t("no-body-bottom"),
          this.$slots.footer
            ? _c(
                "div",
                { staticClass: "vx-card__footer" },
                [_vm._t("footer")],
                2
              )
            : _vm._e()
        ],
        2
      ),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: this.$slots.codeContainer,
              expression: "this.$slots.codeContainer"
            }
          ],
          ref: "codeContainer",
          staticClass: "vx-card__code-container",
          class: { collapsed: !_vm.showCode },
          style: _vm.codeContainerStyles
        },
        [
          _c(
            "div",
            { staticClass: "code-content" },
            [
              _c(
                "prism",
                { key: _vm.$vs.rtl, attrs: { language: _vm.codeLanguage } },
                [_vm._t("codeContainer")],
                2
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "div",
    { staticClass: "vx-input-group flex", class: _vm.data.staticClass },
    [
      _vm.slots().prepend
        ? _c(
            "div",
            {
              staticClass: "vx-input-group-prepend flex",
              class: _vm.props.prependClasses
            },
            [_vm._t("prepend")],
            2
          )
        : _vm._e(),
      _c(
        "div",
        { staticClass: "vx-input-group-default flex-grow" },
        [_vm._t("default")],
        2
      ),
      _vm.slots().append
        ? _c(
            "div",
            {
              staticClass: "vx-input-group-append flex",
              class: _vm.props.appendClasses
            },
            [_vm._t("append")],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "list" },
    _vm._l(_vm.list, function(item, index) {
      return _c(
        "li",
        { key: index, staticClass: "list__item" },
        [
          _c("feather-icon", {
            staticClass: "w-5 h-5 mr-1",
            attrs: { icon: _vm.rtlSpecificIcon }
          }),
          _c("span", { domProps: { innerHTML: _vm._s(item) } })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "div",
    { staticClass: "vx-breadcrumb", class: _vm.data.staticClass },
    [
      _c(
        "ul",
        { staticClass: "flex flex-wrap items-center" },
        [
          _c(
            "li",
            { staticClass: "inline-flex items-end" },
            [
              _c(
                "router-link",
                { attrs: { to: "/" } },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: "HomeIcon",
                      svgClasses: "h-5 w-5 mb-1 stroke-current text-primary"
                    }
                  })
                ],
                1
              ),
              _c(
                "span",
                { staticClass: "breadcrumb-separator mx-2" },
                [
                  _c("feather-icon", {
                    attrs: {
                      icon: _vm.props.isRTL
                        ? "ChevronsLeftIcon"
                        : "ChevronsRightIcon",
                      svgClasses: "w-4 h-4"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._l(_vm.props.route.meta.breadcrumb.slice(1, -1), function(
            link,
            index
          ) {
            return _c(
              "li",
              { key: index, staticClass: "inline-flex items-center" },
              [
                link.url
                  ? _c("router-link", { attrs: { to: link.url } }, [
                      _vm._v(_vm._s(link.title))
                    ])
                  : _c("span", { staticClass: "text-primary cursor-default" }, [
                      _vm._v(_vm._s(link.title))
                    ]),
                _c(
                  "span",
                  { staticClass: "breadcrumb-separator mx-2 flex items-start" },
                  [
                    _c("feather-icon", {
                      attrs: {
                        icon: _vm.props.isRTL
                          ? "ChevronsLeftIcon"
                          : "ChevronsRightIcon",
                        svgClasses: "w-4 h-4"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          }),
          _c("li", { staticClass: "inline-flex" }, [
            _vm.props.route.meta.breadcrumb.slice(-1)[0].active
              ? _c("span", { staticClass: "cursor-default" }, [
                  _vm._v(
                    _vm._s(_vm.props.route.meta.breadcrumb.slice(-1)[0].title)
                  )
                ])
              : _vm._e()
          ])
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "convstooltip",
      staticClass: "con-vs-tooltip",
      on: {
        mouseleave: _vm.mouseleavex,
        mouseenter: _vm.mouseenterx,
        mouseup: _vm.destroy
      }
    },
    [
      _c("transition", { attrs: { name: "tooltip-fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.active,
                expression: "active"
              }
            ],
            ref: "vstooltip",
            staticClass: "vs-tooltip",
            class: [
              "vs-tooltip-" + (_vm.positionx || _vm.position),
              "vs-tooltip-" + _vm.color,
              { "after-none": _vm.noneAfter }
            ],
            style: _vm.style
          },
          [
            _vm.title ? _c("h4", [_vm._v(_vm._s(_vm.title))]) : _vm._e(),
            _vm._v("\n      " + _vm._s(_vm.text) + "\n    ")
          ]
        )
      ]),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-3-1!./node_modules/postcss-loader/src??ref--8-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./src/assets/scss/main.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700);", ""]);

// module
exports.push([module.i, "/*=========================================================================================\n  File Name: main.scss\n  Description: Main scss file. Imports other scss partials from 'vuexy' folder\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n/*=========================================================================================\n    File Name: _layout.scss\n    Description: partial- main layout styles container - imports layout styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n  File Name: _layoutCommon.scss\n  Description: Common layout styles. This style will apply to all layouts\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\nhtml {\n  font-size: 14px;\n  height: 100%;\n  width: 100%;\n  line-height: 1.5;\n  letter-spacing: 0.01rem;\n}\n\nbody {\n  font-family: \"Montserrat\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  overflow-x: hidden;\n  max-width: 100%;\n  height: 100%;\n  transition: background-color .3s ease;\n}\n\n[dir] body {\n  background: #f8f8f8;\n  -webkit-transition: background-color .3s ease;\n}\n\n#app {\n  min-height: 100%;\n}\n\n.vx-logo .vx-logo-text {\n  font-size: 22px;\n  font-weight: 600;\n}\n\n[dir=ltr] .vx-logo .vx-logo-text {\n  -webkit-animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n  animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n\n[dir=rtl] .vx-logo .vx-logo-text {\n  -webkit-animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n          animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n\n.router-view {\n  position: relative;\n}\n\n[dir] .router-view {\n  padding: 2.2rem;\n}\n\n@media (max-width: 576px) {\n  [dir] .router-view {\n    padding: 1.2rem !important;\n  }\n\n  [dir] .footer-sticky .router-view {\n    padding-bottom: 5rem !important;\n  }\n}\n\n.router-view .content-area__heading h2 {\n  color: #636363;\n}\n\n.layout--main {\n  height: 100%;\n  min-height: 100%;\n}\n\n#content-overlay {\n  position: fixed;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  transition: opacity .7s;\n  z-index: -1;\n}\n\n[dir] #content-overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  -webkit-transition: opacity .7s;\n}\n\n[dir=ltr] #content-overlay {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] #content-overlay {\n  right: 0;\n  left: 0;\n}\n\n.show-overlay #content-overlay {\n  z-index: 41001;\n  opacity: 1;\n}\n\n.the-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#content-area {\n  height: 100%;\n}\n\n[dir=ltr] #content-area {\n  -webkit-transition: margin-left 0.5s;\n  transition: margin-left 0.5s;\n}\n\n[dir=rtl] #content-area {\n  -webkit-transition: margin-right 0.5s;\n  transition: margin-right 0.5s;\n}\n\n#content-area .content-wrapper {\n  min-height: calc(var(--vh, 1vh) * 100 - 3.5rem);\n}\n\n.navbar-static #content-area .content-wrapper {\n  min-height: calc(var(--vh, 1vh) * 100 - 8rem);\n}\n\n[dir=ltr] #content-area.content-area-reduced {\n  margin-left: 260px;\n}\n\n[dir=rtl] #content-area.content-area-reduced {\n  margin-right: 260px;\n}\n\n[dir=ltr] #content-area.content-area-lg {\n  margin-left: 80px;\n}\n\n[dir=rtl] #content-area.content-area-lg {\n  margin-right: 80px;\n}\n\n[dir=ltr] #content-area.content-area-full {\n  margin-left: 0px;\n}\n\n[dir=rtl] #content-area.content-area-full {\n  margin-right: 0px;\n}\n\n[dir] .navbar-floating .router-content {\n  margin-top: 5.5rem;\n}\n\n@media (max-width: 576px) {\n  [dir] .navbar-floating .router-content {\n    margin-top: 6rem;\n  }\n}\n\n[dir] div[id$=\"demo\"] .vx-card:not(:last-of-type) {\n  margin-bottom: 2.2rem;\n}\n\n.vue-back-to-top {\n  z-index: 51000 !important;\n}\n\n.demo-alignment {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n[dir] .demo-alignment > * {\n  margin-top: 1.5rem;\n}\n\n[dir=ltr] .demo-alignment > * {\n  margin-right: 1.5rem;\n}\n\n[dir=rtl] .demo-alignment > * {\n  margin-left: 1.5rem;\n}\n\n[dir] .op-block {\n  padding: 10px;\n  border-radius: 10px;\n}\n\n[dir=ltr] .op-block {\n  -webkit-box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n[dir=rtl] .op-block {\n  -webkit-box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.1);\n          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n.no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 14.1rem);\n}\n\n/*=========================================================================================\n  File Name: _layoutVertical.scss\n  Description: Vertical Layout Styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n[dir] .main-vertical.navbar-sticky .router-content {\n  margin-top: 4.5rem;\n}\n\n.main-vertical.navbar-static .vx-navbar-wrapper .vx-navbar {\n  -webkit-box-shadow: none;\n}\n\n[dir] .main-vertical.navbar-static .vx-navbar-wrapper .vx-navbar {\n  background: transparent !important;\n          box-shadow: none;\n}\n\n[dir] .main-vertical.navbar-static .router-content {\n  margin-top: 0.2rem;\n}\n\n[dir] .no-scroll .router-view {\n  padding-bottom: 0 !important;\n}\n\n.no-scroll.navbar-floating .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 11.5rem);\n}\n\n.no-scroll.navbar-floating.footer-hidden .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 9.3rem);\n}\n\n.no-scroll.navbar-floating.footer-sticky .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 13.1rem);\n}\n\n.no-scroll.navbar-sticky .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 10.5rem);\n}\n\n.no-scroll.navbar-sticky.footer-hidden .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 8.3rem);\n}\n\n.no-scroll.navbar-sticky.footer-sticky .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 12.1rem);\n}\n\n.no-scroll.navbar-static.footer-static .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 9.25rem);\n}\n\n.no-scroll.navbar-static.footer-sticky .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 10.9rem);\n}\n\n.no-scroll.navbar-static.footer-hidden .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 7rem);\n}\n\n.no-scroll.navbar-hidden .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 6rem);\n}\n\n.no-scroll.navbar-hidden.footer-hidden .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 3.8rem);\n}\n\n.no-scroll.navbar-hidden.footer-sticky .no-scroll-content {\n  height: calc(var(--vh, 1vh) * 100 - 7.6rem);\n}\n\n/*=========================================================================================\n  File Name: _layoutHorizontal.scss\n  Description: Horizontal Layout Styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.main-horizontal .vx-navbar-wrapper.nav-menu-wrapper {\n  z-index: 41000;\n}\n\n.main-horizontal .vx-navbar-wrapper .vx-navbar {\n  z-index: 40001;\n}\n\n@media (min-width: 1200px) {\n  .main-horizontal .vx-navbar-wrapper .search-full-container .vx-auto-suggest .auto-suggest-suggestions-list {\n    width: calc(100% - 2rem) !important;\n  }\n  [dir=ltr] .main-horizontal .vx-navbar-wrapper .search-full-container .vx-auto-suggest .auto-suggest-suggestions-list {\n    margin-left: 1rem;\n  }\n  [dir=rtl] .main-horizontal .vx-navbar-wrapper .search-full-container .vx-auto-suggest .auto-suggest-suggestions-list {\n    margin-right: 1rem;\n  }\n}\n\n[dir=ltr] .main-horizontal.navbar-floating .vs-navbar.vx-navbar {\n  padding-left: 1.25rem !important;\n  padding-right: 1.25rem !important;\n}\n\n[dir=rtl] .main-horizontal.navbar-floating .vs-navbar.vx-navbar {\n  padding-right: 1.25rem !important;\n  padding-left: 1.25rem !important;\n}\n\n[dir] .main-horizontal.navbar-sticky .router-content {\n  margin-top: 4.5rem;\n}\n\n@media (min-width: 1200px) {\n  [dir] .main-horizontal.navbar-sticky .router-content {\n    margin-top: 8.89rem;\n  }\n}\n\n.main-horizontal.navbar-sticky .vx-navbar-wrapper:not(.nav-menu-wrapper) {\n  height: 62px;\n}\n\n[dir] .main-horizontal.navbar-sticky .vs-navbar:not(.vx-navbar) {\n  background-color: #f7f7f7 !important;\n}\n\n.main-horizontal.navbar-sticky .vs-navbar.vx-navbar, .main-horizontal.navbar-static .vs-navbar.vx-navbar {\n  -webkit-box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.03);\n}\n\n[dir] .main-horizontal.navbar-sticky .vs-navbar.vx-navbar, [dir] .main-horizontal.navbar-static .vs-navbar.vx-navbar {\n          box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.03);\n}\n\n@media (min-width: 1200px) {\n  [dir] .main-horizontal.navbar-static .router-content {\n    margin-top: 1rem;\n  }\n}\n\n.main-horizontal.navbar-static #content-area .content-wrapper {\n  min-height: calc(var(--vh, 1vh) * 100 - 8rem - 62px);\n}\n\n@media (min-width: 1200px) {\n  .main-horizontal.navbar-static .vx-navbar-wrapper:not(.nav-menu-wrapper) {\n    position: fixed;\n  }\n}\n\n@media (max-width: 1199px) {\n  .main-horizontal.navbar-static .vx-navbar-wrapper .vx-navbar {\n    -webkit-box-shadow: none;\n  }\n  [dir] .main-horizontal.navbar-static .vx-navbar-wrapper .vx-navbar {\n    background: transparent !important;\n            box-shadow: none;\n  }\n}\n\n@media (max-width: 1199px) {\n  .main-horizontal.navbar-hidden .vx-navbar-wrapper {\n    display: none;\n  }\n}\n\n.main-horizontal.navbar-hidden .vx-navbar-wrapper {\n  position: fixed;\n}\n\n.main-horizontal.navbar-hidden .vx-navbar-wrapper.nav-menu-wrapper {\n  display: none;\n}\n\n@media (min-width: 1200px) {\n  [dir] .main-horizontal.navbar-hidden .router-view {\n    margin-top: 4.5rem;\n  }\n}\n\n.main-horizontal:not(.navbar-static) .vx-navbar-wrapper.nav-menu-wrapper {\n  top: 62px;\n}\n\n@media (min-width: 1200px) {\n  .main-horizontal {\n    /*\n      Only applies to NavMenu in horizontal layout\n      media query is given -> because navMenu in horizontal will be visible till 1200px.\n    */\n  }\n\n  [dir] .main-horizontal.navbar-floating .router-content {\n    margin-top: 10.1rem;\n  }\n\n  [dir] .main-horizontal .vs-navbar.vx-navbar {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  [dir] .main-horizontal.no-scroll .router-view {\n    padding-bottom: 0;\n  }\n\n  .main-horizontal.no-scroll.navbar-floating .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 16rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-floating.footer-hidden .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 13.4rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-floating.footer-sticky .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 16.7rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-sticky .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 14.7rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-sticky.footer-hidden .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 12.7rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-sticky.footer-sticky .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 16.2rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-static.footer-static .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 14.75rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-static.footer-sticky .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 16.7rem);\n  }\n\n  .main-horizontal.no-scroll.navbar-static.footer-hidden .no-scroll-content {\n    height: calc(var(--vh, 1vh) * 100 - 13rem);\n  }\n}\n\n/*=========================================================================================\n  File Name: _theNavbar.scss\n  Description: The navbar styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.vs-navbar.navbar-skelton {\n  width: 100%;\n  transition: all .5s;\n  z-index: 10000;\n}\n\n[dir] .vs-navbar.navbar-skelton {\n  padding: .8rem 2.2rem;\n  -webkit-transition: all .5s;\n}\n\n.navbar-sticky .vx-navbar-wrapper,\n.navbar-floating .vx-navbar-wrapper {\n  position: fixed;\n}\n\n.vx-navbar-wrapper {\n  background-repeat-x: repeat;\n  z-index: 41001;\n  width: 100%;\n  height: 103px;\n  background-repeat-y: no-repeat;\n  top: 0;\n}\n\n[dir] .vx-navbar-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n}\n\n[dir=ltr] .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, rgba(248, 248, 248, 0.95)), color-stop(73%, rgba(248, 248, 248, 0.46)), to(rgba(255, 255, 255, 0)));\n}\n\n[dir=rtl] .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, rgba(248, 248, 248, 0.95)), color-stop(73%, rgba(248, 248, 248, 0.46)), to(rgba(255, 255, 255, 0)));\n}\n\n.vx-navbar-wrapper .vx-navbar .vs-con-items {\n  width: 100%;\n}\n\n[dir] .vx-navbar-wrapper .vx-navbar .vs-con-items .search-full-container {\n  background: #fff;\n}\n\n.vx-navbar-wrapper .vx-navbar .vs-con-items .vx-auto-suggest {\n  color: #626262;\n}\n\n@media (min-width: 1201px) {\n  .main-vertical .vx-navbar-wrapper {\n    width: calc(100% - 260px);\n  }\n}\n\n.content-area-lg .vx-navbar-wrapper {\n  width: calc(100% - 80px);\n}\n\n[dir] .show-overlay .vx-navbar-wrapper {\n  background: linear-gradient(to bottom, rgba(44, 48, 60, 0.9) 44%, rgba(44, 48, 60, 0.43) 73%, rgba(44, 48, 60, 0) 100%);\n}\n\n[dir=ltr] .show-overlay .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, rgba(44, 48, 60, 0.9)), color-stop(73%, rgba(44, 48, 60, 0.43)), to(rgba(44, 48, 60, 0)));\n}\n\n[dir=rtl] .show-overlay .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, rgba(44, 48, 60, 0.9)), color-stop(73%, rgba(44, 48, 60, 0.43)), to(rgba(44, 48, 60, 0)));\n}\n\n@media (min-width: 577px) {\n  [dir] .navbar-floating .vx-navbar-wrapper {\n    padding: 1.3rem 2.2rem 2.2rem;\n  }\n}\n\n[dir] .navbar-floating .vx-navbar {\n  border-radius: .5rem;\n  padding: .8rem 1rem;\n}\n\n[dir] .navbar-floating .vx-navbar .search-full-container {\n  border-radius: .5rem;\n}\n\n[dir] .navbar-sticky .vx-navbar-wrapper {\n  background: none;\n}\n\n.navbar-sticky .content-area-lg .vx-navbar-wrapper .vx-navbar {\n  width: 100%;\n}\n\n.navbar-static .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list,\n.navbar-sticky .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list {\n  width: calc(100% - 2rem) !important;\n}\n\n[dir=ltr] .navbar-static .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list, [dir=ltr] .navbar-sticky .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list {\n  margin-left: 1rem;\n}\n\n[dir=rtl] .navbar-static .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list, [dir=rtl] .navbar-sticky .vx-navbar-wrapper .vx-navbar .vx-auto-suggest .auto-suggest-suggestions-list {\n  margin-right: 1rem;\n}\n\n.main-vertical.navbar-static .vx-navbar-wrapper .vx-navbar {\n  z-index: 41001;\n}\n\n.navbar-static .vx-navbar-wrapper {\n  height: auto;\n  width: 100%;\n}\n\n[dir] .navbar-static .vx-navbar-wrapper {\n  background: none;\n}\n\n.navbar-static .vx-navbar-wrapper .vx-navbar {\n  position: relative;\n}\n\n[dir] .navbar-static .router-view {\n  padding-top: 1rem;\n}\n\n.navbar-hidden.main-vertical .vx-navbar-wrapper {\n  display: none;\n}\n\n.search-full-container {\n  z-index: 50000;\n}\n\n.search-full-container .vx-auto-suggest > div {\n  height: 100%;\n}\n\n[dir] .search-full-container .vx-auto-suggest input[type=\"text\"], [dir] .search-full-container .vx-auto-suggest .input-span-placeholder {\n  padding: 1.6rem 3rem !important;\n}\n\n.search-full-container .vx-auto-suggest .vs-input--icon.feather {\n  top: 32% !important;\n}\n\n[dir=ltr] .search-full-container .vx-auto-suggest .vs-input--icon.feather {\n  left: 0.8rem;\n}\n\n[dir=rtl] .search-full-container .vx-auto-suggest .vs-input--icon.feather {\n  right: 0.8rem;\n}\n\n.search-full-container > div.feather-icon {\n  position: absolute !important;\n}\n\n.bookmark-dropdown {\n  z-index: 41002;\n}\n\n.navbar-custom .vs-navbar--btn-responsive {\n  display: none !important;\n}\n\n.navbar-custom .vs-spacer {\n  display: block !important;\n}\n\n.navbar-custom .vs-con-items {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  width: 100%;\n}\n\n@media (max-width: 1200px) {\n  [dir] .navbar-sticky .vx-navbar-wrapper .vx-navbar {\n    padding: .8rem 2.2rem;\n  }\n}\n\n@media (max-width: 576px) {\n  [dir] .vx-navbar-wrapper {\n    padding: 1.2rem;\n  }\n\n  [dir] .navbar-sticky .vx-navbar-wrapper {\n    padding: 0;\n  }\n\n  [dir] .navbar-sticky .vx-navbar-wrapper .vx-navbar {\n    padding: .8rem 1.5rem;\n  }\n\n  [dir] .navbar-static .vx-navbar-wrapper {\n    padding: 0;\n  }\n\n  [dir] .navbar-static .vx-navbar-wrapper .vx-navbar {\n    padding: .8rem 1.5rem;\n  }\n\n  [dir] .navbar-static.main-vertical .router-view .router-content {\n    margin-top: 0;\n  }\n}\n\n.starred-page:hover,\n.starred-page--more:hover {\n  color: rgba(var(--vs-primary), 1);\n}\n\n.i18n-dropdown .vs-dropdown--item-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n@media screen and (max-width: 364px) {\n  .i18n-dropdown {\n    width: 95vw;\n  }\n  [dir=ltr] .i18n-dropdown {\n    left: 90vw !important;\n  }\n  [dir=rtl] .i18n-dropdown {\n    right: 90vw !important;\n  }\n\n  .i18n-dropdown .vs-dropdown--menu--after {\n    display: none;\n  }\n}\n\n.cart-dropdown {\n  width: 365px;\n}\n\n.cart-dropdown .cart-dropdown-item-img {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  transition: .35s;\n}\n\n[dir] .cart-dropdown .cart-dropdown-item-img {\n  -webkit-transition: .35s;\n}\n\n.notification-dropdown,\n.cart-dropdown {\n  width: 365px;\n}\n\n@media screen and (max-width: 500px) {\n  .notification-dropdown,\n    .cart-dropdown {\n    width: 95vw;\n  }\n  [dir=ltr] .notification-dropdown, [dir=ltr] .cart-dropdown {\n    left: 97.5vw !important;\n  }\n  [dir=rtl] .notification-dropdown, [dir=rtl] .cart-dropdown {\n    right: 97.5vw !important;\n  }\n\n  .notification-dropdown .vs-dropdown--menu--after,\n      .cart-dropdown .vs-dropdown--menu--after {\n    display: none;\n  }\n}\n\n[dir] .notification-dropdown .notification:hover, [dir] .cart-dropdown .notification:hover {\n  background-color: #f7f7f7;\n}\n\n[dir] .notification-dropdown .checkout-footer, [dir] .notification-dropdown .notification-footer, [dir] .cart-dropdown .checkout-footer, [dir] .cart-dropdown .notification-footer {\n  background-color: #f8f8f8;\n}\n\n.scroll-area--nofications-dropdown,\n.scroll-area--cart-items-dropdowm {\n  position: relative;\n  width: 100%;\n  max-height: 25rem;\n}\n\n[dir] .scroll-area--nofications-dropdown, [dir] .scroll-area--cart-items-dropdowm {\n  margin: auto;\n}\n\n.scroll-area--nofications-dropdown:not(.ps),\n  .scroll-area--cart-items-dropdowm:not(.ps) {\n  overflow-y: auto;\n}\n\n@media screen and (max-height: 334px) {\n  .vx-navbar-dropdown {\n    top: calc(var(--vh, 1vh) * 100 - 82.5vh) !important;\n  }\n\n  .vx-navbar-dropdown .vs-dropdown--menu--after {\n    display: none;\n  }\n}\n\n/*=========================================================================================\n    File Name: _footer.scss\n    Description: Footer styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.footer-sticky .the-footer {\n  position: fixed;\n  bottom: 0;\n  width: calc(100% - 260px);\n  -webkit-box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.05);\n  z-index: 40000;\n}\n\n[dir] .footer-sticky .the-footer {\n  background: #fff;\n          box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n\n.footer-sticky .content-area-lg .the-footer {\n  width: calc(100% - 80px);\n}\n\n.footer-sticky .content-area-full .the-footer {\n  width: 100%;\n}\n\n[dir] .footer-sticky .router-view {\n  padding-bottom: 5rem;\n}\n\n.footer-hidden .the-footer {\n  display: none;\n}\n\n[dir] .the-footer {\n  padding: 1rem 2.2rem;\n}\n\n/*=========================================================================================\n  File Name: _typography.scss\n  Description: partial- typography styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\nbody {\n  color: #626262;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: #2c2c2c;\n}\n\nh1, .h1 {\n  font-size: 28px;\n}\n\nh2, .h2 {\n  font-size: 24.36px;\n}\n\nh3, .h3 {\n  font-size: 21.14px;\n}\n\nh4, .h4 {\n  font-size: 18.48px;\n}\n\nh5, .h5 {\n  font-size: 15.96px;\n}\n\nh6, .h6 {\n  font-size: 14px;\n}\n\n.vs-tooltip h4 {\n  color: #fff;\n}\n\na:active,\na:visited,\na:hover,\na {\n  color: rgba(var(--vs-primary), 1);\n}\n\nu {\n  text-decoration: underline;\n}\n\n/*=========================================================================================\n    File Name: _misc.scss\n    Description: partial- misc styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\ncode {\n  font-family: \"Montserrat\", Helvetica, Arial, sans-serif;\n}\n\n[dir] code {\n  background: #eee;\n  padding: 0.1rem .3rem;\n  border-radius: 3px;\n}\n\nul,\nol {\n  list-style-type: none;\n}\n\n[dir] ul, [dir] ol {\n  margin: 0;\n  padding: 0;\n}\n\n[dir] .layout--full-page .bg-img {\n  background-image: url(" + escape(__webpack_require__(/*! ../images/pages/vuexy-login-bg.jpg */ "./src/assets/images/pages/vuexy-login-bg.jpg")) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n[dir] .layout--full-page .full-page-bg-color {\n  background-color: #eff2f7;\n}\n\n.single-counter {\n  display: inline-block;\n  position: relative;\n  width: 105px;\n}\n\n[dir] .single-counter {\n  padding: 18px 10px 10px;\n}\n\n.single-counter span {\n  display: block;\n}\n\n[dir] .single-counter span {\n  text-align: center;\n}\n\n.single-counter .timer {\n  font-size: 3rem;\n}\n\n.chat-card-log {\n  height: 240px;\n}\n\n.vjs-poster {\n  width: 100% !important;\n}\n\n[dir] .vjs-poster {\n  background-size: cover !important;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\ni.feather {\n  font-weight: 100;\n}\n\n.feather.feather-menu {\n  z-index: 9;\n}\n\n.scroll-area {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n[dir] .scroll-area {\n  margin: auto;\n}\n\n.scroll-area:not(.ps) {\n  overflow-y: auto;\n}\n\n/*=========================================================================================\n  File Name: _extraComponents.scss\n  Description: partial - imports extra components styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n  File Name: _awesomeSwiper.scss\n  Description: Styles for awesome swiper plugin\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n[dir] .swiper-pagination-bullet-active {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n/*=========================================================================================\n  File Name: _formWizard.scss\n  Description: Styles for form wizard externsion.\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {\n  top: 33px !important;\n}\n\n.vue-form-wizard.md .wizard-navigation .wizard-nav .wizard-icon-circle {\n  width: 55px;\n  height: 55px;\n}\n\n[dir] .vue-form-wizard.md .wizard-navigation .wizard-nav .wizard-icon-circle {\n  border: 3px solid #cccccc;\n}\n\n.vue-form-wizard.md .wizard-navigation .wizard-nav .wizard-icon-circle .wizard-icon {\n  font-size: 1.5rem;\n}\n\n.vue-form-wizard.md .wizard-navigation .wizard-nav .stepTitle {\n  color: #626262;\n}\n\ni.wizard-icon {\n  font-style: inherit;\n}\n\n[dir] .stepTitle {\n  margin-top: .5rem;\n}\n\n[dir] .select-large input.vs-select--input {\n  padding: 11px;\n}\n\n/*=========================================================================================\n    File Name: _vueSelect.scss\n    Description: vue-select component style.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.v-select:not(.vs--single) .vs__selected {\n  font-size: .9rem;\n}\n\n[dir] .v-select .vs__dropdown-toggle {\n  padding: .59px 0 4px 0;\n}\n\n.v-select .vs__dropdown-toggle .vs__search {\n  color: #626262;\n}\n\n.v-select .vs__dropdown-toggle .vs__deselect svg {\n  stroke: #626262;\n  opacity: 0.5;\n}\n\n[dir] .v-select .vs__dropdown-toggle .vs__deselect svg {\n  margin-top: 0 !important;\n}\n\n.v-select .vs__dropdown-toggle .vs__actions .vs__clear {\n  color: #626262;\n}\n\n.v-select .vs__dropdown-menu .vs__dropdown-option--highlight {\n  color: #fff !important;\n}\n\n.v-select .vs__dropdown-menu .vs__dropdown-option {\n  color: #626262;\n}\n\n.v-select .vs__selected {\n  color: #626262;\n}\n\n[dir] .theme-dark .v-select .vs__dropdown-toggle {\n  background: #262c49;\n}\n\n.theme-dark .v-select .vs__dropdown-toggle .vs__clear svg {\n  stroke: #b8c2cc;\n}\n\n.theme-dark .v-select .vs__dropdown-toggle .vs__deselect svg {\n  stroke: #b8c2cc;\n  opacity: 0.7;\n}\n\n[dir] .theme-dark .v-select:not(.vs--single) .vs__selected {\n  background: #10163a;\n  border: none;\n}\n\n.theme-dark .v-select .vs__selected {\n  color: #fff;\n}\n\n.theme-dark .v-select .vs__open-indicator {\n  fill: #b8c2cc;\n}\n\n[dir] .theme-dark .v-select .vs__dropdown-menu {\n  background: #262c49;\n}\n\n.theme-dark .v-select .vs__dropdown-menu .vs__dropdown-option {\n  color: #c2c6dc;\n}\n\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n\n@-webkit-keyframes vSelectSpinner-ltr {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes vSelectSpinner-rtl {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes vSelectSpinner-ltr {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes vSelectSpinner-rtl {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n/* Dropdown Default Transition */\n\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n\n.v-select[dir=\"rtl\"] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n\n.v-select[dir=\"rtl\"] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n\n.v-select[dir=\"rtl\"] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n\n.v-select[dir=\"rtl\"] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n}\n\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n\n[dir] .vs__open-indicator {\n          transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);\n  list-style: none;\n}\n\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-top-style: none;\n  border-radius: 0 0 4px 4px;\n  background: #fff;\n}\n\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n\n.vs__dropdown-option--highlight {\n  color: #fff;\n}\n\n[dir] .vs__dropdown-option--highlight {\n  background: #7367F0;\n}\n\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n\n[dir] .vs__selected {\n  background-color: #f0f0f0;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: .4;\n}\n\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          box-shadow: none;\n}\n\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n\n.vs__search::-webkit-input-placeholder {\n  color: inherit;\n}\n\n.vs__search::-moz-placeholder {\n  color: inherit;\n}\n\n.vs__search:-ms-input-placeholder {\n  color: inherit;\n}\n\n.vs__search::-ms-input-placeholder {\n  color: inherit;\n}\n\n.vs__search::placeholder {\n  color: inherit;\n}\n\n/**\n    States\n */\n\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: .2;\n}\n\n/* Loading Spinner */\n\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  transition: opacity .1s;\n}\n\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          transform: translateZ(0);\n  -webkit-transition: opacity .1s;\n}\n\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n\n/*=========================================================================================\n    File Name: _charts.scss\n    Description: Styles for charts.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.echarts {\n  width: 100% !important;\n}\n\n/*=========================================================================================\n    File Name: _contextMenu.scss\n    Description: Styles for context menu\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.v-context {\n  overflow: hidden;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14) !important;\n  z-index: 51000 !important;\n}\n\n[dir] .v-context {\n  padding: 0 !important;\n  border-radius: .4rem !important;\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14) !important;\n}\n\n.v-context li a {\n  color: inherit !important;\n}\n\n[dir] .v-context li a {\n  padding: .7rem 1rem !important;\n}\n\n[dir] .v-context li a:focus, [dir] .v-context li a:hover {\n  background: #eee !important;\n}\n\n[dir] .theme-dark .v-context {\n  background: #262c49 !important;\n}\n\n.theme-dark .v-context li a {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark .v-context li a:focus, [dir] .theme-dark .v-context li a:hover {\n  background: #10163a !important;\n}\n\n/*=========================================================================================\n    File Name: _quillEditor.scss\n    Description: Styles for quill editor externsion.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.quill-editor .ql-bubble .ql-tooltip {\n  z-index: 51000;\n}\n\n[dir] .theme-dark .quill-editor .ql-snow.ql-toolbar, [dir] .theme-dark .quill-editor .ql-snow.ql-container {\n  border-color: #414561;\n}\n\n/*=========================================================================================\n    File Name: _datePicker.scss\n    Description: Styles for datepicker component.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.vdp-datepicker input {\n  font-size: 1rem;\n  color: #626262;\n  width: 100%;\n}\n\n[dir] .vdp-datepicker input {\n  padding: .7rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.vdp-datepicker input[disabled] {\n  opacity: .5;\n}\n\n.vdp-datepicker .vdp-datepicker__calendar {\n  z-index: 401;\n}\n\n[dir] .vdp-datepicker .vdp-datepicker__calendar {\n  border-radius: .5rem;\n}\n\n[dir=ltr] .vdp-datepicker .vdp-datepicker__calendar header .pre {\n  border-top-left-radius: .5rem;\n}\n\n[dir=rtl] .vdp-datepicker .vdp-datepicker__calendar header .pre {\n  border-top-right-radius: .5rem;\n}\n\n[dir=ltr] .vdp-datepicker .vdp-datepicker__calendar header .next {\n  border-top-right-radius: .5rem;\n}\n\n[dir=rtl] .vdp-datepicker .vdp-datepicker__calendar header .next {\n  border-top-left-radius: .5rem;\n}\n\n[dir] .vdp-datepicker .day.blank {\n  background: transparent;\n}\n\n.vdp-datepicker .cell.day {\n  height: 37px;\n  line-height: 37px;\n  width: 12.285714286%;\n}\n\n[dir] .vdp-datepicker .cell.day {\n  border-radius: 50%;\n}\n\n[dir=ltr] .vdp-datepicker .cell.day {\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n[dir=rtl] .vdp-datepicker .cell.day {\n  margin-right: 1%;\n  margin-left: 1%;\n}\n\n[dir] .vdp-datepicker .cell.month, [dir] .vdp-datepicker .cell.year {\n  border-radius: .5rem;\n}\n\n[dir] .vdp-datepicker .cell:not(.blank):hover {\n  border-color: rgba(0, 0, 0, 0) !important;\n  background-color: #eee;\n}\n\n.vdp-datepicker .cell.day.highlighted {\n  color: #fff;\n}\n\n[dir] .vdp-datepicker .cell.day.highlighted {\n  background: rgba(var(--vs-primary), 0.7);\n}\n\n[dir] .vdp-datepicker .cell.day.highlighted:hover {\n  background: rgba(var(--vs-primary), 1);\n}\n\n.vdp-datepicker .cell.selected {\n  color: #fff;\n}\n\n[dir] .vdp-datepicker .cell.selected {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .vdp-datepicker .cell.selected:hover {\n  background: rgba(var(--vs-primary), 1);\n}\n\n/*=========================================================================================\n    File Name: _datetimePicker.scss\n    Description: Styles for datetime picker\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.flatpickr-calendar {\n  width: calc(307.875px + 13px * 2) !important;\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n  overflow: hidden;\n}\n\n[dir] .flatpickr-calendar {\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n  border-radius: .5rem !important;\n}\n\n.flatpickr-calendar.hasWeeks {\n  width: calc(307.875px + 13px * 2 + 34px) !important;\n}\n\n.flatpickr-calendar.arrowTop:after, .flatpickr-calendar.arrowTop:before {\n  display: none;\n}\n\n.flatpickr-calendar.arrowBottom:after, .flatpickr-calendar.arrowBottom:before {\n  display: none;\n}\n\n.flatpickr-calendar .numInputWrapper {\n  width: 5.5ch !important;\n}\n\n.flatpickr-calendar .numInputWrapper .numInput.cur-year {\n  font-weight: 600 !important;\n  color: #626262;\n}\n\n[dir] .flatpickr-calendar .numInputWrapper:hover {\n  background: none;\n}\n\n[dir] .flatpickr-calendar .numInputWrapper:hover .arrowUp, [dir] .flatpickr-calendar .numInputWrapper:hover .arrowDown {\n  border: none;\n}\n\n.flatpickr-calendar .flatpickr-months,\n  .flatpickr-calendar .flatpickr-month {\n  height: 44px !important;\n}\n\n[dir] .flatpickr-calendar .flatpickr-months {\n  padding: 0;\n}\n\n.flatpickr-calendar .flatpickr-monthDropdown-months {\n  color: #626262;\n  font-size: 1rem !important;\n  font-weight: 500 !important;\n  height: 27px;\n}\n\n[dir] .flatpickr-calendar .flatpickr-monthDropdown-months {\n  border: 1px solid rgba(0, 0, 0, 0.3) !important;\n  border-radius: .5rem !important;\n}\n\n[dir=ltr] .flatpickr-calendar .flatpickr-monthDropdown-months {\n  margin-left: 22px !important;\n  margin-right: 3px !important;\n}\n\n[dir=rtl] .flatpickr-calendar .flatpickr-monthDropdown-months {\n  margin-right: 22px !important;\n  margin-left: 3px !important;\n}\n\n[dir] .flatpickr-calendar .flatpickr-monthDropdown-months:hover {\n  background: transparent !important;\n}\n\n.flatpickr-calendar .flatpickr-current-month {\n  bottom: -11px;\n}\n\n[dir] .flatpickr-calendar .flatpickr-current-month {\n  padding-top: 0;\n}\n\n.flatpickr-calendar .flatpickr-current-month .numInputWrapper {\n  vertical-align: middle;\n}\n\n[dir] .flatpickr-calendar .flatpickr-prev-month, [dir] .flatpickr-calendar .flatpickr-next-month, [dir] .flatpickr-calendar .flatpickr-innerContainer {\n  padding: 13px !important;\n}\n\n.flatpickr-calendar .flatpickr-prev-month,\n  .flatpickr-calendar .flatpickr-next-month {\n  top: calc(13px - 3px) !important;\n}\n\n[dir=ltr] .flatpickr-calendar .flatpickr-prev-month {\n  left: 13px !important;\n}\n\n[dir=rtl] .flatpickr-calendar .flatpickr-prev-month {\n  right: 13px !important;\n}\n\n[dir=ltr] .flatpickr-calendar .flatpickr-next-month {\n  right: 13px !important;\n}\n\n[dir=rtl] .flatpickr-calendar .flatpickr-next-month {\n  left: 13px !important;\n}\n\n.flatpickr-calendar.inline {\n  display: block !important;\n}\n\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.selected.inRange, .flatpickr-calendar .flatpickr-day.startRange.inRange, .flatpickr-calendar .flatpickr-day.endRange.inRange, .flatpickr-calendar .flatpickr-day.selected:focus, .flatpickr-calendar .flatpickr-day.startRange:focus, .flatpickr-calendar .flatpickr-day.endRange:focus, .flatpickr-calendar .flatpickr-day.selected:hover, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover, .flatpickr-calendar .flatpickr-day.selected.prevMonthDay, .flatpickr-calendar .flatpickr-day.startRange.prevMonthDay, .flatpickr-calendar .flatpickr-day.endRange.prevMonthDay, .flatpickr-calendar .flatpickr-day.selected.nextMonthDay, .flatpickr-calendar .flatpickr-day.startRange.nextMonthDay, .flatpickr-calendar .flatpickr-day.endRange.nextMonthDay {\n  -webkit-box-shadow: none;\n  color: #fff;\n}\n\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.selected.inRange, [dir] .flatpickr-calendar .flatpickr-day.startRange.inRange, [dir] .flatpickr-calendar .flatpickr-day.endRange.inRange, [dir] .flatpickr-calendar .flatpickr-day.selected:focus, [dir] .flatpickr-calendar .flatpickr-day.startRange:focus, [dir] .flatpickr-calendar .flatpickr-day.endRange:focus, [dir] .flatpickr-calendar .flatpickr-day.selected:hover, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover, [dir] .flatpickr-calendar .flatpickr-day.selected.prevMonthDay, [dir] .flatpickr-calendar .flatpickr-day.startRange.prevMonthDay, [dir] .flatpickr-calendar .flatpickr-day.endRange.prevMonthDay, [dir] .flatpickr-calendar .flatpickr-day.selected.nextMonthDay, [dir] .flatpickr-calendar .flatpickr-day.startRange.nextMonthDay, [dir] .flatpickr-calendar .flatpickr-day.endRange.nextMonthDay {\n  background: #7367F0 !important;\n  box-shadow: none;\n  border-color: #7367F0 !important;\n}\n\n.flatpickr-input,\n.flatpickr-input[type=\"hidden\"] + input {\n  font-size: 1rem;\n  color: #626262;\n}\n\n[dir] .flatpickr-input, [dir] .flatpickr-input[type=\"hidden\"] + input {\n  padding: .7rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n[dir] .flatpickr-input.active {\n  border: 1px solid #7367F0;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367F0 !important;\n}\n\n[dir] .theme-dark .flatpickr-calendar {\n  background: #10163a;\n  border: 1px solid #414561;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-month,\n  .theme-dark .flatpickr-calendar .flatpickr-weekday {\n  color: #fff;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-prev-month svg,\n  .theme-dark .flatpickr-calendar .flatpickr-next-month svg {\n  fill: #fff;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-monthDropdown-months {\n  background: #262c49 !important;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-monthDropdown-months option {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-monthDropdown-months option {\n  background: #10163a !important;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-day {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-day.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.prevMonthDay.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.nextMonthDay.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.today.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.prevMonthDay.today.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.nextMonthDay.today.inRange, [dir] .theme-dark .flatpickr-calendar .flatpickr-day:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.prevMonthDay:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.nextMonthDay:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-day:focus, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.prevMonthDay:focus, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.nextMonthDay:focus {\n  background: #262c49;\n  border-color: #262c49;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-day.today {\n  border-color: #959ea9;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-day.today:hover, .theme-dark .flatpickr-calendar .flatpickr-day.today:focus {\n  color: #fff;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-day.today:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-day.today:focus {\n  background: #262c49;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-day.prevMonthDay, .theme-dark .flatpickr-calendar .flatpickr-day.nextMonthDay, .theme-dark .flatpickr-calendar .flatpickr-day.disabled {\n  opacity: .3;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-time {\n  border-top-color: #414561 !important;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-time input {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-time input:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover, [dir] .theme-dark .flatpickr-calendar .flatpickr-time input:focus, [dir] .theme-dark .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:focus {\n  background: #262c49;\n}\n\n.theme-dark .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-time ::-moz-selection {\n  background: transparent;\n}\n\n[dir] .theme-dark .flatpickr-calendar .flatpickr-time ::selection {\n  background: transparent;\n}\n\n[dir] .theme-dark .flatpickr-calendar .numInputWrapper .arrowUp:after {\n  border-bottom-color: #fff;\n}\n\n[dir] .theme-dark .flatpickr-calendar .numInputWrapper .arrowDown:after {\n  border-top-color: #fff;\n}\n\n/*=========================================================================================\n    File Name: _themes.scss\n    Description: partial- themes - imports theme styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _themeDark.scss\n    Description: partial- Styles for dark theme\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.theme-dark {\n  --vs-dark: 184,194,204;\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .main-vertical.navbar-static .vx-navbar-wrapper {\n  background: none;\n}\n\n.theme-dark .main-horizontal .menu-item .h-nav-menu-item.disabled-item {\n  opacity: .3;\n}\n\n@media (min-width: 1200px) {\n  [dir] .theme-dark .main-horizontal .vx-navbar-wrapper:not(.nav-menu-wrapper) {\n    background: none !important;\n  }\n}\n\n[dir] .theme-dark .main-horizontal.navbar-sticky .vs-navbar:not(.vx-navbar) {\n  background-color: #262c49 !important;\n}\n\n[dir] .theme-dark .main-horizontal.navbar-static .vs-navbar:not(.vx-navbar).d-theme-dark-light-bg {\n  background-color: #262c49 !important;\n}\n\n.theme-dark .content-area__heading h2 {\n  color: #ebeefd;\n}\n\n.theme-dark code {\n  color: #b8c2cc;\n}\n\n[dir] .theme-dark code {\n  background: #262c49;\n}\n\n[dir] .theme-dark pre[class*=\"language-\"] {\n  background-color: #1E1E1E;\n  text-shadow: none;\n}\n\n[dir] .theme-dark pre[class*=\"language-\"] code {\n  background-color: transparent;\n}\n\n[dir] .theme-dark pre[class*=\"language-\"] code[class*=\"language-\"] {\n  text-shadow: none;\n}\n\n.theme-dark label {\n  color: #c2c6dc;\n}\n\n.theme-dark h1,\n  .theme-dark h2,\n  .theme-dark h3,\n  .theme-dark h4,\n  .theme-dark h5,\n  .theme-dark h6 {\n  color: #ebeefd;\n}\n\n[dir] .theme-dark ul.bordered-items li {\n  border-color: #414561 !important;\n}\n\n[dir] .theme-dark .notification-dropdown .notification:hover, [dir] .theme-dark .notification-dropdown .cart-item:hover, [dir] .theme-dark .cart-dropdown .notification:hover, [dir] .theme-dark .cart-dropdown .cart-item:hover {\n  background: #10163a;\n}\n\n[dir] .theme-dark .notification-dropdown .checkout-footer, [dir] .theme-dark .notification-dropdown .notification-footer, [dir] .theme-dark .cart-dropdown .checkout-footer, [dir] .theme-dark .cart-dropdown .notification-footer {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .notification-dropdown .checkout-footer:hover, [dir] .theme-dark .notification-dropdown .notification-footer:hover, [dir] .theme-dark .cart-dropdown .checkout-footer:hover, [dir] .theme-dark .cart-dropdown .notification-footer:hover {\n  background-color: #10163a;\n}\n\n.theme-dark .vs-component.vs-notifications.vs-noti-dark {\n  color: #22292f !important;\n}\n\n[dir] .theme-dark .vs-component.vs-notifications.vs-noti-dark .filling {\n  background: #b8c2cc !important;\n}\n\n.theme-dark .vs-component.vs-notifications.vs-noti-dark h3 {\n  color: #22292f !important;\n}\n\n[dir] .theme-dark .vx-card {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .vx-card.card-border {\n  border-color: #414561;\n}\n\n.theme-dark .vx-card .vx-card__title h4 {\n  color: #ebeefd;\n}\n\n.theme-dark .vx-card .con-vs-alert-dark {\n  color: #dae1e7;\n}\n\n[dir] .theme-dark .vx-card .code-content pre[class^=\"language-\"] {\n  background-color: #262c49;\n  text-shadow: none;\n}\n\n[dir] .theme-dark .vx-card .code-content pre[class^=\"language-\"] code {\n  background-color: transparent;\n}\n\n[dir] .theme-dark .vx-card .code-content pre[class^=\"language-\"] code[class*=\"language-\"] {\n  text-shadow: none;\n}\n\n.theme-dark .vx-card .vx-card__body .con-vs-alert-primary h4 {\n  color: rgba(var(--vs-primary), 1);\n}\n\n.theme-dark .vx-card .vx-card__body .con-vs-alert-success h4 {\n  color: rgba(var(--vs-success), 1);\n}\n\n.theme-dark .vx-card .vx-card__body .con-vs-alert-danger h4 {\n  color: rgba(var(--vs-danger), 1);\n}\n\n.theme-dark .vx-card .vx-card__body .con-vs-alert-info h4 {\n  color: rgba(var(--vs-info), 1);\n}\n\n.theme-dark .vx-card .vx-card__body .con-vs-alert-warning h4 {\n  color: rgba(var(--vs-warning), 1);\n}\n\n[dir] .theme-dark .vx-card .tasks-today-container .tasks-today__task:hover {\n  background: #212744 !important;\n}\n\n[dir] .theme-dark .vx-navbar-wrapper {\n  background: linear-gradient(to bottom, rgba(44, 48, 60, 0.9) 44%, rgba(44, 48, 60, 0.43) 73%, rgba(44, 48, 60, 0) 100%);\n}\n\n[dir=ltr] .theme-dark .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, rgba(44, 48, 60, 0.9)), color-stop(73%, rgba(44, 48, 60, 0.43)), to(rgba(44, 48, 60, 0)));\n}\n\n[dir=rtl] .theme-dark .vx-navbar-wrapper {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, rgba(44, 48, 60, 0.9)), color-stop(73%, rgba(44, 48, 60, 0.43)), to(rgba(44, 48, 60, 0)));\n}\n\n[dir] .theme-dark .vx-navbar-wrapper .vs-navbar .search-full-container {\n  background-color: #10163a !important;\n}\n\n[dir] .theme-dark .vx-navbar-wrapper .vs-navbar .search-full-container .vx-auto-suggest input {\n  background: #10163a;\n}\n\n.theme-dark .vx-navbar-wrapper .vs-navbar .vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion-group__suggestion {\n  color: #c2c6dc;\n}\n\n.theme-dark .vx-navbar-wrapper .vs-navbar .vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion-group__suggestion.vx-auto-suggest__current-selected {\n  color: #fff;\n}\n\n[dir] .theme-dark .vx-navbar-wrapper .vs-navbar .vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion-group__suggestion.vx-auto-suggest__current-selected {\n  background: #10163a;\n}\n\n[dir] .theme-dark .v-nav-menu .vs-sidebar {\n  background-color: #10163a;\n}\n\n.theme-dark .v-nav-menu .shadow-bottom {\n  width: 94%;\n}\n\n[dir] .theme-dark .v-nav-menu .shadow-bottom {\n  background: linear-gradient(to bottom, #0f1642 44%, rgba(15, 22, 66, 0.51) 73%, rgba(44, 48, 60, 0) 100%);\n}\n\n[dir=ltr] .theme-dark .v-nav-menu .shadow-bottom {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, #0f1642), color-stop(73%, rgba(15, 22, 66, 0.51)), to(rgba(44, 48, 60, 0)));\n}\n\n[dir=rtl] .theme-dark .v-nav-menu .shadow-bottom {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, #0f1642), color-stop(73%, rgba(15, 22, 66, 0.51)), to(rgba(44, 48, 60, 0)));\n}\n\n.theme-dark .v-nav-menu .scroll-area-v-nav-menu .feather-icon,\n  .theme-dark .v-nav-menu .scroll-area-v-nav-menu span:not(.vs-chip--text) {\n  color: #c2c6dc;\n}\n\n.theme-dark .v-nav-menu .scroll-area-v-nav-menu a:not(.router-link-active) .feather-icon svg,\n  .theme-dark .v-nav-menu .scroll-area-v-nav-menu a:not(.router-link-active) .feather-icon span {\n  color: #c2c6dc;\n}\n\n.theme-dark .v-nav-menu .scroll-area-v-nav-menu a.router-link-active span {\n  color: #fff;\n}\n\n[dir] .theme-dark .v-nav-menu .scroll-area-v-nav-menu .vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #262c49;\n}\n\n[dir] .theme-dark .v-nav-menu .scroll-area-v-nav-menu .vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  background: #262c49;\n}\n\n[dir] .theme-dark .ps:hover > .ps__scrollbar-y-rail:hover {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .grid-demo__layout-container .vs-row .vs-col {\n  background-color: #212744;\n}\n\n[dir] .theme-dark .grid-demo__layout-container .vs-row .vs-col:last-of-type {\n  background-color: #212744;\n}\n\n[dir] .theme-dark .grid-demo__layout-container--block .vs-row {\n  background-color: #212744;\n}\n\n[dir] .theme-dark .chat-card-log .flex-row-reverse .msg.chat-sent-msg {\n  background-color: #10163a !important;\n}\n\n[dir] .theme-dark .chat-card-log .msg {\n  background-color: #212744 !important;\n}\n\n[dir] .theme-dark .chat-input-container, [dir] .theme-dark .chat__input {\n  background-color: #10163a !important;\n  border-top: 1px solid #212744;\n}\n\n[dir] .theme-dark #chat-app .chat__profile-search .vs-inputx {\n  border-color: #414561 !important;\n}\n\n[dir] .theme-dark #chat-app #chat-list-sidebar .chat-scroll-area .chat__contact:hover {\n  background: #10163a;\n}\n\n[dir] .theme-dark #chat-app .chat__header header {\n  background: #212744 !important;\n}\n\n.theme-dark #chat-app .chat__header header h6 {\n  color: #ebeefd;\n}\n\n[dir] .theme-dark #chat-app .chat__bg {\n  background-color: #171e49;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236f76a1' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n[dir] .theme-dark #chat-app .chat__bg .select-none {\n  background-color: #212744 !important;\n}\n\n.theme-dark #chat-app .chat__bg h4 {\n  color: #ebeefd;\n}\n\n[dir] .theme-dark #chat-app .chat__bg h4 {\n  background-color: #212744 !important;\n}\n\n[dir] .theme-dark #chat-app .chat__bg .msg {\n  background-color: #10163a !important;\n  border-color: #dae1e7 !important;\n}\n\n[dir] .theme-dark #chat-app .chat__bg.chat-content-area .chat-content-scroll-area {\n  background: rgba(34, 41, 47, 0.2);\n}\n\n[dir] .theme-dark #chat-app .chat__bg.chat-content-area .chat__log .msg-time .vs-divider--text {\n  background: #10163a !important;\n  border-color: #dae1e7 !important;\n}\n\n[dir] .theme-dark #chat-app .chat__bg .chat__input input {\n  border-color: #414561 !important;\n}\n\n.theme-dark #todo-app .todo-list h6.todo-title {\n  color: #ebeefd;\n}\n\n.theme-dark #todo-app .todo-list .todo-tags .con-vs-chip {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark #todo-app .todo-list .todo-tags .con-vs-chip {\n  background: #10163a;\n}\n\n[dir] .theme-dark #todo-app .list-item-component {\n  border-color: #414561;\n}\n\n.theme-dark #todo-app .list-item-component:hover {\n  -webkit-box-shadow: 0px 0 0 0px #1E1E1E;\n}\n\n[dir] .theme-dark #todo-app .list-item-component:hover {\n          box-shadow: 0px 0 0 0px #1E1E1E;\n}\n\n[dir] .theme-dark #email-app .email__mails .email__mail-item .mail__mail-item {\n  background: #10163a;\n}\n\n[dir=ltr] .theme-dark #email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  -webkit-box-shadow: 10px 0 0 0px #1E1E1E;\n  box-shadow: 10px 0 0 0px #1E1E1E;\n}\n\n[dir=rtl] .theme-dark #email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  -webkit-box-shadow: -10px 0 0 0px #1E1E1E;\n          box-shadow: -10px 0 0 0px #1E1E1E;\n}\n\n[dir] .theme-dark #email-app .email__mails .email__mail-item .mail__mail-item.mail__opened-mail {\n  background: #262c49;\n}\n\n[dir] .theme-dark #email-app .email__mails .email__mail-item:not(:first-of-type) .mail__mail-item {\n  border-top: 1px solid #414561;\n}\n\n[dir] .theme-dark #email-app .email-view-sidebar .vs-sidebar {\n  background-color: #212744 !important;\n}\n\n[dir=ltr] .theme-dark #email-app .email-view-sidebar .vs-sidebar {\n  border-left-color: #414561;\n}\n\n[dir=rtl] .theme-dark #email-app .email-view-sidebar .vs-sidebar {\n  border-right-color: #414561;\n}\n\n[dir] .theme-dark #email-app .email-view-sidebar .email-header {\n  border-bottom-color: #414561;\n}\n\n.theme-dark #calendar-app .full-calendar-body .week-row .day-cell.not-cur-month .day-number {\n  color: rgba(255, 255, 255, 0.24);\n}\n\n.theme-dark .vs-alert code {\n  color: #b8c2cc;\n}\n\n[dir] .theme-dark .vs-alert code {\n  background: #262c49;\n}\n\n[dir] .theme-dark .con-vs-avatar {\n  background: #10163a !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-primary {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-success {\n  background: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-danger {\n  background: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-warning {\n  background: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-info {\n  background: rgba(var(--vs-info), 1) !important;\n}\n\n[dir] .theme-dark .con-vs-avatar.con-vs-avatar-dark {\n  background: #b8c2cc !important;\n}\n\n[dir] .theme-dark #profile-page .profile-header .profile-header-nav {\n  background: #10163a !important;\n}\n\n[dir] .theme-dark #faq-page .faq-bg {\n  background-color: #10163a;\n}\n\n.theme-dark .vs-breadcrumb--ol a,\n  .theme-dark .vs-breadcrumb--ol .vs-breadcrum--separator {\n  color: #dae1e7;\n}\n\n.theme-dark .con-vs-chip {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark .con-vs-chip {\n  background: #10163a;\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-primary {\n  background: rgba(var(--vs-primary), 1);\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-success {\n  background: rgba(var(--vs-success), 1);\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-danger {\n  background: rgba(var(--vs-danger), 1);\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-warning {\n  background: rgba(var(--vs-warning), 1);\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-info {\n  background: rgba(var(--vs-info), 1);\n}\n\n[dir] .theme-dark .con-vs-chip.vs-chip-dark {\n  background: rgba(var(--vs-dark), 1);\n}\n\n[dir] .theme-dark .con-vs-chip .con-vs-avatar {\n  background-color: #262c49 !important;\n}\n\n.theme-dark .con-vs-chip.con-color {\n  color: #fff !important;\n}\n\n[dir] .theme-dark .con-chips .con-chips--input {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border {\n  border-color: #414561 !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-primary {\n  border-color: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-success {\n  border-color: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-danger {\n  border-color: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-warning {\n  border-color: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-info {\n  border-color: rgba(var(--vs-info), 1) !important;\n}\n\n[dir] .theme-dark .vs-divider .vs-divider-border.vs-divider-border-dark {\n  border-color: rgba(184, 194, 204, 0.5) !important;\n}\n\n[dir] .theme-dark .vs-dropdown--menu, [dir] .theme-dark .vs-dropdown--menu--after {\n  background: #262c49;\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vs-dropdown--menu .con-dropdown--group-ul, [dir] .theme-dark .vs-dropdown--menu--after .con-dropdown--group-ul {\n  background: #262c49;\n}\n\n.theme-dark .vs-dropdown--menu .vs-dropdown--item .vs-dropdown--item-link.disabled,\n    .theme-dark .vs-dropdown--menu--after .vs-dropdown--item .vs-dropdown--item-link.disabled {\n  color: #b8c2cc !important;\n}\n\n[dir] .theme-dark .con-vs-loading {\n  background: rgba(16, 22, 58, 0.6);\n}\n\n.theme-dark .con-vs-loading h4.title-loading {\n  color: #c2c6dc;\n}\n\n.theme-dark .vs-list .vs-list--header {\n  -webkit-box-shadow: 0 7px 7px -5px #0c112e;\n}\n\n[dir] .theme-dark .vs-list .vs-list--header {\n          box-shadow: 0 7px 7px -5px #0c112e;\n}\n\n[dir] .theme-dark .vs-list .vs-list--item {\n  border-color: rgba(194, 198, 220, 0.08);\n}\n\n[dir] .theme-dark .vs-navbar {\n  border-color: #262c49;\n}\n\n.theme-dark .vs-navbar li.vs-navbar--item a {\n  color: #dae1e7;\n}\n\n.theme-dark .vs-navbar li.vs-navbar--item.is-active-item a {\n  color: #fff;\n}\n\n.theme-dark .vs-navbar.vs-navbar-color-transparent:not(.vs-navbar-flat) {\n  -webkit-box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n[dir] .theme-dark .vs-navbar.vs-navbar-color-transparent:not(.vs-navbar-flat) {\n  background-color: #10163a !important;\n          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.5);\n}\n\n[dir] .theme-dark .vs-pagination--nav .vs-pagination--ul {\n  background: #10163a;\n}\n\n.theme-dark .vs-pagination--nav .vs-pagination--ul .vs-pagination--li {\n  color: #c2c6dc;\n}\n\n.theme-dark .vs-pagination--nav .vs-pagination--ul .item-pagination.is-current {\n  color: #fff;\n}\n\n.theme-dark .vs-pagination--nav .vs-pagination--buttons {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .vs-pagination--nav .vs-pagination--buttons {\n  background: #10163a;\n}\n\n.theme-dark .con-vs-popup .vs-popup {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .con-vs-popup .vs-popup {\n  background: #262c49 !important;\n}\n\n[dir] .theme-dark .con-vs-popup .vs-popup .vs-popup--header {\n  background: #10163a !important;\n}\n\n.theme-dark .con-vs-popup .vs-popup .vs-popup--header .vs-popup--close {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .con-vs-popup .vs-popup .vs-popup--header .vs-popup--close {\n  background: #262c49 !important;\n}\n\n[dir] .theme-dark #popup-demo .demo-alignment .vs-button {\n  background: #262c49 !important;\n}\n\n.theme-dark #popup-demo .demo-alignment .vs-button:hover {\n  -webkit-box-shadow: #262c49 0px 8px 25px -8px !important;\n}\n\n[dir] .theme-dark #popup-demo .demo-alignment .vs-button:hover {\n          box-shadow: #262c49 0px 8px 25px -8px !important;\n}\n\n[dir] .theme-dark .vs-sidebar {\n  background: #10163a;\n}\n\n.theme-dark .vs-sidebar h4,\n    .theme-dark .vs-sidebar h5 {\n  color: #ebeefd;\n}\n\n[dir] .theme-dark .vs-sidebar .vs-sidebar--header {\n  border-bottom-color: #414561;\n}\n\n.theme-dark .vs-sidebar .vs-sidebar--items .vs-sidebar--item a {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .vs-sidebar .vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #262c49;\n}\n\n[dir] .theme-dark .con-vs-slider .vs-slider {\n  background: rgba(38, 44, 73, 0.5);\n}\n\n.theme-dark .ul-tabs .vs-tabs--li button {\n  color: #c2c6dc;\n}\n\n.theme-dark .vs-tabs-dark .activeChild button,\n  .theme-dark .vs-tabs-dark button:not(:disabled):hover {\n  color: #b8c2cc !important;\n}\n\n.theme-dark .vs-tabs-dark .line-vs-tabs {\n  -webkit-box-shadow: 0 0 8px 0 rgba(184, 194, 204, 0.4) !important;\n}\n\n[dir] .theme-dark .vs-tabs-dark .line-vs-tabs {\n          box-shadow: 0 0 8px 0 rgba(184, 194, 204, 0.4) !important;\n}\n\n[dir=ltr] .theme-dark .vs-tabs-dark .line-vs-tabs {\n  background: linear-gradient(30deg, #b8c2cc, rgba(184, 194, 204, 0.5)) !important;\n}\n\n[dir=rtl] .theme-dark .vs-tabs-dark .line-vs-tabs {\n  background: linear-gradient(-30deg, #b8c2cc, rgba(184, 194, 204, 0.5)) !important;\n}\n\n[dir] .theme-dark .vs-tooltip.vs-tooltip-dark {\n  background: #262c49;\n}\n\n[dir] .theme-dark .con-upload .con-input-upload, [dir] .theme-dark .con-upload .con-img-upload {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .con-upload .btn-upload-all {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .con-upload .con-input-upload {\n  border-color: #414561;\n}\n\n.theme-dark input {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark input {\n  background: #10163a;\n}\n\n.theme-dark input ~ .vs-placeholder-label,\n    .theme-dark input ~ .vs-input--placeholder {\n  color: #c2c6dc;\n}\n\n.theme-dark ::-webkit-input-placeholder {\n  color: #c2c6dc !important;\n}\n\n.theme-dark ::-moz-placeholder {\n  color: #c2c6dc !important;\n}\n\n.theme-dark :-ms-input-placeholder {\n  color: #c2c6dc !important;\n}\n\n.theme-dark ::-ms-input-placeholder {\n  color: #c2c6dc !important;\n}\n\n.theme-dark ::placeholder {\n  color: #c2c6dc !important;\n}\n\n.theme-dark .vs-input--icon {\n  color: #c2c6dc;\n}\n\n[dir=ltr] .theme-dark .vs-input--icon {\n  border-right-color: rgba(194, 198, 220, 0.2);\n}\n\n[dir=rtl] .theme-dark .vs-input--icon {\n  border-left-color: rgba(194, 198, 220, 0.2);\n}\n\n[dir=ltr] .theme-dark .vs-input--icon.icon-after {\n  border-left-color: rgba(194, 198, 220, 0.2);\n}\n\n[dir=rtl] .theme-dark .vs-input--icon.icon-after {\n  border-right-color: rgba(194, 198, 220, 0.2);\n}\n\n[dir] .theme-dark .vs-input-number {\n  background: #262c49;\n}\n\n.theme-dark .vs-input-number button.vs-input-number--button-less:disabled, .theme-dark .vs-input-number button.vs-input-number--button-less.limit, .theme-dark .vs-input-number button.vs-input-number--button-plus:disabled, .theme-dark .vs-input-number button.vs-input-number--button-plus.limit {\n  opacity: 0.75;\n}\n\n[dir] .theme-dark .vs-input-number button.vs-input-number--button-less:disabled, [dir] .theme-dark .vs-input-number button.vs-input-number--button-less.limit, [dir] .theme-dark .vs-input-number button.vs-input-number--button-plus:disabled, [dir] .theme-dark .vs-input-number button.vs-input-number--button-plus.limit {\n  background: #b8c2cc;\n}\n\n.theme-dark .vs-con-textarea {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .vs-con-textarea {\n  background: #262c49;\n}\n\n.theme-dark .vs-con-textarea .vs-textarea {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .vs-con-textarea .vs-textarea:focus {\n  border-color: transparent;\n}\n\n[dir] .theme-dark .vs-con-textarea.focusx {\n  border-color: transparent;\n}\n\n[dir] .theme-dark .vs-con-textarea.focusx h4 {\n  background: transparent;\n}\n\n.theme-dark .vs-con-textarea.textarea-danger .vs-textarea {\n  color: rgba(var(--vs-danger), 1);\n}\n\n[dir] .theme-dark .vs-switch {\n  background: #262c49;\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-primary.vs-switch-active {\n  background: rgba(var(--vs-primary), 1);\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-success.vs-switch-active {\n  background: rgba(var(--vs-success), 1);\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-danger.vs-switch-active {\n  background: rgba(var(--vs-danger), 1);\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-warning.vs-switch-active {\n  background: rgba(var(--vs-warning), 1);\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-info.vs-switch-active {\n  background: rgba(var(--vs-info), 1);\n}\n\n[dir] .theme-dark .vs-switch.vs-switch-dark.vs-switch-active {\n  background: #b8c2cc;\n}\n\n.theme-dark .vs-radio-dark .vs-radio--circle {\n  -webkit-box-shadow: 0 3px 12px 0 rgba(184, 194, 204, 0.4);\n}\n\n[dir] .theme-dark .vs-radio-dark .vs-radio--circle {\n  background: #b8c2cc;\n          box-shadow: 0 3px 12px 0 rgba(184, 194, 204, 0.4);\n}\n\n[dir=ltr] .theme-dark .op-block {\n  -webkit-box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);\n  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);\n}\n\n[dir=rtl] .theme-dark .op-block {\n  -webkit-box-shadow: -1px 1px 10px rgba(255, 255, 255, 0.1);\n          box-shadow: -1px 1px 10px rgba(255, 255, 255, 0.1);\n}\n\n[dir] .theme-dark .vs-input-dark .vs-input--input:focus {\n  border-color: #b8c2cc !important;\n}\n\n.theme-dark .vs-input-dark .vs-input--input:focus ~ .vs-input--placeholder {\n  color: #b8c2cc;\n}\n\n[dir] .theme-dark .vue-form-wizard .wizard-icon-circle {\n  background: #262c49;\n  border-color: #212744;\n}\n\n.theme-dark .vue-form-wizard .wizard-nav-pills > li > a {\n  color: #fff;\n}\n\n.theme-dark .vue-form-wizard .wizard-nav-pills > li > a .stepTitle {\n  color: #dae1e7;\n}\n\n.theme-dark .vue-form-wizard .wizard-nav-pills > li > a:hover {\n  color: #fff;\n}\n\n.theme-dark .vue-form-wizard .wizard-navigation .wizard-nav .stepTitle {\n  color: #dae1e7;\n}\n\n[dir] .theme-dark .vs-con-table .vs-con-tbody {\n  background: #212744;\n  border: 2px solid #262c49;\n}\n\n[dir] .theme-dark .vs-con-table .vs-con-tbody .vs-table--tbody-table tr {\n  background: #262c49;\n}\n\n[dir] .theme-dark .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead tr {\n  background: #212744;\n}\n\n[dir] .theme-dark .vs-con-table .con-edit-td {\n  background: #212744;\n}\n\n[dir] .theme-dark .vs-con-table .is-selected .tr-values {\n  background: #212744 !important;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-tooltip.light {\n  background: #212744;\n  border-color: #262c49;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #212744;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-xaxistooltip {\n  color: #fff;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-xaxistooltip {\n  background: #212744;\n  border-color: #262c49;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-xaxistooltip:before, [dir] .theme-dark .apexcharts-canvas .apexcharts-xaxistooltip:after {\n  border-bottom-color: #212744;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-yaxistooltip {\n  color: #fff;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #212744;\n  border-color: #262c49;\n}\n\n[dir=ltr] .theme-dark .apexcharts-canvas .apexcharts-yaxistooltip:before, [dir=ltr] .theme-dark .apexcharts-canvas .apexcharts-yaxistooltip:after {\n  border-left-color: #212744;\n}\n\n[dir=rtl] .theme-dark .apexcharts-canvas .apexcharts-yaxistooltip:before, [dir=rtl] .theme-dark .apexcharts-canvas .apexcharts-yaxistooltip:after {\n  border-right-color: #212744;\n}\n\n.theme-dark .apexcharts-canvas text {\n  fill: #fff !important;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-pie-series path {\n  stroke: #262c49;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-legend .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b8c2cc !important;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-toolbar .apexcharts-menu {\n  background: #262c49;\n  border-color: #262c49;\n}\n\n[dir] .theme-dark .apexcharts-canvas .apexcharts-toolbar .apexcharts-menu .apexcharts-menu-item {\n  background: #212744;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #262c49;\n  stroke: #212744;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-track path {\n  stroke: #262c49;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-selection-icon:not(.selected):hover svg,\n  .theme-dark .apexcharts-canvas .apexcharts-zoom-icon:not(.selected):hover svg,\n  .theme-dark .apexcharts-canvas .apexcharts-zoom-in-icon:hover svg,\n  .theme-dark .apexcharts-canvas .apexcharts-zoom-out-icon:hover svg,\n  .theme-dark .apexcharts-canvas .apexcharts-reset-zoom-icon:hover svg,\n  .theme-dark .apexcharts-canvas .apexcharts-menu-icon:hover svg {\n  fill: #fff;\n}\n\n.theme-dark .apexcharts-canvas .apexcharts-gridline {\n  stroke: #414561;\n}\n\n[dir] .theme-dark .token.operator, [dir] .theme-dark .token.entity, [dir] .theme-dark .token.url, [dir] .theme-dark .language-css .token.string, [dir] .theme-dark .style .token.string {\n  background: transparent;\n}\n\n[dir] .theme-dark .search-tab-filter {\n  background: #10163a;\n}\n\n[dir] .theme-dark .vs-select--options {\n  background: #10163a;\n  border-color: rgba(184, 194, 204, 0.2);\n}\n\n.theme-dark .vs-select--options span {\n  color: #c2c6dc;\n}\n\n.theme-dark .vs-select--options .vs-select--item {\n  color: #b8c2cc;\n  -webkit-box-shadow: none;\n}\n\n[dir] .theme-dark .vs-select--options .vs-select--item {\n  border-color: rgba(184, 194, 204, 0.2);\n          box-shadow: none;\n}\n\n[dir] .theme-dark .vs-select--options .vs-select--item:hover {\n  background: #262c49;\n}\n\n.theme-dark .quill-editor .ql-toolbar button {\n  color: #fff;\n}\n\n.theme-dark .quill-editor .ql-toolbar button svg path {\n  stroke: #fff;\n}\n\n.theme-dark .quill-editor .ql-toolbar .ql-fill {\n  fill: #fff;\n}\n\n.theme-dark .quill-editor .ql-toolbar .ql-stroke {\n  stroke: #fff;\n}\n\n.theme-dark .quill-editor .ql-toolbar .ql-picker {\n  color: #fff;\n}\n\n[dir] .theme-dark .quill-editor .ql-toolbar .ql-picker .ql-picker-options {\n  background: #10163a;\n}\n\n.theme-dark .quill-editor .ql-editor.ql-blank::before {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n[dir] .theme-dark .activity-timeline {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar {\n  background: #262c49;\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar header .prev:not(.disabled):hover, [dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar header .next:not(.disabled):hover, [dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #10163a;\n}\n\n.theme-dark .vdp-datepicker .vdp-datepicker__calendar .disabled {\n  color: rgba(184, 194, 204, 0.6);\n}\n\n[dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar .cell .highlighted {\n  background: #10163a;\n}\n\n[dir] .theme-dark .vdp-datepicker .vdp-datepicker__calendar .cell:hover {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .vdp-datepicker input {\n  border: 0;\n  padding: 10px;\n}\n\n.theme-dark .vs-collapse.shadow {\n  -webkit-box-shadow: 0 0px 10px 1px #0c112e !important;\n}\n\n[dir] .theme-dark .vs-collapse.shadow {\n          box-shadow: 0 0px 10px 1px #0c112e !important;\n}\n\n[dir] .theme-dark .vs-collapse .vs-collapse-item {\n  border-bottom-color: rgba(255, 255, 255, 0.04);\n}\n\n[dir] .theme-dark .vs-collapse.border {\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n[dir] .theme-dark .vs-collapse.border .vs-collapse-item {\n  border-bottom-color: rgba(255, 255, 255, 0.04);\n}\n\n.theme-dark .vs-collapse.margin .vs-collapse-item {\n  -webkit-box-shadow: 0 2px 10px 0 #0c112e;\n}\n\n[dir] .theme-dark .vs-collapse.margin .vs-collapse-item {\n          box-shadow: 0 2px 10px 0 #0c112e;\n}\n\n[dir] .theme-dark .vx-auto-suggest .auto-suggest-suggestions-list {\n  background-color: #262c49 !important;\n}\n\n.theme-dark .footer-sticky .the-footer {\n  color: #fff !important;\n}\n\n[dir] .theme-dark .footer-sticky .the-footer {\n  background-color: #10163a;\n}\n\n.theme-dark .con-vs-dialog .vs-dialog {\n  color: #fff;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog {\n  background: #262c49;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog header {\n  background: #10163a;\n}\n\n.theme-dark .con-vs-dialog .vs-dialog header .con-title-after h3 {\n  color: #fff;\n}\n\n.theme-dark .con-vs-dialog .vs-dialog header .vs-dialog-cancel,\n      .theme-dark .con-vs-dialog .vs-dialog header .vs-icon {\n  color: #fff;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog header .vs-dialog-cancel, [dir] .theme-dark .con-vs-dialog .vs-dialog header .vs-icon {\n  background: #262c49;\n}\n\n.theme-dark .con-vs-dialog .vs-dialog footer .vs-button--text {\n  color: #fff;\n}\n\n.theme-dark .con-vs-dialog .vs-dialog .vs-dialog-text .date-label {\n  color: #fff;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog input, [dir] .theme-dark .con-vs-dialog .vs-dialog .vs-con-textarea {\n  background: #10163a;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog .con-upload .con-input-upload, [dir] .theme-dark .con-vs-dialog .vs-dialog .con-upload .con-img-upload {\n  background: #10163a;\n}\n\n[dir] .theme-dark .con-vs-dialog .vs-dialog .quill-editor {\n  background: #262c49;\n}\n\n[dir] .theme-dark .tree-container {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .tree-container .tag, [dir] .theme-dark .tree-container .search-input {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .halo-tree .node-title:hover {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark #theme-customizer input {\n  background: #262c49;\n}\n\n[dir] .theme-dark .add-new-data-sidebar input {\n  background: #262c49;\n}\n\n[dir] .theme-dark .vx-card .vs-pagination--nav .vs-pagination--ul {\n  background: #262c49;\n}\n\n.theme-dark .vx-card .vs-pagination--nav .vs-pagination--ul .vs-pagination--li {\n  color: #fff;\n}\n\n.theme-dark .vx-card .vs-pagination--nav .vs-pagination--buttons {\n  color: #fff;\n}\n\n[dir] .theme-dark .vx-card .vs-pagination--nav .vs-pagination--buttons {\n  background: #262c49;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar {\n  background: #262c49 !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-primary {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-success {\n  background: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-danger {\n  background: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-warning {\n  background: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-info {\n  background: rgba(var(--vs-info), 1) !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-avatar.con-vs-avatar-dark {\n  background: #b8c2cc !important;\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip {\n  background: #262c49;\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-primary {\n  background: rgba(var(--vs-primary), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-success {\n  background: rgba(var(--vs-success), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-danger {\n  background: rgba(var(--vs-danger), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-warning {\n  background: rgba(var(--vs-warning), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-info {\n  background: rgba(var(--vs-info), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip.vs-chip-dark {\n  background: rgba(var(--vs-dark), 1);\n}\n\n[dir] .theme-dark .vx-card .con-vs-chip .con-vs-avatar {\n  background-color: #10163a !important;\n}\n\n[dir] .theme-dark .vx-card .con-chips .con-chips--input {\n  background-color: #10163a !important;\n}\n\n[dir] .theme-dark .vx-card .vs-navbar.vs-navbar-color-transparent {\n  background-color: #262c49 !important;\n}\n\n[dir] .theme-dark .vx-card .vs-navbar .vs-navbar--btn-responsive .btn-responsive-line {\n  background: #c2c6dc;\n}\n\n[dir] .theme-dark .vx-card .vs-navbar-border {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vx-card .vs-navbar-border .vs-navbar--item {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vx-card .vs-navbar-shadow .vs-navbar--item.is-active-item {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .vx-card input {\n  background: #262c49;\n}\n\n.theme-dark .vdp-datepicker .vdp-datepicker__calendar header .prev:after {\n  border-right-color: #fff;\n}\n\n.theme-dark .vdp-datepicker .vdp-datepicker__calendar header .next:after {\n  border-left-color: #fff;\n}\n\n/*=========================================================================================\n    File Name: _themeSemiDark.scss\n    Description: partial- Styles for semi dark theme\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n[dir] .theme-semi-dark .v-nav-menu .vs-sidebar {\n  background-color: #10163a;\n}\n\n.theme-semi-dark .v-nav-menu .shadow-bottom {\n  width: 94%;\n}\n\n[dir] .theme-semi-dark .v-nav-menu .shadow-bottom {\n  background: linear-gradient(to bottom, #0f1642 44%, rgba(15, 22, 66, 0.51) 73%, rgba(44, 48, 60, 0) 100%);\n}\n\n[dir=ltr] .theme-semi-dark .v-nav-menu .shadow-bottom {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, #0f1642), color-stop(73%, rgba(15, 22, 66, 0.51)), to(rgba(44, 48, 60, 0)));\n}\n\n[dir=rtl] .theme-semi-dark .v-nav-menu .shadow-bottom {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, #0f1642), color-stop(73%, rgba(15, 22, 66, 0.51)), to(rgba(44, 48, 60, 0)));\n}\n\n.theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu .feather-icon, .theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu span {\n  color: #fff;\n}\n\n.theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu a .feather-icon svg, .theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu a .feather-icon span {\n  color: #fff;\n}\n\n[dir] .theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu .vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  background: #262c49;\n}\n\n[dir] .theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu .vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #262c49;\n}\n\n.theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu .con-vs-chip {\n  -webkit-box-shadow: 0px 0px 4px 2px #262c49;\n}\n\n[dir] .theme-semi-dark .v-nav-menu .scroll-area-v-nav-menu .con-vs-chip {\n          box-shadow: 0px 0px 4px 2px #262c49;\n}\n\n/*=========================================================================================\n    File Name: _transitions.scss\n    Description: Transition styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.zoom-fade-enter-active,\n.zoom-fade-leave-active {\n  transition: opacity .28s ease-in-out, -webkit-transform .35s;\n  transition: transform .35s, opacity .28s ease-in-out;\n  transition: transform .35s, opacity .28s ease-in-out, -webkit-transform .35s;\n}\n\n[dir] .zoom-fade-enter-active, [dir] .zoom-fade-leave-active {\n  -webkit-transition: opacity .28s ease-in-out, -webkit-transform .35s;\n}\n\n.zoom-fade-enter {\n  -webkit-transform: scale(0.97);\n  opacity: 0;\n}\n\n[dir] .zoom-fade-enter {\n          transform: scale(0.97);\n}\n\n.zoom-fade-leave-to {\n  -webkit-transform: scale(1.03);\n  opacity: 0;\n}\n\n[dir] .zoom-fade-leave-to {\n          transform: scale(1.03);\n}\n\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity .28s ease-in-out;\n}\n\n[dir] .fade-enter-active, [dir] .fade-leave-active {\n  -webkit-transition: opacity .28s ease-in-out;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n.slide-fade-enter-active, .slide-fade-leave-active {\n  transition: opacity .35s, -webkit-transform .4s;\n  transition: opacity .35s, transform .4s;\n  transition: opacity .35s, transform .4s, -webkit-transform .4s;\n}\n\n[dir] .slide-fade-enter-active, [dir] .slide-fade-leave-active {\n  -webkit-transition: opacity .35s, -webkit-transform .4s;\n}\n\n.slide-fade-enter {\n  opacity: 0;\n}\n\n[dir=ltr] .slide-fade-enter {\n  -webkit-transform: translateX(-30%);\n  transform: translateX(-30%);\n}\n\n[dir=rtl] .slide-fade-enter {\n  -webkit-transform: translateX(30%);\n          transform: translateX(30%);\n}\n\n.slide-fade-leave-to {\n  opacity: 0;\n}\n\n[dir=ltr] .slide-fade-leave-to {\n  -webkit-transform: translateX(30%);\n  transform: translateX(30%);\n}\n\n[dir=rtl] .slide-fade-leave-to {\n  -webkit-transform: translateX(-30%);\n          transform: translateX(-30%);\n}\n\n.zoom-out-enter-active, .zoom-out-leave-active {\n  transition: opacity .35s ease-in-out, -webkit-transform .45s ease-out;\n  transition: opacity .35s ease-in-out, transform .45s ease-out;\n  transition: opacity .35s ease-in-out, transform .45s ease-out, -webkit-transform .45s ease-out;\n}\n\n[dir] .zoom-out-enter-active, [dir] .zoom-out-leave-active {\n  -webkit-transition: opacity .35s ease-in-out, -webkit-transform .45s ease-out;\n}\n\n.zoom-out-enter, .zoom-out-leave-to {\n  opacity: 0;\n  -webkit-transform: scale(0);\n}\n\n[dir] .zoom-out-enter, [dir] .zoom-out-leave-to {\n          transform: scale(0);\n}\n\n.fade-bottom-enter-active, .fade-bottom-leave-active {\n  transition: opacity .3s, -webkit-transform .35s;\n  transition: opacity .3s, transform .35s;\n  transition: opacity .3s, transform .35s, -webkit-transform .35s;\n}\n\n[dir] .fade-bottom-enter-active, [dir] .fade-bottom-leave-active {\n  -webkit-transition: opacity .3s, -webkit-transform .35s;\n}\n\n.fade-bottom-enter {\n  opacity: 0;\n  -webkit-transform: translateY(-8%);\n}\n\n[dir] .fade-bottom-enter {\n          transform: translateY(-8%);\n}\n\n.fade-bottom-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(8%);\n}\n\n[dir] .fade-bottom-leave-to {\n          transform: translateY(8%);\n}\n\n.fade-bottom-2x-enter-active, .fade-bottom-2x-leave-active {\n  transition: opacity .2s, -webkit-transform .25s;\n  transition: opacity .2s, transform .25s;\n  transition: opacity .2s, transform .25s, -webkit-transform .25s;\n}\n\n[dir] .fade-bottom-2x-enter-active, [dir] .fade-bottom-2x-leave-active {\n  -webkit-transition: opacity .2s, -webkit-transform .25s;\n}\n\n.fade-bottom-2x-enter {\n  opacity: 0;\n  -webkit-transform: translateY(-4%);\n}\n\n[dir] .fade-bottom-2x-enter {\n          transform: translateY(-4%);\n}\n\n.fade-bottom-2x-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(4%);\n}\n\n[dir] .fade-bottom-2x-leave-to {\n          transform: translateY(4%);\n}\n\n.fade-top-enter-active, .fade-top-leave-active {\n  transition: opacity .3s, -webkit-transform .35s;\n  transition: opacity .3s, transform .35s;\n  transition: opacity .3s, transform .35s, -webkit-transform .35s;\n}\n\n[dir] .fade-top-enter-active, [dir] .fade-top-leave-active {\n  -webkit-transition: opacity .3s, -webkit-transform .35s;\n}\n\n.fade-top-enter {\n  opacity: 0;\n  -webkit-transform: translateY(8%);\n}\n\n[dir] .fade-top-enter {\n          transform: translateY(8%);\n}\n\n.fade-top-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(-8%);\n}\n\n[dir] .fade-top-leave-to {\n          transform: translateY(-8%);\n}\n\n.fade-top-2x-enter-active, .fade-top-2x-leave-active {\n  transition: opacity .2s, -webkit-transform .25s;\n  transition: opacity .2s, transform .25s;\n  transition: opacity .2s, transform .25s, -webkit-transform .25s;\n}\n\n[dir] .fade-top-2x-enter-active, [dir] .fade-top-2x-leave-active {\n  -webkit-transition: opacity .2s, -webkit-transform .25s;\n}\n\n.fade-top-2x-enter {\n  opacity: 0;\n  -webkit-transform: translateY(4%);\n}\n\n[dir] .fade-top-2x-enter {\n          transform: translateY(4%);\n}\n\n.fade-top-2x-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(-4%);\n}\n\n[dir] .fade-top-2x-leave-to {\n          transform: translateY(-4%);\n}\n\n.list-leave-active {\n  position: absolute;\n}\n\n.list-enter,\n.list-leave-to {\n  opacity: 0;\n}\n\n[dir=ltr] .list-enter, [dir=ltr] .list-leave-to {\n  -webkit-transform: translateX(30px);\n  transform: translateX(30px);\n}\n\n[dir=rtl] .list-enter, [dir=rtl] .list-leave-to {\n  -webkit-transform: translateX(-30px);\n          transform: translateX(-30px);\n}\n\n.list-enter-up-leave-active {\n  transition: none !important;\n}\n\n[dir] .list-enter-up-leave-active {\n  -webkit-transition: none !important;\n}\n\n.list-enter-up-enter {\n  opacity: 0;\n  -webkit-transform: translateY(30px);\n}\n\n[dir] .list-enter-up-enter {\n          transform: translateY(30px);\n}\n\n/*=========================================================================================\n  File Name: _customClasses.scss\n  Description: partial- this file containes custom helper classes\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n[dir] .btn-group button {\n  padding: 1rem 1.25rem !important;\n}\n\n[dir=ltr] .btn-group :not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n[dir=rtl] .btn-group :not(:last-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=ltr] .btn-group :not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=rtl] .btn-group :not(:first-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group-vertical {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.btn-group-vertical button {\n  width: 100%;\n}\n\n[dir] .btn-group-vertical button {\n  padding: 1rem 1.25rem !important;\n}\n\n[dir=ltr] .btn-group-vertical :not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n[dir=rtl] .btn-group-vertical :not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n[dir=ltr] .btn-group-vertical :not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=rtl] .btn-group-vertical :not(:last-child) {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.blur-1 {\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n}\n\n.blur-2 {\n  -webkit-filter: blur(2px);\n          filter: blur(2px);\n}\n\n.blur-3 {\n  -webkit-filter: blur(3px);\n          filter: blur(3px);\n}\n\n.con-vs-chip.number {\n  min-height: 20px;\n  min-width: 20px;\n}\n\n[dir=ltr] .con-vs-chip.number {\n  padding-right: unset;\n  margin-right: 0;\n}\n\n[dir=rtl] .con-vs-chip.number {\n  padding-left: unset;\n  margin-left: 0;\n}\n\n.con-vs-chip.number .vs-chip--text {\n  font-weight: 600;\n}\n\n[dir=ltr] .con-vs-chip.number .vs-chip--text {\n  margin-left: unset;\n  margin-right: unset;\n}\n\n[dir=rtl] .con-vs-chip.number .vs-chip--text {\n  margin-right: unset;\n  margin-left: unset;\n}\n\n.text-primary {\n  color: rgba(var(--vs-primary), 1) !important;\n}\n\n.text-success {\n  color: rgba(var(--vs-success), 1) !important;\n}\n\n.text-danger {\n  color: rgba(var(--vs-danger), 1) !important;\n}\n\n.text-warning {\n  color: rgba(var(--vs-warning), 1) !important;\n}\n\n.text-dark {\n  color: rgba(var(--vs-dark), 1) !important;\n}\n\n[dir] .bg-primary {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .bg-success {\n  background-color: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .bg-danger {\n  background-color: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .bg-warning {\n  background-color: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .bg-dark {\n  background-color: rgba(var(--vs-dark), 1) !important;\n}\n\n[dir] .border-primary {\n  border-color: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .border-success {\n  border-color: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .border-danger {\n  border-color: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .border-warning {\n  border-color: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .border-dark {\n  border-color: rgba(var(--vs-dark), 1) !important;\n}\n\n[dir] .hover\\:bg-primary:hover {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir] .hover\\:bg-success:hover {\n  background-color: rgba(var(--vs-success), 1) !important;\n}\n\n[dir] .hover\\:bg-danger:hover {\n  background-color: rgba(var(--vs-danger), 1) !important;\n}\n\n[dir] .hover\\:bg-warning:hover {\n  background-color: rgba(var(--vs-warning), 1) !important;\n}\n\n[dir] .hover\\:bg-dark:hover {\n  background-color: rgba(var(--vs-dark), 1) !important;\n}\n\n.hover\\:text-primary:hover {\n  color: rgba(var(--vs-primary), 1) !important;\n}\n\n.hover\\:text-success:hover {\n  color: rgba(var(--vs-success), 1) !important;\n}\n\n.hover\\:text-danger:hover {\n  color: rgba(var(--vs-danger), 1) !important;\n}\n\n.hover\\:text-warning:hover {\n  color: rgba(var(--vs-warning), 1) !important;\n}\n\n.hover\\:text-dark:hover {\n  color: rgba(var(--vs-dark), 1) !important;\n}\n\n[dir=ltr] .bg-primary-gradient {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n\n[dir=rtl] .bg-primary-gradient {\n  background: linear-gradient(-118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7)) !important;\n}\n\n[dir=ltr] .bg-success-gradient {\n  background: linear-gradient(118deg, rgba(var(--vs-success), 1), rgba(var(--vs-success), 0.7)) !important;\n}\n\n[dir=rtl] .bg-success-gradient {\n  background: linear-gradient(-118deg, rgba(var(--vs-success), 1), rgba(var(--vs-success), 0.7)) !important;\n}\n\n[dir=ltr] .bg-danger-gradient {\n  background: linear-gradient(118deg, rgba(var(--vs-danger), 1), rgba(var(--vs-danger), 0.7)) !important;\n}\n\n[dir=rtl] .bg-danger-gradient {\n  background: linear-gradient(-118deg, rgba(var(--vs-danger), 1), rgba(var(--vs-danger), 0.7)) !important;\n}\n\n[dir=ltr] .bg-warning-gradient {\n  background: linear-gradient(118deg, rgba(var(--vs-warning), 1), rgba(var(--vs-warning), 0.7)) !important;\n}\n\n[dir=rtl] .bg-warning-gradient {\n  background: linear-gradient(-118deg, rgba(var(--vs-warning), 1), rgba(var(--vs-warning), 0.7)) !important;\n}\n\n[dir=ltr] .bg-dark-gradient {\n  background: linear-gradient(118deg, rgba(var(--vs-dark), 1), rgba(var(--vs-dark), 0.7)) !important;\n}\n\n[dir=rtl] .bg-dark-gradient {\n  background: linear-gradient(-118deg, rgba(var(--vs-dark), 1), rgba(var(--vs-dark), 0.7)) !important;\n}\n\n.dropdown-custom .vs-dropdown--custom {\n  overflow: hidden;\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n\n[dir] .dropdown-custom .vs-dropdown--custom {\n  padding: 0 !important;\n  border: 0;\n  border-radius: .5rem;\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n\n[dir] .dropdown-custom .vs-dropdown--menu--after {\n  background: rgba(var(--vs-primary), 1) !important;\n}\n\n[dir=ltr] .dropdown-custom .vs-dropdown--menu--after {\n  right: 1.6rem !important;\n}\n\n[dir=rtl] .dropdown-custom .vs-dropdown--menu--after {\n  left: 1.6rem !important;\n}\n\n.vx-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n[dir] .vx-row {\n  margin: 0 -1rem;\n}\n\n[dir] .vx-row > .vx-col {\n  padding: 0 1rem;\n}\n\n.vx-row.match-height > .vx-col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n[dir] .vx-row.no-gutter {\n  margin: 0;\n}\n\n[dir] .vx-row.no-gutter > .vx-col {\n  padding: 0;\n}\n\n[dir] .vs-input-no-border .vs-input--input {\n  border: none !important;\n}\n\n[dir] .vs-input-no-border .vs-input--input:focus {\n  border: none !important;\n}\n\n.vs-input-no-shdow-focus .vs-input--input:focus {\n  -webkit-box-shadow: none !important;\n}\n\n[dir] .vs-input-no-shdow-focus .vs-input--input:focus {\n          box-shadow: none !important;\n}\n\n.vs-input-shadow-drop input {\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);\n}\n\n[dir] .vs-input-shadow-drop input {\n          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);\n}\n\n.sidebar-spacer {\n  width: calc(100% - 260px);\n}\n\n[dir=ltr] .sidebar-spacer {\n  margin-left: 260px;\n}\n\n[dir=rtl] .sidebar-spacer {\n  margin-right: 260px;\n}\n\n.sidebar-spacer-with-margin {\n  width: calc(100% - 260px - 2.2rem);\n}\n\n[dir=ltr] .sidebar-spacer-with-margin {\n  margin-left: calc(260px + 2.2rem);\n}\n\n[dir=rtl] .sidebar-spacer-with-margin {\n  margin-right: calc(260px + 2.2rem);\n}\n\n.sidebar-spacer--wide {\n  width: calc(100% - 400px);\n}\n\n[dir=ltr] .sidebar-spacer--wide {\n  margin-left: 400px;\n}\n\n[dir=rtl] .sidebar-spacer--wide {\n  margin-right: 400px;\n}\n\n.background-absolute .vs-sidebar--background {\n  position: absolute;\n}\n\n[dir] .vs-content-sidebar.items-no-padding .vs-sidebar--items {\n  padding: 0;\n}\n\n.full-vs-sidebar .vs-sidebar {\n  max-width: calc(100% - 260px);\n}\n\n[dir=ltr] .full-vs-sidebar .vs-sidebar {\n  margin-left: 260px;\n}\n\n[dir=rtl] .full-vs-sidebar .vs-sidebar {\n  margin-right: 260px;\n}\n\n@media only screen and (max-width: 992px) {\n  .full-vs-sidebar .vs-sidebar {\n    max-width: 100%;\n  }\n  [dir=ltr] .full-vs-sidebar .vs-sidebar {\n    margin-left: 0;\n  }\n  [dir=rtl] .full-vs-sidebar .vs-sidebar {\n    margin-right: 0;\n  }\n}\n\n[dir] .vs-select-no-border .vs-select--input {\n  border: none !important;\n}\n\n.tabs-shadow-none .vs-tabs--ul {\n  -webkit-box-shadow: none;\n}\n\n[dir] .tabs-shadow-none .vs-tabs--ul {\n          box-shadow: none;\n}\n\n[dir] .tab-action-btn-fill-conatiner.con-vs-tabs .vs-tabs--content {\n  padding: 23px 10px !important;\n}\n\n[dir] .d-theme-dark-bg, [dir] .d-theme-dark-light-bg {\n  background-color: #fff;\n}\n\n[dir] .d-theme-dark-border {\n  border-color: #fff;\n}\n\n[dir] .d-theme-border-grey-light {\n  border-color: #dae1e7;\n}\n\n.d-theme-text-inverse {\n  color: #fff;\n}\n\n[dir] .theme-dark .d-theme-dark-bg {\n  background-color: #10163a;\n}\n\n[dir] .theme-dark .d-theme-dark-light-bg {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .d-theme-input-dark-bg input {\n  background-color: #10163a;\n}\n\n.theme-dark .d-theme-heading-color {\n  color: #2c2c2c;\n}\n\n.theme-dark .d-theme-text-inverse {\n  color: #626262;\n}\n\n[dir] .theme-dark .d-theme-border-grey-light, [dir] .theme-dark .d-theme-dark-border {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .vs-con-table.table-dark-inverted .vs-con-tbody .vs-table--tbody-table tr {\n  background: #10163a !important;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-big {\n  font-size: 4rem;\n}\n\n.text-color-base {\n  color: #626262;\n}\n\n.user-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.user-list .con-vs-avatar {\n  transition: .3s;\n}\n\n[dir] .user-list .con-vs-avatar {\n  -webkit-transition: .3s;\n}\n\n.user-list .con-vs-avatar:hover {\n  -webkit-transform: translateY(-5px) scale(1.07);\n  -webkit-box-shadow: 0 14px 24px rgba(62, 57, 107, 0.2);\n  z-index: 999;\n}\n\n[dir] .user-list .con-vs-avatar:hover {\n          transform: translateY(-5px) scale(1.07);\n          box-shadow: 0 14px 24px rgba(62, 57, 107, 0.2);\n}\n\n.responsive {\n  width: 100%;\n  height: auto;\n}\n\n[dir] ul.bordered-items > li:not(:last-of-type):not([class*='shadow']) {\n  border-bottom: 1px solid #dae1e7;\n}\n\n/*=========================================================================================\n  File Name: _fixesVuesax.scss\n  Description: Partial - Fixes/Add vuesax framework styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.con-vs-alert {\n  -webkit-box-shadow: none !important;\n}\n\n[dir] .con-vs-alert {\n          box-shadow: none !important;\n}\n\n.vs-alert {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.vs-alert code {\n  color: #fff;\n}\n\n[dir] .vs-alert code {\n  background: #b5b5b5;\n}\n\n.vs-alert--title {\n  color: inherit;\n}\n\n.vs-avatar--text.feather {\n  font-size: 1.3rem;\n}\n\n.vs-avatar--con-img img {\n  height: 100%;\n}\n\n.vs-button {\n  font-family: \"Montserrat\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n}\n\n.vs-button.vs-button-gradient:hover {\n  -webkit-box-shadow: none !important;\n}\n\n[dir] .vs-button.vs-button-gradient:hover {\n          box-shadow: none !important;\n}\n\n[dir] .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  padding: .75rem 2rem;\n}\n\n[dir] .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large).vs-button-border {\n  padding: .679rem 2rem;\n}\n\n[dir] .vs-button.small:not(.includeIconOnly) {\n  padding: 0.5rem 1.5rem;\n}\n\n[dir] .vs-button.large:not(.includeIconOnly) {\n  padding: 1rem 2.5rem;\n}\n\n.vs-button.large {\n  font-size: 1.25rem;\n}\n\n.vs-button.large .vs-button--icon {\n  font-size: 1.25rem;\n}\n\n[dir] .vs-button.round {\n  border-radius: 1.5rem;\n}\n\n[dir] .vs-button.includeIcon {\n  float: none;\n}\n\n.vs-breadcrumb--ol a:focus, .vs-breadcrumb--ol a:hover {\n  color: #7367F0;\n}\n\n.vs-breadcrumb--ol .active {\n  color: #7367F0;\n}\n\n.vs-checkbox-small .vs-checkbox--input:checked + .vs-checkbox .vs-icon {\n  -webkit-transform: translateY(-3px);\n}\n\n[dir] .vs-checkbox-small .vs-checkbox--input:checked + .vs-checkbox .vs-icon {\n  margin-top: 6px;\n          transform: translateY(-3px);\n}\n\n[dir=ltr] .vs-checkbox-small .vs-checkbox--input:checked + .vs-checkbox .vs-icon {\n  margin-left: -1px;\n}\n\n[dir=rtl] .vs-checkbox-small .vs-checkbox--input:checked + .vs-checkbox .vs-icon {\n  margin-right: -1px;\n}\n\n.vs-checkbox--check {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n[dir] .con-chips .con-chips--input {\n  border: none;\n}\n\n[dir] .con-chips .con-vs-chip {\n  margin: .75rem;\n}\n\n[dir=ltr] .con-chips .con-chips--remove-all {\n  right: 9px;\n}\n\n[dir=rtl] .con-chips .con-chips--remove-all {\n  left: 9px;\n}\n\n.con-chips .con-chips--remove-all > .vs-icon {\n  font-size: 1.3rem;\n}\n\n.con-vs-chip {\n  min-height: 26px;\n  min-width: 26px;\n  font-size: .8rem;\n}\n\n.vs-collapse-item--header {\n  font-size: 1.2rem;\n}\n\n[dir] .vs-collapse-item--header {\n  padding: 1rem;\n}\n\n.con-content--item {\n  font-size: 1rem;\n}\n\n[dir] .con-content--item {\n  padding: 1rem;\n}\n\n.vs-collapse.default .open-item .con-content--item,\n.vs-collapse.shadow .open-item .con-content--item,\n.vs-collapse.border .open-item .con-content--item,\n.vs-collapse.margin .open-item .con-content--item {\n  opacity: 1;\n}\n\n[dir] .vs-collapse.default .open-item .con-content--item, [dir] .vs-collapse.shadow .open-item .con-content--item, [dir] .vs-collapse.border .open-item .con-content--item, [dir] .vs-collapse.margin .open-item .con-content--item {\n  padding: 1rem;\n}\n\n.con-vs-dialog {\n  z-index: 52005;\n}\n\n.con-vs-dialog .vs-dialog header .dialog-title {\n  color: inherit;\n}\n\n[dir] .con-vs-dialog .vs-dialog header .dialog-title {\n  padding: 0.8rem;\n}\n\n.con-vs-dialog .vs-dialog header span.after {\n  width: 0;\n}\n\n.con-vs-dialog .vs-dialog .vs-dialog-text {\n  font-size: 1rem;\n}\n\n[dir] .con-vs-dialog .vs-dialog .vs-dialog-text {\n  padding: 1rem;\n}\n\n[dir] .con-vs-dialog .vs-dialog footer {\n  padding: 1rem;\n}\n\n[dir] .con-vs-dialog .vs-dialog footer .vs-button:last-of-type {\n  border-color: rgba(0, 0, 0, 0.2) !important;\n}\n\n[dir=ltr] .con-vs-dialog .vs-dialog footer .vs-button:last-of-type {\n  margin-left: .5rem !important;\n}\n\n[dir=rtl] .con-vs-dialog .vs-dialog footer .vs-button:last-of-type {\n  margin-right: .5rem !important;\n}\n\n.vs-con-dropdown {\n  color: inherit;\n  font-size: 1rem;\n}\n\n[dir] .dropdown-button-container .vs-button {\n  padding: .72rem 1.5rem !important;\n}\n\n[dir] .dropdown-button-container .vs-button-line {\n  padding: 9px 10px !important;\n}\n\n.con-vs-dropdown--menu {\n  z-index: 42000;\n}\n\n.vs-input--placeholder {\n  top: 0px;\n}\n\n[dir=ltr] .vs-input--input.hasIcon:not(.icon-after-input) + .vs-input--placeholder {\n  padding-left: 3rem !important;\n}\n\n[dir=rtl] .vs-input--input.hasIcon:not(.icon-after-input) + .vs-input--placeholder {\n  padding-right: 3rem !important;\n}\n\n[dir=ltr] .vs-input--input.hasIcon:not(.icon-after-input):focus + .vs-placeholder-label {\n  padding-left: .7rem !important;\n}\n\n[dir=rtl] .vs-input--input.hasIcon:not(.icon-after-input):focus + .vs-placeholder-label {\n  padding-right: .7rem !important;\n}\n\n.vs-con-input .vs-inputx {\n  font-size: 1rem;\n}\n\n[dir] .vs-con-input .vs-inputx {\n  padding: .7rem;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n[dir] .vs-con-input .vx-inputx:not(.input-rounded-full) {\n  border-radius: 5px;\n}\n\n.vs-input--input.normal {\n  font-size: 1rem !important;\n}\n\n[dir] .vs-input--input.normal {\n  padding: .7rem !important;\n}\n\n.vs-input--input.normal ~ .vs-input--icon.feather {\n  top: 9px;\n}\n\n.vs-input--input.large {\n  font-size: 1.2rem !important;\n}\n\n[dir] .vs-input--input.large {\n  padding: 1rem !important;\n}\n\n[dir=ltr] .vs-input--input.large.hasIcon {\n  padding: 1rem 0.8rem 1rem 3rem !important;\n}\n\n[dir=rtl] .vs-input--input.large.hasIcon {\n  padding: 1rem 3rem 1rem 0.8rem !important;\n}\n\n.vs-input--input.large ~ .vs-input--icon {\n  top: 1rem !important;\n}\n\n[dir=ltr] .vs-input--input.large ~ .vs-input--icon {\n  left: 0.8rem !important;\n}\n\n[dir=rtl] .vs-input--input.large ~ .vs-input--icon {\n  right: 0.8rem !important;\n}\n\n.vs-input--input.small {\n  font-size: .8rem !important;\n}\n\n[dir] .vs-input--input.small {\n  padding: .4rem !important;\n}\n\n.vs-input--input.small ~ .vs-input--icon.feather {\n  top: 7px !important;\n}\n\n[dir=ltr] .vs-input--input.hasIcon {\n  padding: 0.7rem 1rem 0.7rem 3rem !important;\n}\n\n[dir=rtl] .vs-input--input.hasIcon {\n  padding: 0.7rem 3rem 0.7rem 1rem !important;\n}\n\n[dir=ltr] .vs-input--input.hasIcon.icon-after-input {\n  padding: 0.7rem 3rem 0.7rem 0.7rem !important;\n}\n\n[dir=rtl] .vs-input--input.hasIcon.icon-after-input {\n  padding: 0.7rem 0.7rem 0.7rem 3rem !important;\n}\n\n[dir] .vs-input--placeholder.normal {\n  padding: .7rem !important;\n}\n\n[dir] .vs-input--placeholder.large {\n  padding: 1rem !important;\n}\n\n.vs-input--placeholder.small {\n  font-size: .8rem !important;\n}\n\n[dir] .vs-input--placeholder.small {\n  padding: .2rem .6rem !important;\n}\n\n[dir=ltr] .vs-input--icon.feather {\n  padding: .2rem .5rem 0rem .4rem;\n}\n\n[dir=rtl] .vs-input--icon.feather {\n  padding: .2rem .4rem 0rem .5rem;\n}\n\n[dir] .vs-input.input-rounded-full input {\n  border-radius: 20px;\n}\n\n[dir=ltr] .vs-input.input-rounded-full .vs-input--input.hasIcon {\n  padding: .8rem 1rem 0.8rem 3rem !important;\n}\n\n[dir=rtl] .vs-input.input-rounded-full .vs-input--input.hasIcon {\n  padding: .8rem 3rem 0.8rem 1rem !important;\n}\n\n[dir] .vs-input.input-rounded-full .input-span-placeholder {\n  padding-top: .7rem !important;\n}\n\n[dir=ltr] .vs-input.input-rounded-full .input-span-placeholder {\n  padding-left: 3rem !important;\n}\n\n[dir=rtl] .vs-input.input-rounded-full .input-span-placeholder {\n  padding-right: 3rem !important;\n}\n\n.vs-input.input-rounded-full .vs-icon {\n  font-size: 1rem !important;\n}\n\n[dir] .vs-input.input-rounded-full .vs-icon {\n  margin-top: .1rem !important;\n}\n\n[dir=ltr] .vs-input.input-rounded-full .vs-icon {\n  margin-left: 0.6rem !important;\n}\n\n[dir=rtl] .vs-input.input-rounded-full .vs-icon {\n  margin-right: 0.6rem !important;\n}\n\n.vs-list--item .list-titles .vs-list--subtitle {\n  font-size: .85rem;\n}\n\n[dir] .vs-list--item:last-child {\n  border-bottom: none;\n}\n\n.vs-navbar .vs-navbar--item a {\n  color: inherit;\n}\n\n.vs-navbar-color-transparent .vs-navbar--item a:hover {\n  color: #7367F0 !important;\n}\n\n.vs-navbar-gradient .vs-navbar--item.is-active-item a {\n  color: #fff !important;\n}\n\n.vs-notifications {\n  z-index: 200000 !important;\n}\n\n.vs-notifications h3 {\n  color: #fff;\n  font-weight: 600;\n  font-size: 15.96px;\n}\n\n[dir] .vs-pagination--li.is-current {\n  border-radius: 50%;\n}\n\n[dir] .vs-pagination--li.is-current .effect {\n  border-radius: 50%;\n}\n\n.vs-pagination--li:hover:not(.is-current) {\n  color: var(--vs-color-pagination) !important;\n}\n\n[dir] .vs-pagination--ul {\n  padding: 0;\n}\n\n[dir] .vs-popup--title h3, [dir] .vs-notifications h3 {\n  margin-bottom: 0;\n}\n\n.con-vs-popup {\n  z-index: 53000;\n}\n\n.con-vs-popup .vs-popup--content {\n  font-size: 1rem;\n}\n\n[dir] .con-vs-popup .vs-popup--content {\n  padding: 1rem;\n}\n\n.con-vs-checkbox,\n.con-vs-radio {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.vs-radio--label {\n  line-height: 1;\n}\n\n.con-vs-radio {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.con-select .vs-select--input {\n  font-size: 1rem;\n}\n\n[dir] .con-select .vs-select--input {\n  padding: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.vs-select--options {\n  font-size: 1rem;\n  z-index: 530001;\n}\n\n[dir] .vs-select--options {\n  border: 1px solid #eee;\n}\n\n.vs-select--options span {\n  color: #626262;\n  font-size: 1rem;\n}\n\n[dir] .v-select .dropdown-toggle .vs__actions .clear {\n  padding-top: 4px;\n}\n\n.vs-sidebar {\n  height: calc(var(--vh, 1vh) * 100);\n}\n\n.vs-sidebar .vs-sidebar--items {\n  overflow: hidden;\n  height: 100%;\n}\n\n.vs-switch--text {\n  font-size: 0.7rem;\n}\n\n[dir] .vs-con-table {\n  background: transparent;\n}\n\n[dir] .vs-con-table .vs-table--header .vs-table--search {\n  padding: 1rem 0;\n}\n\n.vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 0.9rem;\n}\n\n[dir] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 10px 28px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n[dir=ltr] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 10px;\n}\n\n[dir=rtl] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 10px;\n}\n\n[dir=ltr] .vs-con-table .vs-table--header .vs-table--search i {\n  left: 10px;\n}\n\n[dir=rtl] .vs-con-table .vs-table--header .vs-table--search i {\n  right: 10px;\n}\n\n.vs-con-table .vs-con-tbody {\n  width: 100%;\n  overflow: auto;\n}\n\n[dir] .vs-con-table .vs-con-tbody {\n  background: #f8f8f8;\n  border: 2px solid #f8f8f8;\n}\n\n.vs-con-table .vs-con-tbody .con-vs-checkbox {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n\n.vs-con-table .vs-con-tbody .vs-table--tbody-table {\n  font-size: 1rem;\n}\n\n.vs-con-table .vs-con-tbody .vs-table--tbody-table .tr-spacer {\n  height: 2px;\n}\n\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .tr-table .tr-expand td {\n  padding: 0;\n}\n\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .tr-table td {\n  padding: 1rem;\n}\n\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th {\n  padding: 10px 15px;\n}\n\n.vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead .con-td-check {\n  -webkit-box-shadow: none;\n}\n\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead .con-td-check {\n  background: transparent;\n          box-shadow: none;\n}\n\n[dir] .vs-con-table .vs-con-tbody .vs-table--tbody-table .tr-values .vs-table--td {\n  padding: 10px 15px;\n}\n\n[dir] .vs-con-table .vs-table--pagination {\n  margin-top: 1rem;\n}\n\n.con-slot-tabs {\n  width: 100%;\n}\n\n.vs-tabs--li {\n  white-space: nowrap;\n}\n\n.vs-tabs--li button {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n[dir] .vs-tabs-position-left .vs-tabs--li {\n  padding: .35rem 0.3rem;\n}\n\n.vs-tabs--li button {\n  font-family: inherit;\n  color: inherit;\n}\n\n.vs-tabs--li .vs-icon-primary,\n.vs-tabs--li .vs-icon-success,\n.vs-tabs--li .vs-icon-warning,\n.vs-tabs--li .vs-icon-danger,\n.vs-tabs--li .vs-icon-dark {\n  color: inherit;\n}\n\n.vs-tabs .con-tab .vs-button-filled:hover {\n  color: #fff !important;\n}\n\n.vs-textarea {\n  font-size: 1rem;\n  color: inherit;\n  font-family: \"Montserrat\", Helvetica, Arial, sans-serif;\n  line-height: 1.6;\n}\n\n[dir] .vs-con-textarea {\n  border: 1px solid rgba(0, 0, 0, 0.2) !important;\n}\n\n.vs-con-textarea > h4 {\n  color: inherit;\n}\n\n.vs-tooltip {\n  z-index: 52000;\n}\n\n.con-img-upload {\n  overflow: hidden;\n}\n\n[dir] .con-img-upload {\n  padding: 0.6rem;\n}\n\n[dir] .con-img-upload .img-upload {\n  margin: 15px;\n}\n\n.view-upload {\n  z-index: 52000;\n}\n\n/*=========================================================================================\n    File Name: _tailwindFixes.scss\n    Description: partial- Tailwind Fixes\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\nbutton:focus {\n  outline: none;\n}\n\n/*=========================================================================================\n  File Name: _rtl.scss\n  Description: partial- rtl - imports rtl styles\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n  File Name: _rtlFixes.scss\n  Description: partial - rtl fix - fixes rtl specific issues\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.vuesax-app-is-rtl .ps-container:not(.enable-rtl-x-scroll) .ps__scrollbar-x-rail {\n  display: none !important;\n}\n\n.vuesax-app-is-rtl .ag-pinned-left-cols-container {\n  margin-right: 5px;\n}\n\n.vuesax-app-is-rtl .vs-dropdown-menu.rightx .vs-dropdown--menu--after {\n  right: unset !important;\n  left: 30px !important;\n}\n\n.vuesax-app-is-rtl .vs-loading > * {\n  top: 0;\n}\n\n.vuesax-app-is-rtl .con-vs-dropdown--menu {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n\n.vuesax-app-is-rtl .vx-navbar-dropdown.dropdownx-enter, .vuesax-app-is-rtl .vx-navbar-dropdown.dropdownx-leave-to {\n  -webkit-transform: translateY(8px) !important;\n          transform: translateY(8px) !important;\n}\n\n@media (max-width: 500px) {\n  .vuesax-app-is-rtl .vx-navbar-dropdown.dropdown-custom.con-vs-dropdown--menu {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n  }\n\n  .vuesax-app-is-rtl .vx-navbar-dropdown.dropdown-custom.dropdownx-enter, .vuesax-app-is-rtl .vx-navbar-dropdown.dropdown-custom.dropdownx-leave-to {\n    -webkit-transform: translate(100%, 8px) !important;\n            transform: translate(100%, 8px) !important;\n  }\n}\n\n.vuesax-app-is-rtl .flatpickr-prev-month,\n.vuesax-app-is-rtl .flatpickr-next-month {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.vuesax-app-is-rtl .swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0 !important;\n          transform-origin: 100% 0 !important;\n}\n\n.vuesax-app-is-rtl .scroll-area-v-nav-menu .ps__scrollbar-y-rail {\n  right: unset !important;\n  left: -6px !important;\n}\n\n/*=========================================================================================\n  File Name: _rtlOverrides.scss\n  Description: partial - rtl fix - fixes styles overridden by rtl\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n.v-step[x-placement^=bottom] .v-step__arrow {\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n}\n\n.v-step[x-placement^=left] .v-step__arrow {\n  border-bottom-color: transparent !important;\n  border-right-color: transparent !important;\n  border-top-color: transparent !important;\n}\n\n.v-step[x-placement^=top] .v-step__arrow {\n  border-bottom-color: transparent !important;\n  border-right-color: transparent !important;\n  border-left-color: transparent !important;\n}\n\n.v-step[x-placement^=right] .v-step__arrow {\n  border-bottom-color: transparent !important;\n  border-top-color: transparent !important;\n  border-left-color: transparent !important;\n}\n\n.swiper-container-rtl .swiper-button-prev {\n  right: 10px !important;\n  left: auto !important;\n}\n\n.swiper-container-rtl .swiper-button-next {\n  left: 10px !important;\n  right: auto !important;\n}\n\n.vjs-fluid {\n  padding-top: 41.66666666666667% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/iconfont.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./src/assets/css/iconfont.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"feather\";\n\n  src: url(" + escape(__webpack_require__(/*! ../fonts/feather.eot?t=1525787366991 */ "./src/assets/fonts/feather.eot?t=1525787366991")) + "); /* IE9 */\n\n  src: url(" + escape(__webpack_require__(/*! ../fonts/feather.eot?t=1525787366991 */ "./src/assets/fonts/feather.eot?t=1525787366991")) + "#iefix) format('embedded-opentype'), \n  url(" + escape(__webpack_require__(/*! ../fonts/feather.woff?t=1525787366991 */ "./src/assets/fonts/feather.woff?t=1525787366991")) + ") format('woff'), \n  url(" + escape(__webpack_require__(/*! ../fonts/feather.ttf?t=1525787366991 */ "./src/assets/fonts/feather.ttf?t=1525787366991")) + ") format('truetype'), \n  url(" + escape(__webpack_require__(/*! ../fonts/feather.svg?t=1525787366991 */ "./src/assets/fonts/feather.svg?t=1525787366991")) + "#feather) format('svg'); /* iOS 4.1- */\n}\n\n.feather {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'feather' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-alert-octagon:before { content: \"\\E81B\";\n}\n\n.icon-alert-circle:before { content: \"\\E81C\";\n}\n\n.icon-activity:before { content: \"\\E81D\";\n}\n\n.icon-alert-triangle:before { content: \"\\E81E\";\n}\n\n.icon-align-center:before { content: \"\\E81F\";\n}\n\n.icon-airplay:before { content: \"\\E820\";\n}\n\n.icon-align-justify:before { content: \"\\E821\";\n}\n\n.icon-align-left:before { content: \"\\E822\";\n}\n\n.icon-align-right:before { content: \"\\E823\";\n}\n\n.icon-arrow-down-left:before { content: \"\\E824\";\n}\n\n.icon-arrow-down-right:before { content: \"\\E825\";\n}\n\n.icon-anchor:before { content: \"\\E826\";\n}\n\n.icon-aperture:before { content: \"\\E827\";\n}\n\n.icon-arrow-left:before { content: \"\\E828\";\n}\n\n.icon-arrow-right:before { content: \"\\E829\";\n}\n\n.icon-arrow-down:before { content: \"\\E82A\";\n}\n\n.icon-arrow-up-left:before { content: \"\\E82B\";\n}\n\n.icon-arrow-up-right:before { content: \"\\E82C\";\n}\n\n.icon-arrow-up:before { content: \"\\E82D\";\n}\n\n.icon-award:before { content: \"\\E82E\";\n}\n\n.icon-bar-chart:before { content: \"\\E82F\";\n}\n\n.icon-at-sign:before { content: \"\\E830\";\n}\n\n.icon-bar-chart-2:before { content: \"\\E831\";\n}\n\n.icon-battery-charging:before { content: \"\\E832\";\n}\n\n.icon-bell-off:before { content: \"\\E833\";\n}\n\n.icon-battery:before { content: \"\\E834\";\n}\n\n.icon-bluetooth:before { content: \"\\E835\";\n}\n\n.icon-bell:before { content: \"\\E836\";\n}\n\n.icon-book:before { content: \"\\E837\";\n}\n\n.icon-briefcase:before { content: \"\\E838\";\n}\n\n.icon-camera-off:before { content: \"\\E839\";\n}\n\n.icon-calendar:before { content: \"\\E83A\";\n}\n\n.icon-bookmark:before { content: \"\\E83B\";\n}\n\n.icon-box:before { content: \"\\E83C\";\n}\n\n.icon-camera:before { content: \"\\E83D\";\n}\n\n.icon-check-circle:before { content: \"\\E83E\";\n}\n\n.icon-check:before { content: \"\\E83F\";\n}\n\n.icon-check-square:before { content: \"\\E840\";\n}\n\n.icon-cast:before { content: \"\\E841\";\n}\n\n.icon-chevron-down:before { content: \"\\E842\";\n}\n\n.icon-chevron-left:before { content: \"\\E843\";\n}\n\n.icon-chevron-right:before { content: \"\\E844\";\n}\n\n.icon-chevron-up:before { content: \"\\E845\";\n}\n\n.icon-chevrons-down:before { content: \"\\E846\";\n}\n\n.icon-chevrons-right:before { content: \"\\E847\";\n}\n\n.icon-chevrons-up:before { content: \"\\E848\";\n}\n\n.icon-chevrons-left:before { content: \"\\E849\";\n}\n\n.icon-circle:before { content: \"\\E84A\";\n}\n\n.icon-clipboard:before { content: \"\\E84B\";\n}\n\n.icon-chrome:before { content: \"\\E84C\";\n}\n\n.icon-clock:before { content: \"\\E84D\";\n}\n\n.icon-cloud-lightning:before { content: \"\\E84E\";\n}\n\n.icon-cloud-drizzle:before { content: \"\\E84F\";\n}\n\n.icon-cloud-rain:before { content: \"\\E850\";\n}\n\n.icon-cloud-off:before { content: \"\\E851\";\n}\n\n.icon-codepen:before { content: \"\\E852\";\n}\n\n.icon-cloud-snow:before { content: \"\\E853\";\n}\n\n.icon-compass:before { content: \"\\E854\";\n}\n\n.icon-copy:before { content: \"\\E855\";\n}\n\n.icon-corner-down-right:before { content: \"\\E856\";\n}\n\n.icon-corner-down-left:before { content: \"\\E857\";\n}\n\n.icon-corner-left-down:before { content: \"\\E858\";\n}\n\n.icon-corner-left-up:before { content: \"\\E859\";\n}\n\n.icon-corner-up-left:before { content: \"\\E85A\";\n}\n\n.icon-corner-up-right:before { content: \"\\E85B\";\n}\n\n.icon-corner-right-down:before { content: \"\\E85C\";\n}\n\n.icon-corner-right-up:before { content: \"\\E85D\";\n}\n\n.icon-cpu:before { content: \"\\E85E\";\n}\n\n.icon-credit-card:before { content: \"\\E85F\";\n}\n\n.icon-crosshair:before { content: \"\\E860\";\n}\n\n.icon-disc:before { content: \"\\E861\";\n}\n\n.icon-delete:before { content: \"\\E862\";\n}\n\n.icon-download-cloud:before { content: \"\\E863\";\n}\n\n.icon-download:before { content: \"\\E864\";\n}\n\n.icon-droplet:before { content: \"\\E865\";\n}\n\n.icon-edit-2:before { content: \"\\E866\";\n}\n\n.icon-edit:before { content: \"\\E867\";\n}\n\n.icon-edit-1:before { content: \"\\E868\";\n}\n\n.icon-external-link:before { content: \"\\E869\";\n}\n\n.icon-eye:before { content: \"\\E86A\";\n}\n\n.icon-feather:before { content: \"\\E86B\";\n}\n\n.icon-facebook:before { content: \"\\E86C\";\n}\n\n.icon-file-minus:before { content: \"\\E86D\";\n}\n\n.icon-eye-off:before { content: \"\\E86E\";\n}\n\n.icon-fast-forward:before { content: \"\\E86F\";\n}\n\n.icon-file-text:before { content: \"\\E870\";\n}\n\n.icon-film:before { content: \"\\E871\";\n}\n\n.icon-file:before { content: \"\\E872\";\n}\n\n.icon-file-plus:before { content: \"\\E873\";\n}\n\n.icon-folder:before { content: \"\\E874\";\n}\n\n.icon-filter:before { content: \"\\E875\";\n}\n\n.icon-flag:before { content: \"\\E876\";\n}\n\n.icon-globe:before { content: \"\\E877\";\n}\n\n.icon-grid:before { content: \"\\E878\";\n}\n\n.icon-heart:before { content: \"\\E879\";\n}\n\n.icon-home:before { content: \"\\E87A\";\n}\n\n.icon-github:before { content: \"\\E87B\";\n}\n\n.icon-image:before { content: \"\\E87C\";\n}\n\n.icon-inbox:before { content: \"\\E87D\";\n}\n\n.icon-layers:before { content: \"\\E87E\";\n}\n\n.icon-info:before { content: \"\\E87F\";\n}\n\n.icon-instagram:before { content: \"\\E880\";\n}\n\n.icon-layout:before { content: \"\\E881\";\n}\n\n.icon-link-2:before { content: \"\\E882\";\n}\n\n.icon-life-buoy:before { content: \"\\E883\";\n}\n\n.icon-link:before { content: \"\\E884\";\n}\n\n.icon-log-in:before { content: \"\\E885\";\n}\n\n.icon-list:before { content: \"\\E886\";\n}\n\n.icon-lock:before { content: \"\\E887\";\n}\n\n.icon-log-out:before { content: \"\\E888\";\n}\n\n.icon-loader:before { content: \"\\E889\";\n}\n\n.icon-mail:before { content: \"\\E88A\";\n}\n\n.icon-maximize-2:before { content: \"\\E88B\";\n}\n\n.icon-map:before { content: \"\\E88C\";\n}\n\n.icon-map-pin:before { content: \"\\E88E\";\n}\n\n.icon-menu:before { content: \"\\E88F\";\n}\n\n.icon-message-circle:before { content: \"\\E890\";\n}\n\n.icon-message-square:before { content: \"\\E891\";\n}\n\n.icon-minimize-2:before { content: \"\\E892\";\n}\n\n.icon-mic-off:before { content: \"\\E893\";\n}\n\n.icon-minus-circle:before { content: \"\\E894\";\n}\n\n.icon-mic:before { content: \"\\E895\";\n}\n\n.icon-minus-square:before { content: \"\\E896\";\n}\n\n.icon-minus:before { content: \"\\E897\";\n}\n\n.icon-moon:before { content: \"\\E898\";\n}\n\n.icon-monitor:before { content: \"\\E899\";\n}\n\n.icon-more-vertical:before { content: \"\\E89A\";\n}\n\n.icon-more-horizontal:before { content: \"\\E89B\";\n}\n\n.icon-move:before { content: \"\\E89C\";\n}\n\n.icon-music:before { content: \"\\E89D\";\n}\n\n.icon-navigation-2:before { content: \"\\E89E\";\n}\n\n.icon-navigation:before { content: \"\\E89F\";\n}\n\n.icon-octagon:before { content: \"\\E8A0\";\n}\n\n.icon-package:before { content: \"\\E8A1\";\n}\n\n.icon-pause-circle:before { content: \"\\E8A2\";\n}\n\n.icon-pause:before { content: \"\\E8A3\";\n}\n\n.icon-percent:before { content: \"\\E8A4\";\n}\n\n.icon-phone-call:before { content: \"\\E8A5\";\n}\n\n.icon-phone-forwarded:before { content: \"\\E8A6\";\n}\n\n.icon-phone-missed:before { content: \"\\E8A7\";\n}\n\n.icon-phone-off:before { content: \"\\E8A8\";\n}\n\n.icon-phone-incoming:before { content: \"\\E8A9\";\n}\n\n.icon-phone:before { content: \"\\E8AA\";\n}\n\n.icon-phone-outgoing:before { content: \"\\E8AB\";\n}\n\n.icon-pie-chart:before { content: \"\\E8AC\";\n}\n\n.icon-play-circle:before { content: \"\\E8AD\";\n}\n\n.icon-play:before { content: \"\\E8AE\";\n}\n\n.icon-plus-square:before { content: \"\\E8AF\";\n}\n\n.icon-plus-circle:before { content: \"\\E8B0\";\n}\n\n.icon-plus:before { content: \"\\E8B1\";\n}\n\n.icon-pocket:before { content: \"\\E8B2\";\n}\n\n.icon-printer:before { content: \"\\E8B3\";\n}\n\n.icon-power:before { content: \"\\E8B4\";\n}\n\n.icon-radio:before { content: \"\\E8B5\";\n}\n\n.icon-repeat:before { content: \"\\E8B6\";\n}\n\n.icon-refresh-ccw:before { content: \"\\E8B7\";\n}\n\n.icon-rewind:before { content: \"\\E8B8\";\n}\n\n.icon-rotate-ccw:before { content: \"\\E8B9\";\n}\n\n.icon-refresh-cw:before { content: \"\\E8BA\";\n}\n\n.icon-rotate-cw:before { content: \"\\E8BB\";\n}\n\n.icon-save:before { content: \"\\E8BC\";\n}\n\n.icon-search:before { content: \"\\E8BD\";\n}\n\n.icon-server:before { content: \"\\E8BE\";\n}\n\n.icon-scissors:before { content: \"\\E8BF\";\n}\n\n.icon-share-2:before { content: \"\\E8C0\";\n}\n\n.icon-share:before { content: \"\\E8C1\";\n}\n\n.icon-shield:before { content: \"\\E8C2\";\n}\n\n.icon-settings:before { content: \"\\E8C3\";\n}\n\n.icon-skip-back:before { content: \"\\E8C4\";\n}\n\n.icon-shuffle:before { content: \"\\E8C5\";\n}\n\n.icon-sidebar:before { content: \"\\E8C6\";\n}\n\n.icon-skip-forward:before { content: \"\\E8C7\";\n}\n\n.icon-slack:before { content: \"\\E8C8\";\n}\n\n.icon-slash:before { content: \"\\E8C9\";\n}\n\n.icon-smartphone:before { content: \"\\E8CA\";\n}\n\n.icon-square:before { content: \"\\E8CB\";\n}\n\n.icon-speaker:before { content: \"\\E8CC\";\n}\n\n.icon-star:before { content: \"\\E8CD\";\n}\n\n.icon-stop-circle:before { content: \"\\E8CE\";\n}\n\n.icon-sun:before { content: \"\\E8CF\";\n}\n\n.icon-sunrise:before { content: \"\\E8D0\";\n}\n\n.icon-tablet:before { content: \"\\E8D1\";\n}\n\n.icon-tag:before { content: \"\\E8D2\";\n}\n\n.icon-sunset:before { content: \"\\E8D3\";\n}\n\n.icon-target:before { content: \"\\E8D4\";\n}\n\n.icon-thermometer:before { content: \"\\E8D5\";\n}\n\n.icon-thumbs-up:before { content: \"\\E8D6\";\n}\n\n.icon-thumbs-down:before { content: \"\\E8D7\";\n}\n\n.icon-toggle-left:before { content: \"\\E8D8\";\n}\n\n.icon-toggle-right:before { content: \"\\E8D9\";\n}\n\n.icon-trash-2:before { content: \"\\E8DA\";\n}\n\n.icon-trash:before { content: \"\\E8DB\";\n}\n\n.icon-trending-up:before { content: \"\\E8DC\";\n}\n\n.icon-trending-down:before { content: \"\\E8DD\";\n}\n\n.icon-triangle:before { content: \"\\E8DE\";\n}\n\n.icon-type:before { content: \"\\E8DF\";\n}\n\n.icon-twitter:before { content: \"\\E8E0\";\n}\n\n.icon-upload:before { content: \"\\E8E1\";\n}\n\n.icon-umbrella:before { content: \"\\E8E2\";\n}\n\n.icon-upload-cloud:before { content: \"\\E8E3\";\n}\n\n.icon-unlock:before { content: \"\\E8E4\";\n}\n\n.icon-user-check:before { content: \"\\E8E5\";\n}\n\n.icon-user-minus:before { content: \"\\E8E6\";\n}\n\n.icon-user-plus:before { content: \"\\E8E7\";\n}\n\n.icon-user-x:before { content: \"\\E8E8\";\n}\n\n.icon-user:before { content: \"\\E8E9\";\n}\n\n.icon-users:before { content: \"\\E8EA\";\n}\n\n.icon-video-off:before { content: \"\\E8EB\";\n}\n\n.icon-video:before { content: \"\\E8EC\";\n}\n\n.icon-voicemail:before { content: \"\\E8ED\";\n}\n\n.icon-volume-x:before { content: \"\\E8EE\";\n}\n\n.icon-volume-2:before { content: \"\\E8EF\";\n}\n\n.icon-volume-1:before { content: \"\\E8F0\";\n}\n\n.icon-volume:before { content: \"\\E8F1\";\n}\n\n.icon-watch:before { content: \"\\E8F2\";\n}\n\n.icon-wifi:before { content: \"\\E8F3\";\n}\n\n.icon-x-square:before { content: \"\\E8F4\";\n}\n\n.icon-wind:before { content: \"\\E8F5\";\n}\n\n.icon-x:before { content: \"\\E8F6\";\n}\n\n.icon-x-circle:before { content: \"\\E8F7\";\n}\n\n.icon-zap:before { content: \"\\E8F8\";\n}\n\n.icon-zoom-in:before { content: \"\\E8F9\";\n}\n\n.icon-zoom-out:before { content: \"\\E8FA\";\n}\n\n.icon-command:before { content: \"\\E8FB\";\n}\n\n.icon-cloud:before { content: \"\\E8FC\";\n}\n\n.icon-hash:before { content: \"\\E8FD\";\n}\n\n.icon-headphones:before { content: \"\\E8FE\";\n}\n\n.icon-underline:before { content: \"\\E8FF\";\n}\n\n.icon-italic:before { content: \"\\E900\";\n}\n\n.icon-bold:before { content: \"\\E901\";\n}\n\n.icon-crop:before { content: \"\\E902\";\n}\n\n.icon-help-circle:before { content: \"\\E903\";\n}\n\n.icon-paperclip:before { content: \"\\E904\";\n}\n\n.icon-shopping-cart:before { content: \"\\E905\";\n}\n\n.icon-tv:before { content: \"\\E906\";\n}\n\n.icon-wifi-off:before { content: \"\\E907\";\n}\n\n.icon-minimize:before { content: \"\\E88D\";\n}\n\n.icon-maximize:before { content: \"\\E908\";\n}\n\n.icon-gitlab:before { content: \"\\E909\";\n}\n\n.icon-sliders:before { content: \"\\E90A\";\n}\n\n.icon-star-on:before { content: \"\\E90B\";\n}\n\n.icon-heart-on:before { content: \"\\E90C\";\n}\n\n.icon-archive:before { content: \"\\E90D\";\n}\n\n.icon-arrow-down-circle:before { content: \"\\E90E\";\n}\n\n.icon-arrow-up-circle:before { content: \"\\E90F\";\n}\n\n.icon-arrow-left-circle:before { content: \"\\E910\";\n}\n\n.icon-arrow-right-circle:before { content: \"\\E911\";\n}\n\n.icon-bar-chart-line-:before { content: \"\\E912\";\n}\n\n.icon-bar-chart-line:before { content: \"\\E913\";\n}\n\n.icon-book-open:before { content: \"\\E914\";\n}\n\n.icon-code:before { content: \"\\E915\";\n}\n\n.icon-database:before { content: \"\\E916\";\n}\n\n.icon-dollar-sign:before { content: \"\\E917\";\n}\n\n.icon-folder-plus:before { content: \"\\E918\";\n}\n\n.icon-gift:before { content: \"\\E919\";\n}\n\n.icon-folder-minus:before { content: \"\\E91A\";\n}\n\n.icon-git-commit:before { content: \"\\E91B\";\n}\n\n.icon-git-branch:before { content: \"\\E91C\";\n}\n\n.icon-git-pull-request:before { content: \"\\E91D\";\n}\n\n.icon-git-merge:before { content: \"\\E91E\";\n}\n\n.icon-linkedin:before { content: \"\\E91F\";\n}\n\n.icon-hard-drive:before { content: \"\\E920\";\n}\n\n.icon-more-vertical-:before { content: \"\\E921\";\n}\n\n.icon-more-horizontal-:before { content: \"\\E922\";\n}\n\n.icon-rss:before { content: \"\\E923\";\n}\n\n.icon-send:before { content: \"\\E924\";\n}\n\n.icon-shield-off:before { content: \"\\E925\";\n}\n\n.icon-shopping-bag:before { content: \"\\E926\";\n}\n\n.icon-terminal:before { content: \"\\E927\";\n}\n\n.icon-truck:before { content: \"\\E928\";\n}\n\n.icon-zap-off:before { content: \"\\E929\";\n}\n\n.icon-youtube:before { content: \"\\E92A\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./src/assets/css/main.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: featherIcon.scss\n    Description: Feather icon component's scss. Imported in FeatherIcon.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.feather-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxCard.scss\n    Description: Styles for vx-card component. Imported in VxCard.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-card {\n  width: 100%;\n  display: block;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  position: relative;\n  transition: all .3s ease-in-out;\n}\n[dir] .vx-card {\n  background: #fff;\n  border-radius: .5rem;\n          box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all .3s ease-in-out;\n}\n.vx-card.no-shadow {\n  -webkit-box-shadow: none;\n}\n[dir] .vx-card.no-shadow {\n          box-shadow: none;\n}\n[dir] .vx-card.card-border {\n  border: 1px solid #e4e4e4;\n}\n.vx-card .vx-card__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n[dir] .vx-card .vx-card__header {\n  padding: 1.5rem 1.5rem 0;\n}\n[dir] .vx-card .vx-card__header .vx-card__title h4 + h6 {\n  margin-top: .3rem;\n}\n.vx-card .vx-card__header .vx-card__title h6 {\n  font-weight: 400;\n}\n.vx-card .vx-card__header .vx-card__actions .vx-card__action-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n[dir=ltr] .vx-card .vx-card__header .vx-card__actions .vx-card__action-buttons .feather-icon {\n  margin-left: .5rem;\n}\n[dir=rtl] .vx-card .vx-card__header .vx-card__actions .vx-card__action-buttons .feather-icon {\n  margin-right: .5rem;\n}\n.vx-card .vx-card__header .vx-card__actions svg {\n  transition: all .25s ease-out;\n  height: 1rem;\n  width: 1rem;\n}\n[dir] .vx-card .vx-card__header .vx-card__actions svg {\n  -webkit-transition: all .25s ease-out;\n  cursor: pointer;\n}\n[dir=ltr] .vx-card .vx-card__header .vx-card__actions .rotate180 > svg {\n  -webkit-transform: rotate(180deg) !important;\n  transform: rotate(180deg) !important;\n}\n[dir=rtl] .vx-card .vx-card__header .vx-card__actions .rotate180 > svg {\n  -webkit-transform: rotate(-180deg) !important;\n          transform: rotate(-180deg) !important;\n}\n[dir=ltr] .vx-card img.card-img-top {\n  border-top-left-radius: .5rem;\n  border-top-right-radius: .5rem;\n}\n[dir=rtl] .vx-card img.card-img-top {\n  border-top-right-radius: .5rem;\n  border-top-left-radius: .5rem;\n}\n.vx-card .vx-card__collapsible-content {\n  transition: all .3s ease-in-out;\n}\n[dir] .vx-card .vx-card__collapsible-content {\n  -webkit-transition: all .3s ease-in-out;\n}\n.vx-card .vx-card__collapsible-content.vs-con-loading__container {\n  overflow: unset;\n}\n.vx-card .vx-card__collapsible-content.collapsed {\n  opacity: 0;\n  -webkit-transform: scale(0.99);\n}\n[dir] .vx-card .vx-card__collapsible-content.collapsed {\n          transform: scale(0.99);\n}\n.vx-card .vx-card__collapsible-content .card-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n[dir] .vx-card .vx-card__collapsible-content .card-overlay {\n  padding: 1.25rem;\n}\n[dir=ltr] .vx-card .vx-card__collapsible-content .card-overlay {\n  right: 0;\n  left: 0;\n}\n[dir=rtl] .vx-card .vx-card__collapsible-content .card-overlay {\n  left: 0;\n  right: 0;\n}\n.vx-card .vx-card__collapsible-content .card-overlay > * {\n  position: relative;\n  z-index: 1;\n}\n.vx-card .vx-card__collapsible-content .card-overlay::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n}\n[dir] .vx-card .vx-card__collapsible-content .card-overlay::after {\n  margin: auto;\n  background: rgba(0, 0, 0, 0.6);\n}\n[dir=ltr] .vx-card .vx-card__collapsible-content .card-overlay::after {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .vx-card .vx-card__collapsible-content .card-overlay::after {\n  right: 0;\n  left: 0;\n}\n[dir] .vx-card .vx-card__collapsible-content .vx-card__body {\n  padding: 1.5rem;\n}\n[dir] .vx-card .vx-card__collapsible-content .vx-card__body img + .vx-card__title > h4 {\n  margin-top: 1.5rem;\n}\n.vx-card .vx-card__collapsible-content img {\n  display: block;\n}\n.vx-card .vx-card__code-container {\n  overflow: hidden;\n  transition: opacity .15s, max-height .30s ease-out, -webkit-transform 0.35s;\n  transition: transform 0.35s, opacity .15s, max-height .30s ease-out;\n  transition: transform 0.35s, opacity .15s, max-height .30s ease-out, -webkit-transform 0.35s;\n}\n[dir] .vx-card .vx-card__code-container {\n  -webkit-transition: opacity .15s, max-height .30s ease-out, -webkit-transform 0.35s;\n}\n.vx-card .vx-card__code-container.collapsed {\n  opacity: 0;\n  -webkit-transform: translateY(100%);\n}\n[dir] .vx-card .vx-card__code-container.collapsed {\n          transform: translateY(100%);\n}\n[dir] .vx-card .vx-card__code-container .code-content {\n  margin: 1.5rem;\n}\n.vx-card .vx-card__code-container .code-content pre[class^=\"language-\"] {\n  max-height: 350px;\n}\n[dir] .vx-card .vx-card__code-container .code-content pre[class^=\"language-\"] {\n  border-radius: .5rem;\n  margin-bottom: 0;\n}\n[dir] .vx-card .vx-card__footer {\n  padding: 0 1.5rem 1.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir] .vx-input-group .vs-con-textarea {\n  margin-bottom: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.vx-input-group .vx-input-group-prepend .prepend-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text:not(:first-child) {\n  border-left: 1px solid rgba(0, 0, 0, 0.18);\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text:not(:first-child) {\n  border-right: 1px solid rgba(0, 0, 0, 0.18);\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text:not(:first-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text:not(:last-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text.btn-addon .vs-button {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text.btn-addon .vs-button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-prepend .prepend-text.btn-addon .vs-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: none;\n}\n[dir=rtl] .vx-input-group .vx-input-group-prepend .prepend-text.btn-addon .vs-button:not(:first-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.vx-input-group .vx-input-group-append .append-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text:not(:first-child) {\n  border-left: 1px solid rgba(0, 0, 0, 0.18);\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text:not(:first-child) {\n  border-right: 1px solid rgba(0, 0, 0, 0.18);\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text:not(:last-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text.btn-addon .vs-button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text.btn-addon .vs-button {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=ltr] .vx-input-group .vx-input-group-append .append-text.btn-addon .vs-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n}\n[dir=rtl] .vx-input-group .vx-input-group-append .append-text.btn-addon .vs-button:not(:last-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: none;\n}\n.vx-input-group .prepend-text,\n.vx-input-group .append-text {\n  color: #fff;\n}\n[dir] .vx-input-group .prepend-text:not(.btn-addon), [dir] .vx-input-group .append-text:not(.btn-addon) {\n  border-radius: 6px;\n}\n[dir=ltr] .vx-input-group .prepend-text:not(.btn-addon), [dir=ltr] .vx-input-group .append-text:not(.btn-addon) {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[dir=rtl] .vx-input-group .prepend-text:not(.btn-addon), [dir=rtl] .vx-input-group .append-text:not(.btn-addon) {\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n.vx-input-group .prepend-text.btn-addon .vs-button,\n  .vx-input-group .append-text.btn-addon .vs-button {\n  height: 100%;\n}\n[dir] .vx-input-group .prepend-text.btn-addon .vs-button, [dir] .vx-input-group .append-text.btn-addon .vs-button {\n  padding: 0 1.5rem !important;\n}\n[dir=ltr] .vx-input-group .vx-input-group-default:not(:first-child) input, [dir=ltr] .vx-input-group .vx-input-group-default:not(:first-child) .vs-con-textarea {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-default:not(:first-child) input, [dir=rtl] .vx-input-group .vx-input-group-default:not(:first-child) .vs-con-textarea {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vx-input-group .vx-input-group-default .vs-input {\n  width: 100%;\n}\n[dir=ltr] .vx-input-group .vx-input-group-default:not(:last-child) input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vx-input-group .vx-input-group-default:not(:last-child) input {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxList.scss\n    Description: Styles for vx-list component. Imported in VxList.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.list .list__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n[dir] .list .list__item {\n  padding: .4rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("300c43a9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1448286e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7e23de3d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3f4bf5d2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7ba5bd90')) {
      api.createRecord('7ba5bd90', component.options)
    } else {
      api.reload('7ba5bd90', component.options)
    }
    module.hot.accept(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
(function () {
      api.rerender('7ba5bd90', {
        render: _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assets/css/iconfont.css":
/*!*************************************!*\
  !*** ./src/assets/css/iconfont.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./iconfont.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/iconfont.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3cbdad68", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./iconfont.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/iconfont.css", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./iconfont.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/iconfont.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("361d4a6e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--6-oneOf-3-2!./main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/main.css");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/fonts/feather.eot?t=1525787366991":
/*!******************************************************!*\
  !*** ./src/assets/fonts/feather.eot?t=1525787366991 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/feather.931c9e74.eot";

/***/ }),

/***/ "./src/assets/fonts/feather.svg?t=1525787366991":
/*!******************************************************!*\
  !*** ./src/assets/fonts/feather.svg?t=1525787366991 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/feather.90f969db.svg";

/***/ }),

/***/ "./src/assets/fonts/feather.ttf?t=1525787366991":
/*!******************************************************!*\
  !*** ./src/assets/fonts/feather.ttf?t=1525787366991 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/feather.6a750f01.ttf";

/***/ }),

/***/ "./src/assets/fonts/feather.woff?t=1525787366991":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/feather.woff?t=1525787366991 ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/feather.3d2fa2e5.woff";

/***/ }),

/***/ "./src/assets/images/pages/vuexy-login-bg.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/pages/vuexy-login-bg.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vuexy-login-bg.04351a33.jpg";

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./main.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4e30ee70", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader??ref--8-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./main.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-oneOf-3-1!../../../node_modules/postcss-loader/src??ref--8-oneOf-3-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-3-3!./main.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/assets/utils/color.js":
/*!***********************************!*\
  !*** ./src/assets/utils/color.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  darken: function darken(color, percent) {
    var f = color.split(","),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = parseInt(f[0].slice(4)),
        G = parseInt(f[1]),
        B = parseInt(f[2]);
    return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
  },
  getColor: function getColor(colorx) {
    var alphax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var defaultx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    // change color hex to RGB
    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);

      if (alphax == 1) {
        colorx = "rgb(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ")");
      } else {
        colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(alphax, ")");
      }
    } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
        colorx = colorx.replace(/.?([0-9]\))$/, "".concat(alphax, ")"));
      }
    } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
        colorx = colorx.replace(/^(rgb)/, "rgba");
        colorx = colorx.replace(/\)$/, ",".concat(alphax, ")"));
      }
    }

    return colorx;
  },
  isColor: function isColor(colorx) {
    var vscolors = ['primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light'];
    return vscolors.includes(colorx);
  },
  RandomColor: function RandomColor() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return "rgb(".concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ",").concat(getRandomInt(0, 255), ")");
  },
  rColor: function rColor(colorx) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (/^[#]/.test(colorx)) {
      var c = this.hexToRgb(colorx);
      colorx = "rgba(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ",").concat(opacity, ")");
    } else if (/^[rgb]/.test(colorx)) {
      var colorSplit = colorx.split(')')[0];

      if (!/^[rgba]/.test(colorx)) {
        colorSplit.replace('rgb', 'rgba');
        colorSplit += ",".concat(opacity, ")");
      } else {
        // colorSplit.replace('rgb','rgba')
        colorSplit += ")";
      }

      colorx = colorSplit;
    }

    var vscolors = ['primary', 'success', 'danger', 'warning', 'dark'];

    if (colorx) {
      if (/[#()]/.test(colorx)) {
        return colorx;
      } else {
        if (vscolors.includes(colorx)) {
          return "rgba(var(--".concat(colorx, "),").concat(opacity, ")");
        } else {
          return "rgba(var(--primary),".concat(opacity, ")");
        }
      }
    } else {
      return "rgba(var(--primary),".concat(opacity, ")");
    }
  },
  contrastColor: function contrastColor(elementx) {
    var c = elementx;

    if (/[#]/g.test(elementx)) {
      var rgbx = this.hexToRgb(elementx);
      c = "rgb(".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b, ")");
    }

    var rgb = c.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    if (yiq >= 128) {
      return true;
    } else {
      return false;
    }
  },
  setCssVariable: function setCssVariable(propertyName, value) {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(propertyName, value);
    }
  },
  hexToRgb: function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  getVariable: function getVariable(styles, propertyName) {
    return String(styles.getPropertyValue(propertyName)).trim();
  },
  changeColor: function changeColor(colorInicial) {
    var colores = ['primary', 'success', 'danger', 'warning', 'dark'];
    var colorx;

    if (colores.includes(colorInicial)) {
      var style = getComputedStyle(document.documentElement);
      colorx = this.getVariable(style, '--' + colorInicial);
    } else {
      if (/[rgb()]/g.test(colorInicial)) {
        colorx = colorInicial.replace(/[rgb()]/g, '');
      } else if (/[#]/g.test(colorInicial)) {
        var rgbx = this.hexToRgb(colorInicial);
        colorx = "".concat(rgbx.r, ",").concat(rgbx.g, ",").concat(rgbx.b);
      } else {
        colorx = '--' + colorInicial;
      }
    }

    return colorx; // this.setCssVariable('--'+clave,colorx)
  }
});

/***/ }),

/***/ "./src/assets/utils/index.js":
/*!***********************************!*\
  !*** ./src/assets/utils/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  insertBody: function insertBody(elx) {
    document.body.insertBefore(elx, document.body.firstChild);
  },
  removeBody: function removeBody(element) {
    var bodyx = document.body;
    bodyx.removeChild(element);
  },
  changePosition: function changePosition(elx, content, conditional) {
    var topx = 0;
    var leftx = 0;
    var widthx = 0;
    var scrollTopx = window.pageYOffset || document.documentElement.scrollTop;

    if (elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout(function () {
        if (conditional) {
          topx = elx.getBoundingClientRect().top - content.clientHeight + scrollTopx;
        } else {
          topx = elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight + scrollTopx;
        }
      }, 1);
    } else {
      topx = conditional ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5 : elx.getBoundingClientRect().top + scrollTopx;
    }

    leftx = elx.getBoundingClientRect().left;
    widthx = elx.offsetWidth;
    var cords = {
      left: "".concat(leftx, "px"),
      top: "".concat(topx, "px"),
      width: "".concat(widthx, "px")
    };
    return cords;
  }
});

/***/ }),

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// axios
 //const baseURL = "http://hnh.local:8085/api";
// const baseURL = 'https://api-hnh.enigma-tech.in/api'

var baseURL = "https://qa-api-hnh.enigma-tech.in/api";
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseURL // You can add your headers here

}));

/***/ }),

/***/ "./src/components/FeatherIcon.vue":
/*!****************************************!*\
  !*** ./src/components/FeatherIcon.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatherIcon.vue?vue&type=script&lang=js& */ "./src/components/FeatherIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('748aefbc')) {
      api.createRecord('748aefbc', component.options)
    } else {
      api.reload('748aefbc', component.options)
    }
    
  }
}
component.options.__file = "src/components/FeatherIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FeatherIcon.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/FeatherIcon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/vx-card/VxCard.vue":
/*!*******************************************!*\
  !*** ./src/components/vx-card/VxCard.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxCard.vue?vue&type=template&id=f5126d14& */ "./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&");
/* harmony import */ var _VxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxCard.vue?vue&type=script&lang=js& */ "./src/components/vx-card/VxCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxCard.vue?vue&type=style&index=0&lang=scss& */ "./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f5126d14')) {
      api.createRecord('f5126d14', component.options)
    } else {
      api.reload('f5126d14', component.options)
    }
    module.hot.accept(/*! ./VxCard.vue?vue&type=template&id=f5126d14& */ "./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxCard.vue?vue&type=template&id=f5126d14& */ "./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&");
(function () {
      api.rerender('f5126d14', {
        render: _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/vx-card/VxCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/vx-card/VxCard.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/vx-card/VxCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&":
/*!**************************************************************************!*\
  !*** ./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxCard.vue?vue&type=template&id=f5126d14& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-card/VxCard.vue?vue&type=template&id=f5126d14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxCard_vue_vue_type_template_id_f5126d14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/vx-input-group/VxInputGroup.vue":
/*!********************************************************!*\
  !*** ./src/components/vx-input-group/VxInputGroup.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& */ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&");
/* harmony import */ var _VxInputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxInputGroup.vue?vue&type=script&lang=js& */ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxInputGroup.vue?vue&type=style&index=0&lang=scss& */ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxInputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('00433e15')) {
      api.createRecord('00433e15', component.options)
    } else {
      api.rerender('00433e15', component.options)
    }
    module.hot.accept(/*! ./VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& */ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& */ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&");
(function () {
      api.rerender('00433e15', {
        render: _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/vx-input-group/VxInputGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxInputGroup.vue?vue&type=template&id=00433e15&functional=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-input-group/VxInputGroup.vue?vue&type=template&id=00433e15&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxInputGroup_vue_vue_type_template_id_00433e15_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/vx-list/VxList.vue":
/*!*******************************************!*\
  !*** ./src/components/vx-list/VxList.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxList.vue?vue&type=template&id=776bedb6& */ "./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&");
/* harmony import */ var _VxList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxList.vue?vue&type=script&lang=js& */ "./src/components/vx-list/VxList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxList.vue?vue&type=style&index=0&lang=scss& */ "./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('776bedb6')) {
      api.createRecord('776bedb6', component.options)
    } else {
      api.reload('776bedb6', component.options)
    }
    module.hot.accept(/*! ./VxList.vue?vue&type=template&id=776bedb6& */ "./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxList.vue?vue&type=template&id=776bedb6& */ "./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&");
(function () {
      api.rerender('776bedb6', {
        render: _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/components/vx-list/VxList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/vx-list/VxList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/vx-list/VxList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&":
/*!**************************************************************************!*\
  !*** ./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxList.vue?vue&type=template&id=776bedb6& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/vx-list/VxList.vue?vue&type=template&id=776bedb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxList_vue_vue_type_template_id_776bedb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/filters/filters.js":
/*!********************************!*\
  !*** ./src/filters/filters.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");




vue__WEBPACK_IMPORTED_MODULE_3__["default"].filter('title', function (value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
  if (!value) return '';
  value = value.toString();
  var arr = value.split(replacer);
  var capitalized_array = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized_array.push(capitalized);
  });
  return capitalized_array.join(' ');
});

/***/ }),

/***/ "./src/globalComponents.js":
/*!*********************************!*\
  !*** ./src/globalComponents.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _layouts_components_vx_tooltip_VxTooltip_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/components/vx-tooltip/VxTooltip.vue */ "./src/layouts/components/vx-tooltip/VxTooltip.vue");
/* harmony import */ var _components_vx_card_VxCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vx-card/VxCard.vue */ "./src/components/vx-card/VxCard.vue");
/* harmony import */ var _components_vx_list_VxList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/vx-list/VxList.vue */ "./src/components/vx-list/VxList.vue");
/* harmony import */ var _layouts_components_VxBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/components/VxBreadcrumb.vue */ "./src/layouts/components/VxBreadcrumb.vue");
/* harmony import */ var _components_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FeatherIcon.vue */ "./src/components/FeatherIcon.vue");
/* harmony import */ var _components_vx_input_group_VxInputGroup_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/vx-input-group/VxInputGroup.vue */ "./src/components/vx-input-group/VxInputGroup.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_8__);


/*=========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/







vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_layouts_components_vx_tooltip_VxTooltip_vue__WEBPACK_IMPORTED_MODULE_2__["default"].name, _layouts_components_vx_tooltip_VxTooltip_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_components_vx_card_VxCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"].name, _components_vx_card_VxCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_components_vx_list_VxList_vue__WEBPACK_IMPORTED_MODULE_4__["default"].name, _components_vx_list_VxList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_layouts_components_VxBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_5__["default"].name, _layouts_components_VxBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_components_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"].name, _components_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(_components_vx_input_group_VxInputGroup_vue__WEBPACK_IMPORTED_MODULE_7__["default"].name, _components_vx_input_group_VxInputGroup_vue__WEBPACK_IMPORTED_MODULE_7__["default"]); // v-select component

 // Set the components prop default to return our fresh components

vue_select__WEBPACK_IMPORTED_MODULE_8___default.a.props.components.default = function () {
  return {
    Deselect: {
      render: function render(createElement) {
        return createElement('feather-icon', {
          props: {
            icon: 'XIcon',
            svgClasses: 'w-4 h-4 mt-1'
          }
        });
      }
    },
    OpenIndicator: {
      render: function render(createElement) {
        return createElement('feather-icon', {
          props: {
            icon: 'ChevronDownIcon',
            svgClasses: 'w-5 h-5'
          }
        });
      }
    }
  };
};

vue__WEBPACK_IMPORTED_MODULE_1__["default"].component(vue_select__WEBPACK_IMPORTED_MODULE_8___default.a);

/***/ }),

/***/ "./src/layouts/components/VxBreadcrumb.vue":
/*!*************************************************!*\
  !*** ./src/layouts/components/VxBreadcrumb.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& */ "./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&");
/* harmony import */ var _VxBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxBreadcrumb.vue?vue&type=script&lang=js& */ "./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5d02e88f')) {
      api.createRecord('5d02e88f', component.options)
    } else {
      api.rerender('5d02e88f', component.options)
    }
    module.hot.accept(/*! ./VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& */ "./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& */ "./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&");
(function () {
      api.rerender('5d02e88f', {
        render: _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/components/VxBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/VxBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&":
/*!************************************************************************************************!*\
  !*** ./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/VxBreadcrumb.vue?vue&type=template&id=5d02e88f&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxBreadcrumb_vue_vue_type_template_id_5d02e88f_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/layouts/components/navbar/navbarSearchAndPinList.js":
/*!*****************************************************************!*\
  !*** ./src/layouts/components/navbar/navbarSearchAndPinList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({
  pages: {
    key: "title",
    data: [{
      title: 'Home',
      url: '/',
      icon: 'HomeIcon',
      is_bookmarked: false
    }, {
      title: 'Page 2',
      url: '/page2',
      icon: 'FileIcon',
      is_bookmarked: false
    }]
  }
});
/* eslint-enable */

/***/ }),

/***/ "./src/layouts/components/vx-tooltip/VxTooltip.vue":
/*!*********************************************************!*\
  !*** ./src/layouts/components/vx-tooltip/VxTooltip.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxTooltip.vue?vue&type=template&id=35b97e18& */ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&");
/* harmony import */ var _VxTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxTooltip.vue?vue&type=script&lang=js& */ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('35b97e18')) {
      api.createRecord('35b97e18', component.options)
    } else {
      api.reload('35b97e18', component.options)
    }
    module.hot.accept(/*! ./VxTooltip.vue?vue&type=template&id=35b97e18& */ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxTooltip.vue?vue&type=template&id=35b97e18& */ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&");
(function () {
      api.rerender('35b97e18', {
        render: _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "src/layouts/components/vx-tooltip/VxTooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTooltip.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&":
/*!****************************************************************************************!*\
  !*** ./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff66f42-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VxTooltip.vue?vue&type=template&id=35b97e18& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dff66f42-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/layouts/components/vx-tooltip/VxTooltip.vue?vue&type=template&id=35b97e18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_dff66f42_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxTooltip_vue_vue_type_template_id_35b97e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.promise.js */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es6.object.assign.js */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es7.promise.finally.js */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_core_js_modules_es7_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.common.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuesax_dist_vuesax_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuesax/dist/vuesax.css */ "./node_modules/vuesax/dist/vuesax.css");
/* harmony import */ var vuesax_dist_vuesax_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuesax_dist_vuesax_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axios.js */ "./src/axios.js");
/* harmony import */ var _filters_filters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/filters.js */ "./src/filters/filters.js");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../themeConfig.js */ "./themeConfig.js");
/* harmony import */ var _globalComponents_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./globalComponents.js */ "./src/globalComponents.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/css/main.css */ "./src/assets/css/main.css");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var vue2_hammer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue2-hammer */ "./node_modules/vue2-hammer/index.min.js");
/* harmony import */ var vue2_hammer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vue2_hammer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");





 // Vuesax Component Framework


 //Material Icons

 // Vuesax

vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vuesax__WEBPACK_IMPORTED_MODULE_6___default.a); // axios

 // Filters

 // Theme Configurations

 // Globally Registered Components

 // Styles: SCSS

 // Tailwind

 // Vue Router

 // Vuex Store

 // Vuejs - Vue wrapper for hammerjs


vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue2_hammer__WEBPACK_IMPORTED_MODULE_17__["VueHammer"]); // PrismJS


 // Feather font icon

__webpack_require__(/*! ./assets/css/iconfont.css */ "./src/assets/css/iconfont.css"); // Add a request interceptor


_axios_js__WEBPACK_IMPORTED_MODULE_9__["default"].interceptors.request.use(function (config) {
  var token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = "Bearer ".concat(token);
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
_axios_js__WEBPACK_IMPORTED_MODULE_9__["default"].interceptors.response.use(null, function (error) {
  if (error) {
    var originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      return _router__WEBPACK_IMPORTED_MODULE_15__["default"].push('/pages/login');
    }
  }
});
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$http = _axios_js__WEBPACK_IMPORTED_MODULE_9__["default"];
var token = localStorage.getItem('token');

if (token) {
  vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$http.defaults.headers.common['Authorization'] = "Bearer ".concat(token);
} // Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';
// VeeValidate



vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vee_validate__WEBPACK_IMPORTED_MODULE_20__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_15__["default"],
  store: _store_store__WEBPACK_IMPORTED_MODULE_16__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: "history",
  base: "/",
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: "",
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(20), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./layouts/main/Main.vue */ "./src/layouts/main/Main.vue"));
    },
    children: [// =============================================================================
    // Theme Routes
    // =============================================================================
    {
      path: "/",
      name: "home",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(7), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./views/Home.vue */ "./src/views/Home.vue"));
      }
    }, {
      path: "/pages/users",
      name: "page-users",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! @/views/pages/users/Users.vue */ "./src/views/pages/users/Users.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Users",
          active: true
        }],
        pageTitle: "Users",
        rule: "editor"
      }
    }, {
      path: "/pages/users/:id",
      name: "page-user-details",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! @/views/pages/users/users-view/UsersView.vue */ "./src/views/pages/users/users-view/UsersView.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Users"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Users Edit",
        rule: "editor"
      }
    }, {
      path: "/pages/clients",
      name: "page-clients",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(14), __webpack_require__.e(37)]).then(__webpack_require__.bind(null, /*! @/views/pages/clients/ClientsList.vue */ "./src/views/pages/clients/ClientsList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Clients",
          active: true
        }],
        pageTitle: "Clients List",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:id",
      name: "page-clients-detail",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(6), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(10), __webpack_require__.e(14), __webpack_require__.e(8), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! @/views/pages/clients/Clients.vue */ "./src/views/pages/clients/Clients.vue"));
      },
      children: [{
        path: "client-details",
        component: function component() {
          return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/SurveyList.vue */ "./src/views/pages/surveys/SurveyList.vue"));
        }
      }],
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Clients",
          active: true
        }],
        pageTitle: "Client Info",
        rule: "editor"
      }
    }, {
      path: "/pages/processes",
      name: "page-processes",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! @/views/pages/process/ProcessList.vue */ "./src/views/pages/process/ProcessList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Process",
          active: true
        }],
        pageTitle: "Process List",
        rule: "editor"
      }
    }, {
      path: "/pages/opportunities",
      name: "page-opportunity-list",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! @/views/pages/opportunity/OpportunityList.vue */ "./src/views/pages/opportunity/OpportunityList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Stream",
          active: true
        }],
        pageTitle: "Streams List",
        rule: "editor"
      }
    }, {
      path: "/pages/surveys",
      name: "page-surveys",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/SurveyList.vue */ "./src/views/pages/surveys/SurveyList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey",
          active: true
        }],
        pageTitle: "Survey List",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/survey/:id",
      name: "page-survey-detail",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(9), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(11), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/SurveyView.vue */ "./src/views/pages/surveys/SurveyView.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Assessment Info",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/ops-survey/:id",
      name: "page-client-ops-survey-detail",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(9), __webpack_require__.e(0), __webpack_require__.e(7), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/ops-survey/OpsSurveyView.vue */ "./src/views/pages/surveys/ops-survey/OpsSurveyView.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Assessment Info",
        rule: "editor"
      }
    }, {
      path: "/pages/departments",
      name: "page-depatments",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! @/views/pages/department/DepartmentList.vue */ "./src/views/pages/department/DepartmentList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Department",
          active: true
        }],
        pageTitle: "Department List",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/assessment/:survey_id",
      name: "assessment-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/AssessmentForm.vue */ "./src/views/pages/surveys/AssessmentForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client"
        }, {
          title: "Assessment",
          active: true
        }],
        pageTitle: "Assessment Form",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/ops-assessment/:survey_id",
      name: "assessment-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(3), __webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/OpsAssessmentForm.vue */ "./src/views/pages/surveys/OpsAssessmentForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client"
        }, {
          title: "Assessment",
          active: true
        }],
        pageTitle: "Opportunity Survey Form",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/processtree",
      name: "client-process-tree",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(2), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/ProcessTree.vue */ "./src/views/pages/surveys/ProcessTree.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client",
          url: "/"
        }, {
          title: "ProcessTree",
          active: true
        }],
        pageTitle: "Process Tree",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/ptree",
      name: "client-process-tree1",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(2), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/Ptree.vue */ "./src/views/pages/surveys/Ptree.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client",
          url: "/"
        }, {
          title: "ProcessTree",
          active: true
        }],
        pageTitle: "Process Tree",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/opportunity-pipeline",
      name: "client-opportunity-pipeline",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! @/views/pages/clients/client-view/Kanban.vue */ "./src/views/pages/clients/client-view/Kanban.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client",
          url: "/"
        }, {
          title: "ProcessTree",
          active: true
        }],
        pageTitle: "Opportunity Pipeline",
        rule: "editor"
      }
    }, {
      path: "/pages/client/:client_id/survey/:survey_id/vsaform",
      name: "vsa-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/VSAForm.vue */ "./src/views/pages/surveys/VSAForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Client"
        }, {
          title: "Survey"
        }, {
          title: "VSA",
          active: true
        }],
        pageTitle: "VSA Form",
        rule: "editor"
      }
    }, {
      path: "/pages/reports",
      name: "page-reports",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! @/views/pages/reports/ReportList.vue */ "./src/views/pages/reports/ReportList.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Patients"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Patient Edit",
        rule: "editor"
      }
    }]
  }, // =============================================================================
  // FULL PAGE LAYOUTS
  // =============================================================================
  {
    path: "",
    component: function component() {
      return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! @/layouts/full-page/FullPage.vue */ "./src/layouts/full-page/FullPage.vue"));
    },
    children: [// =============================================================================
    // PAGES
    // =============================================================================
    {
      path: "/pages/about",
      name: "page-about",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! @/views/pages/About.vue */ "./src/views/pages/About.vue"));
      }
    }, {
      path: "/pages/login",
      name: "page-login",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! @/views/pages/Login.vue */ "./src/views/pages/Login.vue"));
      }
    }, {
      path: "/pages/error-404",
      name: "page-error-404",
      component: function component() {
        return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! @/views/pages/Error404.vue */ "./src/views/pages/Error404.vue"));
      }
    }, {
      path: "/survey/:survey_id/form/:token",
      name: "timing-survey-id-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/SurveyForm.vue */ "./src/views/pages/surveys/SurveyForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Survey Info",
        rule: "editor"
      }
    }, {
      path: "/survey/:survey_id/quick-form/:emp_id",
      name: "timing-survey-id-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/SurveyForm.vue */ "./src/views/pages/surveys/SurveyForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Survey Info",
        rule: "editor"
      }
    }, {
      path: "/ops-survey/:survey_id/form/:token",
      name: "timing-survey-id-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/OpsSurveyForm.vue */ "./src/views/pages/surveys/OpsSurveyForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Ops-Survey Info",
        rule: "editor"
      }
    }, {
      path: "/ops-survey/:survey_id/quick-form/:emp_id",
      name: "timing-survey-id-form",
      component: function component() {
        return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! @/views/pages/surveys/OpsSurveyForm.vue */ "./src/views/pages/surveys/OpsSurveyForm.vue"));
      },
      meta: {
        breadcrumb: [{
          title: "Home",
          url: "/"
        }, {
          title: "Survey"
        }, {
          title: "Edit",
          active: true
        }],
        pageTitle: "Survey Info",
        rule: "editor"
      }
    }]
  }, // Redirect to 404 page, if no match found
  {
    path: "*",
    redirect: "/pages/error-404"
  }]
});
router.afterEach(function () {
  // Remove initial loading
  var appLoading = document.getElementById("loading-bg");

  if (appLoading) {
    appLoading.style.display = "none";
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/services/AuthService.js":
/*!*************************************!*\
  !*** ./src/services/AuthService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axios */ "./src/axios.js");




var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthService);
  }

  Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthService, [{
    key: "login",
    value: function login(payload) {
      return _axios__WEBPACK_IMPORTED_MODULE_2__["default"].post('/staff/login', payload);
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var actions = {
  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////
  // Vertical NavMenu
  updateVerticalNavMenuWidth: function updateVerticalNavMenuWidth(_ref, width) {
    var commit = _ref.commit;
    commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width);
  },
  // VxAutoSuggest
  updateStarredPage: function updateStarredPage(_ref2, payload) {
    var commit = _ref2.commit;
    commit('UPDATE_STARRED_PAGE', payload);
  },
  // The Navbar
  arrangeStarredPagesLimited: function arrangeStarredPagesLimited(_ref3, list) {
    var commit = _ref3.commit;
    commit('ARRANGE_STARRED_PAGES_LIMITED', list);
  },
  arrangeStarredPagesMore: function arrangeStarredPagesMore(_ref4, list) {
    var commit = _ref4.commit;
    commit('ARRANGE_STARRED_PAGES_MORE', list);
  },
  // /////////////////////////////////////////////
  // UI
  // /////////////////////////////////////////////
  toggleContentOverlay: function toggleContentOverlay(_ref5) {
    var commit = _ref5.commit;
    commit('TOGGLE_CONTENT_OVERLAY');
  },
  updateTheme: function updateTheme(_ref6, val) {
    var commit = _ref6.commit;
    commit('UPDATE_THEME', val);
  },
  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////
  updateUserInfo: function updateUserInfo(_ref7, payload) {
    var commit = _ref7.commit;
    commit('UPDATE_USER_INFO', payload);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./src/store/getters.js":
/*!******************************!*\
  !*** ./src/store/getters.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
// added so later we can keep breakpoint in sync automatically using this config file
// import tailwindConfig from "../../tailwind.config.js"
var getters = {
  // COMPONENT
  // vx-autosuggest
  // starredPages: state => state.navbarSearchAndPinList.data.filter((page) => page.highlightAction),
  windowBreakPoint: function windowBreakPoint(state) {
    // This should be same as tailwind. So, it stays in sync with tailwind utility classes
    if (state.windowWidth >= 1200) return "xl";else if (state.windowWidth >= 992) return "lg";else if (state.windowWidth >= 768) return "md";else if (state.windowWidth >= 576) return "sm";else return "xs";
  },
  scrollbarTag: function scrollbarTag(state) {
    return state.is_touch_device ? 'div' : 'VuePerfectScrollbar';
  }
};
/* harmony default export */ __webpack_exports__["default"] = (getters);

/***/ }),

/***/ "./src/store/modules/profile.js":
/*!**************************************!*\
  !*** ./src/store/modules/profile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/AuthService */ "./src/services/AuthService.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/axios */ "./src/axios.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    current_user_data: {},
    current_user_permission: null,
    current_user_plan: null,
    current_user_addons: null,
    user_status: ""
  },
  mutations: {
    CLEAR_CURRENT_USER: function CLEAR_CURRENT_USER(state) {
      state.current_user_data = undefined;
      state.current_user_permission = undefined;
      state.current_user_plan = undefined;
      state.current_user_addons = undefined;
    },
    SET_CURRENT_USER_PLAN_DATA: function SET_CURRENT_USER_PLAN_DATA(state, value) {
      state.current_user_plan = value.plan;
      state.current_user_addons = value.addons;
    },
    SET_CURRENT_USER_PERMISSION: function SET_CURRENT_USER_PERMISSION(state, value) {
      state.current_user_permission = value;
    },
    SET_CURRENT_USER: function SET_CURRENT_USER(state, value) {
      state.current_user_data = value.user;
      state.user = value.user;
      var token = value.access_token;
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("current_user_token", token);
      console.log(state.current_user_data, "user data");
      _axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
      localStorage.setItem("token", token);
    }
  },
  actions: {
    setCurrentUser: function setCurrentUser(_ref, payload) {
      var commit = _ref.commit;
      commit("SET_CURRENT_USER", payload);
    },
    afterLogin: function () {
      var _afterLogin = Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var commit;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit;
                // commit('SET_CURRENT_USER_PERMISSION', (await profile.getPerrmissions()).data.success.map(x => x.name))
                // commit('SET_CURRENT_USER_PLAN_DATA', (await profile.getPlanData()).data)
                // setInterval(() => {
                // 	const cache_user_token = Cookies.get("current_user_token");
                // 	if (!cache_user_token && window.location.pathname !== "/") {
                // 		clearInterval(this);
                // 		window.location = "/";
                // 	}
                // 	window.location = "/";
                // }, 10000);
                window.location = "/";

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function afterLogin(_x) {
        return _afterLogin.apply(this, arguments);
      }

      return afterLogin;
    }(),
    login: function () {
      var _login = Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3, payload) {
        var commit, login_data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit;
                console.log("submitting login data from store");
                _context2.next = 4;
                return _services_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"].login(payload);

              case 4:
                login_data = _context2.sent.data;
                // const user_data = login_data.user;
                // const token = login_data.access_token;
                console.log(login_data, "login data"); // const login_data = (await profile.login(payload)).data
                // login_data.user_data = login_data.data.user

                commit("SET_CURRENT_USER", login_data);
                _context2.next = 9;
                return this.dispatch("afterLogin");

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x2, _x3) {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    logout: function () {
      var _logout = Object(_home_dijo_dev_enigmax_hnh_hnh_survey_fe_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
        var commit;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref4.commit;
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  commit("CLEAR_CURRENT_USER");
                  var user_data = _axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("logout");
                  localStorage.removeItem("userInfo");
                  localStorage.removeItem("token");
                  delete _axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.common["Authorization"];
                  resolve();
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function logout(_x4) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  },
  getters: {
    isLogedIn: function isLogedIn(state) {
      return state.current_user_data !== null;
    },
    currentUser: function currentUser(state) {
      return state.current_user_data;
    },
    permissions: function permissions(state) {
      return state.current_user_permission;
    },
    addons: function addons(state) {
      return state.current_user_addons;
    },
    plan: function plan(state) {
      return state.current_user_plan;
    }
  }
});

/***/ }),

/***/ "./src/store/mutations.js":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_2__);




/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var mutations = {
  // /////////////////////////////////////////////
  // COMPONENTS
  // /////////////////////////////////////////////
  // Vertical NavMenu
  TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE: function TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
    state.isVerticalNavMenuActive = value;
  },
  TOGGLE_REDUCE_BUTTON: function TOGGLE_REDUCE_BUTTON(state, val) {
    state.reduceButton = val;
  },
  UPDATE_MAIN_LAYOUT_TYPE: function UPDATE_MAIN_LAYOUT_TYPE(state, val) {
    state.mainLayoutType = val;
  },
  UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN: function UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
    state.verticalNavMenuItemsMin = val;
  },
  UPDATE_VERTICAL_NAV_MENU_WIDTH: function UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
    state.verticalNavMenuWidth = width;
  },
  // VxAutoSuggest
  UPDATE_STARRED_PAGE: function UPDATE_STARRED_PAGE(state, payload) {
    // find item index in search list state
    var index = state.navbarSearchAndPinList["pages"].data.findIndex(function (item) {
      return item.url == payload.url;
    }); // update the main list

    state.navbarSearchAndPinList["pages"].data[index].is_bookmarked = payload.val; // if val is true add it to starred else remove

    if (payload.val) {
      state.starredPages.push(state.navbarSearchAndPinList["pages"].data[index]);
    } else {
      // find item index from starred pages
      var _index = state.starredPages.findIndex(function (item) {
        return item.url == payload.url;
      }); // remove item using index


      state.starredPages.splice(_index, 1);
    }
  },
  // Navbar-Vertical
  ARRANGE_STARRED_PAGES_LIMITED: function ARRANGE_STARRED_PAGES_LIMITED(state, list) {
    var starredPagesMore = state.starredPages.slice(10);
    state.starredPages = list.concat(starredPagesMore);
  },
  ARRANGE_STARRED_PAGES_MORE: function ARRANGE_STARRED_PAGES_MORE(state, list) {
    var downToUp = false;
    var lastItemInStarredLimited = state.starredPages[10];
    var starredPagesLimited = state.starredPages.slice(0, 10);
    state.starredPages = starredPagesLimited.concat(list);
    state.starredPages.slice(0, 10).map(function (i) {
      if (list.indexOf(i) > -1) downToUp = true;
    });

    if (!downToUp) {
      state.starredPages.splice(10, 0, lastItemInStarredLimited);
    }
  },
  // ////////////////////////////////////////////
  // UI
  // ////////////////////////////////////////////
  TOGGLE_CONTENT_OVERLAY: function TOGGLE_CONTENT_OVERLAY(state, val) {
    state.bodyOverlay = val;
  },
  UPDATE_PRIMARY_COLOR: function UPDATE_PRIMARY_COLOR(state, val) {
    state.themePrimaryColor = val;
  },
  UPDATE_THEME: function UPDATE_THEME(state, val) {
    state.theme = val;
  },
  UPDATE_WINDOW_WIDTH: function UPDATE_WINDOW_WIDTH(state, width) {
    state.windowWidth = width;
  },
  UPDATE_WINDOW_SCROLL_Y: function UPDATE_WINDOW_SCROLL_Y(state, val) {
    state.scrollY = val;
  },
  // /////////////////////////////////////////////
  // User/Account
  // /////////////////////////////////////////////
  // Updates user info in state and localstorage
  UPDATE_USER_INFO: function UPDATE_USER_INFO(state, payload) {
    // Get Data localStorage
    var userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser;

    for (var _i = 0, _Object$keys = Object.keys(payload); _i < _Object$keys.length; _i++) {
      var property = _Object$keys[_i];

      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = payload[property]; // Update key in localStorage

        userInfo[property] = payload[property];
      }
    } // Store data in localStorage


    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mutations);

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_navbar_navbarSearchAndPinList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/navbar/navbarSearchAndPinList */ "./src/layouts/components/navbar/navbarSearchAndPinList.js");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../themeConfig.js */ "./themeConfig.js");



 // /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////
// *From Auth - Data will be received from auth provider

var userDefaults = {
  uid: 0,
  // From Auth
  displayName: "Arron Clarke",
  // From Auth
  about: "Hudson & Hayes OPS Assessment Tool.",
  photoURL: "https://picsum.photos/50/50",
  // From Auth
  status: "online",
  userRole: "admin"
}; // Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components

var is_touch_device = function is_touch_device() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch) {
    return true;
  } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH


  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}; // /////////////////////////////////////////////
// State
// /////////////////////////////////////////////


var state = {
  AppActiveUser: userDefaults,
  bodyOverlay: false,
  isVerticalNavMenuActive: true,
  is_touch_device: is_touch_device(),
  mainLayoutType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"].mainLayoutType || "vertical",
  navbarSearchAndPinList: _layouts_components_navbar_navbarSearchAndPinList__WEBPACK_IMPORTED_MODULE_1__["default"],
  reduceButton: _themeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"].sidebarCollapsed,
  verticalNavMenuWidth: "default",
  verticalNavMenuItemsMin: false,
  scrollY: 0,
  starredPages: _layouts_components_navbar_navbarSearchAndPinList__WEBPACK_IMPORTED_MODULE_1__["default"]["pages"].data.filter(function (page) {
    return page.is_bookmarked;
  }),
  theme: _themeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"].theme || "light",
  themePrimaryColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"].primary,
  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar & navbar component
  windowWidth: null
};
/* harmony default export */ __webpack_exports__["default"] = (state);

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/store/state.js");
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getters */ "./src/store/getters.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations */ "./src/store/mutations.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");
/* harmony import */ var _modules_profile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/profile.js */ "./src/store/modules/profile.js");







vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  getters: _getters__WEBPACK_IMPORTED_MODULE_3__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_4__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_5__["default"],
  modules: [_modules_profile_js__WEBPACK_IMPORTED_MODULE_6__["default"]],
  strict: "development" !== 'production'
}));

/***/ }),

/***/ "./themeConfig.js":
/*!************************!*\
  !*** ./themeConfig.js ***!
  \************************/
/*! exports provided: colors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuesax */ "./node_modules/vuesax/dist/vuesax.common.js");
/* harmony import */ var vuesax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuesax__WEBPACK_IMPORTED_MODULE_1__);
/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/
// MAIN COLORS - VUESAX THEME COLORS
var colors = {
  primary: "#25beb1",
  success: "#7367F0",
  danger: "#EA5455",
  warning: "#FF9F43",
  dark: "#1E1E1E"
}; // CONFIGS

var themeConfig = {
  disableCustomizer: false,
  // options[Boolean] : true, false(default)
  disableThemeTour: true,
  // options[Boolean] : true, false(default)
  footerType: "static",
  // options[String]  : static(default) / sticky / hidden
  hideScrollToTop: false,
  // options[Boolean] : true, false(default)
  mainLayoutType: "vertical",
  // options[String]  : vertical(default) / horizontal
  navbarColor: "#fff",
  // options[String]  : HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
  navbarType: "floating",
  // options[String]  : floating(default) / static / sticky / hidden
  routerTransition: "zoom-fade",
  // options[String]  : zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
  rtl: false,
  // options[Boolean] : true, false(default)
  sidebarCollapsed: true,
  // options[Boolean] : true, false(default)
  theme: "semi-dark",
  // options[String]  : "light"(default), "dark", "semi-dark"
  // Not required yet - WIP
  userInfoLocalStorageKey: "userInfo" // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.

};


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuesax__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: {
    colors: colors
  },
  rtl: themeConfig.rtl
});
/* harmony default export */ __webpack_exports__["default"] = (themeConfig);

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map