import { withPluginApi } from "discourse/lib/plugin-api";

function initializeMark(api) {
  api.addToolbarPopupMenuOptionsCallback(() => {
    return {
      action: "insertMark",
      icon: "black-tie",
      label: "mark.title"
    };
  });

  api.modifyClass("controller:composer", {
    actions: {
      insertMark() {
        this.get("toolbarEvent").applySurround("==", "==", "mark_text", {
          multiline: true
        });
      }
    }
  });
}

export default {
  name: "apply-mark",

  initialize(container) {
    if (!container.lookup("site-settings:main").mark_enabled) {
      return;
    }

    withPluginApi("0.8.23", initializeMark);
  }
};
