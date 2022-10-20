async function loadModel(src, contentType = null, useCache = false, jsonPreprocessor = null) {
    console.log(`Loading model ${src}`);
    if (useCache) {
        if (gltfCache.has(src)) {
            gltfCache.retain(src);
            return cloneGltf(gltfCache.get(src).gltf);
        } else {
            if (inflightGltfs.has(src)) {
                const gltf = await inflightGltfs.get(src);
                gltfCache.retain(src);
                return cloneGltf(gltf);
            } else {
                const promise = loadGLTF(src, contentType, null, jsonPreprocessor);
                inflightGltfs.set(src, promise);
                const gltf = await promise;
                inflightGltfs.delete(src);
                gltfCache.set(src, gltf);
                return cloneGltf(gltf);
            }
        }
    } else {
        return loadGLTF(src, contentType, null, jsonPreprocessor);
    }
}