/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createPlugin } from "../../MapStore2/web/client/utils/PluginsUtils";

export default {
    SampleExtension: createPlugin('SampleExtension', {
        lazy: true,
        loader: () => import(/* webpackChunkName: "extensions/extension" */`./plugins/SampleExtension`)
    })
};
