import { h } from "virtual-dom";
import { withPluginApi } from "discourse/lib/plugin-api";
import { wantsNewWindow } from "discourse/lib/intercept-click";
import DiscourseURL from "discourse/lib/url";

export default {
  name: "discourse-custom-header-links",

  initialize() {
    withPluginApi("0.8.20", (api) => {
			console.log('Custom Footer script is running...');

    });
  },
};
