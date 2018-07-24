export function setup(helper) {

  helper.registerOptions((opts, siteSettings) => {
    opts.features["marks"] = !!siteSettings.mark_enabled;
  });

  helper.whiteList([
    'mark'
  ]);

  helper.registerPlugin(window.markdownitMark);
}
