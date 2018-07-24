# name: discourse-mark
# about: Adds markdown.it mark support to Discourse
# version: 0.1
# authors: Charles Sheridan
# url: https://github.com/sirideain/discourse-mark

enabled_site_setting :mark_enabled

register_asset "javascripts/vendor/markdown-it-mark.js", :vendored_pretty_text