import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Demos from "../../bpl-tools/Admin/Demos";
import Pricing from "../../bpl-tools/Admin/Pricing";
import FeatureCompare from "../../bpl-tools/Admin/FeatureCompare";
import OurPlugins from "../../bpl-tools/Admin/OurPlugins";
import Settings from "../../bpl-tools/Admin/Settings";
import Blocks from "../../bpl-tools/Admin/Blocks";

import Layout from "./Layout/Layout";
import Welcome from "./Pages/Welcome";
import { demoInfo, pricingInfo } from "./utils/data";
import { allBlocks } from "./utils/blocks";

const App = (props) => {
  const { disabledBlocks: initialDisabled = [], disabledBlocksNonce } = props;

  // Disabled-block state is shared by the Welcome card and the Blocks page and
  // persisted to the ttbDisabledBlocks option via admin-ajax (wp.ajax / wp-util).
  const [disabledBlocks, setDisabledBlocks] = useState(
    Array.isArray(initialDisabled) ? initialDisabled : [],
  );
  const [blocksStatus, setBlocksStatus] = useState("");

  const handleBlocksChange = (names) => {
    setDisabledBlocks(names);
    setBlocksStatus("loading");

    if (window.wp?.ajax) {
      window.wp.ajax
        .post("ttbDisabledBlocks", {
          _wpnonce: disabledBlocksNonce,
          data: JSON.stringify(names),
        })
        .done(() => setBlocksStatus("success"))
        .fail(() => setBlocksStatus("error"));
    }
  };

  const blocksProps = {
    allBlocks,
    disabledBlocks,
    onChange: handleBlocksChange,
    status: blocksStatus,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout {...props} />}>
          <Route
            index
            element={<Welcome {...props} blocksProps={blocksProps} />}
          />

          <Route
            path="welcome"
            element={<Welcome {...props} blocksProps={blocksProps} />}
          />

          <Route
            path="demos"
            element={<Demos demoInfo={demoInfo} {...props} />}
          />

          <Route
            path="blocks"
            element={<Blocks {...props} {...blocksProps} pageTitle="Blocks" />}
          />

          <Route
            path="pricing"
            element={
              <Pricing pricingInfo={pricingInfo} options={{}} {...props} />
            }
          />

          <Route
            path="feature-comparison"
            element={<FeatureCompare plans={["free", "pro"]} {...props} />}
          />

          <Route path="our-plugins" element={<OurPlugins {...props} />} />

          <Route
            path="settings"
            element={
              <Settings
                {...props}
                ajaxAction="ttbSaveUninstallOption"
                cleanupItems={[
                  "All Typing Text posts (ShortCode Generator items)",
                  "Plugin settings and options",
                  "License activation data",
                ]}
              />
            }
          />

          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
