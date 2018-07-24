import { withPluginApi } from 'discourse/lib/plugin-api';
import ComposerController from 'discourse/controllers/composer';

function initializeMark(api) {
  api.addToolbarPopupMenuOptionsCallback(() => {
    return {
      action: 'insertMark',
      icon: 'black-tie',
      label: 'mark.title'
    };
  });

  ComposerController.reopen({
    actions: {
      insertMark() {
        this.get("toolbarEvent").applySurround(
          "==",
          "==",
          "mark_text",
          { multiline: true }
        );
      }
    }
  });
}

export default {
  name: "apply-mark",
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    if (siteSettings.mark_enabled) {
      withPluginApi('0.8.23', initializeMark, { noApi: () => decorateCooked(container, mark) });
    }
  }
};