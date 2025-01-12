function __insertCSS(code) {
  if (!code || typeof document == 'undefined') return
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.type = 'text/css'
  head.appendChild(style)
  ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
}

Object.defineProperty(exports, '__esModule', { value: true });

var extensionSubscript = require('@tiptap/extension-subscript');
var extensionSuperscript = require('@tiptap/extension-superscript');
var extensionBold = require('@tiptap/extension-bold');
var core = require('@tiptap/core');
var extensionCode = require('@tiptap/extension-code');
var extensionLink = require('@tiptap/extension-link');
var state = require('@tiptap/pm/state');
var tippy = require('tippy.js');
var extensionItalic = require('@tiptap/extension-italic');
var extensionStrike = require('@tiptap/extension-strike');
var extensionHighlight = require('@tiptap/extension-highlight');
var unistUtilVisit = require('unist-util-visit');
var unistBuilder = require('unist-builder');
var extensionUnderline = require('@tiptap/extension-underline');
var extensionText = require('@tiptap/extension-text');
var extensionDocument = require('@tiptap/extension-document');
var extensionHeading = require('@tiptap/extension-heading');
var extensionParagraph = require('@tiptap/extension-paragraph');
var extensionBlockquote = require('@tiptap/extension-blockquote');
var extensionHardBreak = require('@tiptap/extension-hard-break');
var lowlight = require('lowlight');
var extensionCodeBlockLowlight = require('@tiptap/extension-code-block-lowlight');
var tables = require('@tiptap/pm/tables');
var extensionHorizontalRule = require('@tiptap/extension-horizontal-rule');
var extensionBulletList = require('@tiptap/extension-bullet-list');
var extensionOrderedList = require('@tiptap/extension-ordered-list');
var extensionListItem = require('@tiptap/extension-list-item');
var extensionTaskList = require('@tiptap/extension-task-list');
var extensionTaskItem = require('@tiptap/extension-task-item');
var extensionTable = require('@tiptap/extension-table');
var view = require('@tiptap/pm/view');
var extensionTableRow = require('@tiptap/extension-table-row');
var extensionTableCell = require('@tiptap/extension-table-cell');
var extensionTableHeader = require('@tiptap/extension-table-header');
var remarkGemoji = require('remark-gemoji');
var gemoji = require('gemoji');
var suggestion = require('@tiptap/suggestion');
var scrollIntoView = require('smooth-scroll-into-view-if-needed');
var extensionImage = require('@tiptap/extension-image');
var Plyr = require('plyr');
var mermaid = require('mermaid');
var commands = require('@tiptap/pm/commands');
var keymap = require('@tiptap/pm/keymap');
var transform = require('@tiptap/pm/transform');
var katex = require('katex');
var remarkMath = require('remark-math');
var extensionGapcursor = require('@tiptap/extension-gapcursor');
var extensionHistory = require('@tiptap/extension-history');
var extensionDropcursor = require('@tiptap/extension-dropcursor');
var unified = require('unified');
var remarkGfm = require('remark-gfm');
var remarkParse = require('remark-parse');
var remarkStringify = require('remark-stringify');
var remarkDirective = require('remark-directive');
var model = require('@tiptap/pm/model');
var plantumlEncoder = require('plantuml-encoder');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var tippy__default = /*#__PURE__*/_interopDefault(tippy);
var remarkGemoji__default = /*#__PURE__*/_interopDefault(remarkGemoji);
var scrollIntoView__default = /*#__PURE__*/_interopDefault(scrollIntoView);
var Plyr__default = /*#__PURE__*/_interopDefault(Plyr);
var mermaid__default = /*#__PURE__*/_interopDefault(mermaid);
var katex__default = /*#__PURE__*/_interopDefault(katex);
var remarkMath__default = /*#__PURE__*/_interopDefault(remarkMath);
var remarkGfm__default = /*#__PURE__*/_interopDefault(remarkGfm);
var remarkParse__default = /*#__PURE__*/_interopDefault(remarkParse);
var remarkStringify__default = /*#__PURE__*/_interopDefault(remarkStringify);
var remarkDirective__default = /*#__PURE__*/_interopDefault(remarkDirective);

__insertCSS("@charset \"UTF-8\";@-webkit-keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@-webkit-keyframes plyr-popup{0%{opacity:.5;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes plyr-popup{0%{opacity:.5;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}@keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:inherit;font-family:var(--plyr-font-family,inherit);font-variant-numeric:tabular-nums;font-weight:400;font-weight:var(--plyr-font-weight-regular,400);line-height:1.7;line-height:var(--plyr-line-height,1.7);max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease;z-index:0}.plyr audio,.plyr iframe,.plyr video{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui :after,.plyr--full-ui :before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5464;background:var(--plyr-badge-background,#4a5464);border-radius:2px;border-radius:var(--plyr-badge-border-radius,2px);color:#fff;color:var(--plyr-badge-text-color,#fff);font-size:9px;font-size:var(--plyr-font-size-badge,9px);line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{-webkit-animation:plyr-fade-in .3s ease;animation:plyr-fade-in .3s ease;bottom:0;display:none;font-size:13px;font-size:var(--plyr-font-size-small,13px);left:0;padding:10px;padding:var(--plyr-control-spacing,10px);position:absolute;text-align:center;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;width:100%}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:15px;font-size:var(--plyr-font-size-base,15px);padding:20px;padding:calc(var(--plyr-control-spacing,10px)*2)}}@media (min-width:768px){.plyr__captions{font-size:18px;font-size:var(--plyr-font-size-large,18px)}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{-webkit-transform:translateY(-40px);transform:translateY(-40px);-webkit-transform:translateY(calc(var(--plyr-control-spacing,10px)*-4));transform:translateY(calc(var(--plyr-control-spacing,10px)*-4))}.plyr__caption{background:#000c;background:var(--plyr-captions-background,#000c);border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:#fff;color:var(--plyr-captions-text-color,#fff);line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__caption div{display:inline}.plyr__control{background:#0000;border:0;border-radius:4px;border-radius:var(--plyr-control-radius,4px);color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;padding:calc(var(--plyr-control-spacing,10px)*.7);position:relative;transition:all .3s ease}.plyr__control svg{fill:currentColor;display:block;height:18px;height:var(--plyr-control-icon-size,18px);pointer-events:none;width:18px;width:var(--plyr-control-icon-size,18px)}.plyr__control:focus{outline:0}.plyr__control:focus-visible{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}a.plyr__control{text-decoration:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed,a.plyr__control:after,a.plyr__control:before{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px;margin-left:calc(var(--plyr-control-spacing,10px)/ 4)}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px;padding-left:calc(var(--plyr-control-spacing,10px)/ 4)}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px;padding:0 calc(var(--plyr-control-spacing,10px)/ 2)}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip],.plyr__controls:empty{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{-webkit-animation:plyr-popup .2s ease;animation:plyr-popup .2s ease;background:#ffffffe6;background:var(--plyr-menu-background,#ffffffe6);border-radius:8px;border-radius:var(--plyr-menu-radius,8px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-menu-shadow,0 1px 2px #00000026);color:#4a5464;color:var(--plyr-menu-color,#4a5464);font-size:15px;font-size:var(--plyr-font-size-base,15px);margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container:after{border:4px solid #0000;border-top-color:#ffffffe6;border:var(--plyr-menu-arrow-size,4px) solid #0000;border-top-color:var(--plyr-menu-background,#ffffffe6);content:\"\";height:0;position:absolute;right:14px;right:calc(var(--plyr-control-icon-size,18px)/ 2 + var(--plyr-control-spacing,10px)*.7 - var(--plyr-menu-arrow-size,4px)/ 2);top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px;padding:calc(var(--plyr-control-spacing,10px)*.7)}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5464;color:var(--plyr-menu-color,#4a5464);display:flex;font-size:13px;font-size:var(--plyr-font-size-menu,var(--plyr-font-size-small,13px));padding:4.66667px 10.5px;padding:calc(var(--plyr-control-spacing,10px)*.7/1.5) calc(var(--plyr-control-spacing,10px)*.7*1.5);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control:after{border:4px solid #0000;border:var(--plyr-menu-item-arrow-size,4px) solid #0000;content:\"\";position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px;padding-right:calc(var(--plyr-control-spacing,10px)*.7*4)}.plyr__menu__container .plyr__control--forward:after{border-left-color:#728197;border-left-color:var(--plyr-menu-arrow-color,#728197);right:6.5px;right:calc(var(--plyr-control-spacing,10px)*.7*1.5 - var(--plyr-menu-item-arrow-size,4px))}.plyr__menu__container .plyr__control--forward:focus-visible:after,.plyr__menu__container .plyr__control--forward:hover:after{border-left-color:initial}.plyr__menu__container .plyr__control--back{font-weight:400;font-weight:var(--plyr-font-weight-regular,400);margin:7px;margin:calc(var(--plyr-control-spacing,10px)*.7);margin-bottom:3.5px;margin-bottom:calc(var(--plyr-control-spacing,10px)*.7/2);padding-left:28px;padding-left:calc(var(--plyr-control-spacing,10px)*.7*4);position:relative;width:calc(100% - 14px);width:calc(100% - var(--plyr-control-spacing,10px)*.7*2)}.plyr__menu__container .plyr__control--back:after{border-right-color:#728197;border-right-color:var(--plyr-menu-arrow-color,#728197);left:6.5px;left:calc(var(--plyr-control-spacing,10px)*.7*1.5 - var(--plyr-menu-item-arrow-size,4px))}.plyr__menu__container .plyr__control--back:before{background:#dcdfe5;background:var(--plyr-menu-back-border-color,#dcdfe5);box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 var(--plyr-menu-back-border-shadow-color,#fff);content:\"\";height:1px;left:0;margin-top:3.5px;margin-top:calc(var(--plyr-control-spacing,10px)*.7/2);overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back:focus-visible:after,.plyr__menu__container .plyr__control--back:hover:after{border-right-color:initial}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px;padding-left:calc(var(--plyr-control-spacing,10px)*.7)}.plyr__menu__container .plyr__control[role=menuitemradio]:after,.plyr__menu__container .plyr__control[role=menuitemradio]:before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]:before{background:#0000001a;content:\"\";display:block;flex-shrink:0;height:16px;margin-right:10px;margin-right:var(--plyr-control-spacing,10px);transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]:after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0);transition:opacity .3s ease,-webkit-transform .3s ease;transition:transform .3s ease,opacity .3s ease;transition:transform .3s ease,opacity .3s ease,-webkit-transform .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before{background:#00b2ff;background:var(--plyr-control-toggle-checked-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)))}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:after{opacity:1;-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio]:focus-visible:before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover:before{background:#23282f1a}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:-5px;margin-right:calc(var(--plyr-control-spacing,10px)*.7*-1 - -2px);overflow:hidden;padding-left:24.5px;padding-left:calc(var(--plyr-control-spacing,10px)*.7*3.5);pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#0000;border:0;border-radius:26px;border-radius:calc(var(--plyr-range-thumb-height,13px)*2);color:#00b2ff;color:var(--plyr-range-fill-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));display:block;height:19px;height:calc(var(--plyr-range-thumb-active-shadow-width,3px)*2 + var(--plyr-range-thumb-height,13px));margin:0;min-width:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:#0000;background-image:linear-gradient(90deg,currentColor 0,#0000 0);background-image:linear-gradient(to right,currentColor var(--value,0),#0000 var(--value,0));border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height,5px)/ 2);height:5px;height:var(--plyr-range-track-height,5px);transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:-4px;margin-top:calc((var(--plyr-range-thumb-height,13px) - var(--plyr-range-track-height,5px))/ 2*-1);position:relative;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-track{background:#0000;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height,5px)/ 2);height:5px;height:var(--plyr-range-track-height,5px);transition:box-shadow .3s ease;-moz-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height,5px)/ 2);height:5px;height:var(--plyr-range-track-height,5px)}.plyr--full-ui input[type=range]::-ms-track{color:#0000}.plyr--full-ui input[type=range]::-ms-fill-upper,.plyr--full-ui input[type=range]::-ms-track{background:#0000;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height,5px)/ 2);height:5px;height:var(--plyr-range-track-height,5px);transition:box-shadow .3s ease;-ms-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:#0000;background:currentColor;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height,5px)/ 2);height:5px;height:var(--plyr-range-track-height,5px);transition:box-shadow .3s ease;-ms-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:0;position:relative;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]:focus-visible::-webkit-slider-runnable-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr--full-ui input[type=range]:focus-visible::-moz-range-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr--full-ui input[type=range]:focus-visible::-ms-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr__poster{background-color:#000;background-color:var(--plyr-video-background,var(--plyr-video-background,#000));background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr--youtube.plyr--paused.plyr__poster-enabled:not(.plyr--stopped) .plyr__poster{display:none}.plyr__time{font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__time+.plyr__time:before{content:\"⁄\";margin-right:10px;margin-right:var(--plyr-control-spacing,10px)}@media (max-width:767px){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:#fff;background:var(--plyr-tooltip-background,#fff);border-radius:5px;border-radius:var(--plyr-tooltip-radius,5px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-tooltip-shadow,0 1px 2px #00000026);color:#4a5464;color:var(--plyr-tooltip-color,#4a5464);font-size:13px;font-size:var(--plyr-font-size-small,13px);font-weight:400;font-weight:var(--plyr-font-weight-regular,400);left:50%;line-height:1.3;margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing,10px)/ 2*2);opacity:0;padding:5px 7.5px;padding:calc(var(--plyr-control-spacing,10px)/ 2) calc(var(--plyr-control-spacing,10px)/ 2*1.5);pointer-events:none;position:absolute;-webkit-transform:translate(-50%,10px) scale(.8);transform:translate(-50%,10px) scale(.8);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transition:opacity .2s ease .1s,-webkit-transform .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s,-webkit-transform .2s ease .1s;white-space:nowrap;z-index:2}.plyr__tooltip:before{border-left:4px solid #0000;border-left:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-right:4px solid #0000;border-right:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-top:4px solid #fff;border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,#fff);bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size,4px)*-1);content:\"\";height:0;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control:focus-visible .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;-webkit-transform:translate(-50%) scale(1);transform:translate(-50%) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;-webkit-transform:translateY(10px) scale(.8);transform:translateY(10px) scale(.8);-webkit-transform-origin:0 100%;transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip:before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip:before{left:16px;left:calc(var(--plyr-control-icon-size,18px)/ 2 + var(--plyr-control-spacing,10px)*.7)}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;-webkit-transform:translateY(10px) scale(.8);transform:translateY(10px) scale(.8);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip:before{left:auto;right:16px;right:calc(var(--plyr-control-icon-size,18px)/ 2 + var(--plyr-control-spacing,10px)*.7);-webkit-transform:translateX(50%);transform:translateX(50%)}.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.plyr__progress{left:6.5px;left:calc(var(--plyr-range-thumb-height,13px)*.5);margin-right:13px;margin-right:var(--plyr-range-thumb-height,13px);position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:-6.5px;margin-left:calc(var(--plyr-range-thumb-height,13px)*-.5);margin-right:-6.5px;margin-right:calc(var(--plyr-range-thumb-height,13px)*-.5);width:calc(100% + 13px);width:calc(100% + var(--plyr-range-thumb-height,13px))}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{left:0;max-width:120px;overflow-wrap:break-word}.plyr__progress__buffer{-webkit-appearance:none;background:#0000;border:0;border-radius:100px;height:5px;height:var(--plyr-range-track-height,5px);left:0;margin-top:-2.5px;margin-top:calc((var(--plyr-range-track-height,5px)/ 2)*-1);padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:#0000}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;transition:width .2s ease}.plyr--loading .plyr__progress__buffer{-webkit-animation:plyr-progress 1s linear infinite;animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,#23282f99 25%,#0000 0,#0000 50%,#23282f99 0,#23282f99 75%,#0000 0,#0000);background-image:linear-gradient(-45deg,var(--plyr-progress-loading-background,#23282f99) 25%,#0000 25%,#0000 50%,var(--plyr-progress-loading-background,#23282f99) 50%,var(--plyr-progress-loading-background,#23282f99) 75%,#0000 75%,#0000);background-repeat:repeat-x;background-size:25px 25px;background-size:var(--plyr-progress-loading-size,25px) var(--plyr-progress-loading-size,25px);color:#0000}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:#ffffff40;background-color:var(--plyr-video-progress-buffered-background,#ffffff40)}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:#c1c8d199;background-color:var(--plyr-audio-progress-buffered-background,#c1c8d199)}.plyr__progress__marker{background-color:#fff;background-color:var(--plyr-progress-marker-background,#fff);border-radius:1px;height:5px;height:var(--plyr-range-track-height,5px);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:3px;width:var(--plyr-progress-marker-width,3px);z-index:3}.plyr__volume{align-items:center;display:flex;position:relative}.plyr__volume input[type=range]{margin-left:5px;margin-left:calc(var(--plyr-control-spacing,10px)/ 2);margin-right:5px;margin-right:calc(var(--plyr-control-spacing,10px)/ 2);max-width:90px;min-width:60px;position:relative;z-index:2}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:#fff;background:var(--plyr-audio-controls-background,#fff);border-radius:inherit;color:#4a5464;color:var(--plyr-audio-control-color,#4a5464);padding:10px;padding:var(--plyr-control-spacing,10px)}.plyr--audio .plyr__control:focus-visible,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-audio-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-audio-control-color-hover,#fff)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--audio .plyr__progress__buffer{color:#c1c8d199;color:var(--plyr-audio-progress-buffered-background,#c1c8d199)}.plyr--video{overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;background:var(--plyr-video-background,var(--plyr-video-background,#000));border-radius:inherit;height:100%;margin:auto;overflow:hidden;position:relative;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{aspect-ratio:16/9}@supports not (aspect-ratio:16/9){.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%;position:relative}}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;-webkit-transform:translateY(-38.28125%);transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:linear-gradient(#0000,#000000bf);background:var(--plyr-video-controls-background,linear-gradient(#0000,#000000bf));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;color:var(--plyr-video-control-color,#fff);left:0;padding:5px;padding:calc(var(--plyr-control-spacing,10px)/ 2);padding-top:20px;padding-top:calc(var(--plyr-control-spacing,10px)*2);position:absolute;right:0;transition:opacity .4s ease-in-out,-webkit-transform .4s ease-in-out;transition:opacity .4s ease-in-out,transform .4s ease-in-out;transition:opacity .4s ease-in-out,transform .4s ease-in-out,-webkit-transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:10px;padding:var(--plyr-control-spacing,10px);padding-top:35px;padding-top:calc(var(--plyr-control-spacing,10px)*3.5)}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;-webkit-transform:translateY(100%);transform:translateY(100%)}.plyr--video .plyr__control:focus-visible,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-video-control-color-hover,#fff)}.plyr__control--overlaid{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));border:0;border-radius:100%;color:#fff;color:var(--plyr-video-control-color,#fff);display:none;left:50%;opacity:.9;padding:15px;padding:calc(var(--plyr-control-spacing,10px)*1.5);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:.3s;z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{opacity:1}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--video .plyr__progress__buffer{color:#ffffff40;color:var(--plyr-video-progress-buffered-background,#ffffff40)}.plyr:-moz-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-moz-full-screen video{height:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:fullscreen video{height:100%}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-moz-full-screen.plyr--hide-controls{cursor:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-moz-full-screen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}.plyr:-ms-fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}.plyr:fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;bottom:0;height:100%;left:0;margin:0;position:fixed;right:0;top:0;width:100%;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads:after{background:#23282f;border-radius:2px;bottom:10px;bottom:var(--plyr-control-spacing,10px);color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;right:var(--plyr-control-spacing,10px);z-index:3}.plyr__ads:empty:after{display:none}.plyr__cues{background:currentColor;display:block;height:5px;height:var(--plyr-range-track-height,5px);left:0;opacity:.8;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:3px;z-index:3}.plyr__preview-thumb{background-color:#fff;background-color:var(--plyr-tooltip-background,#fff);border-radius:8px;border-radius:var(--plyr-menu-radius,8px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-tooltip-shadow,0 1px 2px #00000026);margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing,10px)/ 2*2);opacity:0;padding:3px;pointer-events:none;position:absolute;-webkit-transform:translateY(10px) scale(.8);transform:translateY(10px) scale(.8);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transition:opacity .2s ease .1s,-webkit-transform .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s;transition:transform .2s ease .1s,opacity .2s ease .1s,-webkit-transform .2s ease .1s;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}.plyr__preview-thumb:before{border-left:4px solid #0000;border-left:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-right:4px solid #0000;border-right:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-top:4px solid #fff;border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,#fff);bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size,4px)*-1);content:\"\";height:0;left:calc(50% + var(--preview-arrow-offset));position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c8d1;border-radius:7px;border-radius:calc(var(--plyr-menu-radius,8px) - 1px);overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img,.plyr__preview-thumb__image-container:after{height:100%;left:0;position:absolute;top:0;width:100%}.plyr__preview-thumb__image-container:after{border-radius:inherit;box-shadow:inset 0 0 0 1px #00000026;content:\"\";pointer-events:none}.plyr__preview-thumb__image-container img{max-height:none;max-width:none}.plyr__preview-thumb__time-container{background:linear-gradient(#0000,#000000bf);background:var(--plyr-video-controls-background,linear-gradient(#0000,#000000bf));border-bottom-left-radius:7px;border-bottom-left-radius:calc(var(--plyr-menu-radius,8px) - 1px);border-bottom-right-radius:7px;border-bottom-right-radius:calc(var(--plyr-menu-radius,8px) - 1px);bottom:0;left:0;line-height:1.1;padding:20px 6px 6px;position:absolute;right:0;z-index:3}.plyr__preview-thumb__time-container span{color:#fff;font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__preview-scrubbing{bottom:0;-webkit-filter:blur(1px);filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);border:0!important;height:1px!important;overflow:hidden;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}@font-face{font-family:KaTeX_AMS;src:url(fonts/KaTeX_AMS-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_AMS-Regular.woff) format(\"woff\"),url(fonts/KaTeX_AMS-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Bold.woff2) format(\"woff2\"),url(fonts/KaTeX_Caligraphic-Bold.woff) format(\"woff\"),url(fonts/KaTeX_Caligraphic-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(fonts/KaTeX_Caligraphic-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Caligraphic-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Caligraphic-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Bold.woff2) format(\"woff2\"),url(fonts/KaTeX_Fraktur-Bold.woff) format(\"woff\"),url(fonts/KaTeX_Fraktur-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(fonts/KaTeX_Fraktur-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Fraktur-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Fraktur-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Bold.woff2) format(\"woff2\"),url(fonts/KaTeX_Main-Bold.woff) format(\"woff\"),url(fonts/KaTeX_Main-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-BoldItalic.woff2) format(\"woff2\"),url(fonts/KaTeX_Main-BoldItalic.woff) format(\"woff\"),url(fonts/KaTeX_Main-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Italic.woff2) format(\"woff2\"),url(fonts/KaTeX_Main-Italic.woff) format(\"woff\"),url(fonts/KaTeX_Main-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(fonts/KaTeX_Main-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Main-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Main-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-BoldItalic.woff2) format(\"woff2\"),url(fonts/KaTeX_Math-BoldItalic.woff) format(\"woff\"),url(fonts/KaTeX_Math-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(fonts/KaTeX_Math-Italic.woff2) format(\"woff2\"),url(fonts/KaTeX_Math-Italic.woff) format(\"woff\"),url(fonts/KaTeX_Math-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Bold.woff2) format(\"woff2\"),url(fonts/KaTeX_SansSerif-Bold.woff) format(\"woff\"),url(fonts/KaTeX_SansSerif-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Italic.woff2) format(\"woff2\"),url(fonts/KaTeX_SansSerif-Italic.woff) format(\"woff\"),url(fonts/KaTeX_SansSerif-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(fonts/KaTeX_SansSerif-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_SansSerif-Regular.woff) format(\"woff\"),url(fonts/KaTeX_SansSerif-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(fonts/KaTeX_Script-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Script-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Script-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(fonts/KaTeX_Size1-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Size1-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Size1-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(fonts/KaTeX_Size2-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Size2-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Size2-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(fonts/KaTeX_Size3-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Size3-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Size3-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(fonts/KaTeX_Size4-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Size4-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Size4-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(fonts/KaTeX_Typewriter-Regular.woff2) format(\"woff2\"),url(fonts/KaTeX_Typewriter-Regular.woff) format(\"woff\"),url(fonts/KaTeX_Typewriter-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex *{border-color:currentColor}.katex .katex-version::after{content:\"0.16.11\"}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;display:inline-block;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:700;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathboldfrak,.katex .textboldfrak{font-family:KaTeX_Fraktur;font-weight:700}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:inline-flex;flex-direction:column;align-items:baseline}.katex .hbox{display:inline-flex;flex-direction:row;width:100%}.katex .thinbox{display:inline-flex;flex-direction:row;width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:solid 0;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:.2777777778em;margin-right:-.5555555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.1666666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.6666666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.4566666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.1466666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.7142857143em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.8571428571em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.1428571429em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.2857142857em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.4285714286em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.7142857143em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.0571428571em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.4685714286em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.9628571429em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.5542857143em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.7777777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.8888888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.1111111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.3044444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.7644444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.5833333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.7283333333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.0733333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.4861111111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.4402777778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.7277777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.2893518519em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.4050925926em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.462962963em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.5208333333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.2002314815em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.4398148148em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.2410800386em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2892960463em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.337512054em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.3857280617em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.4339440694em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.4821600771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.5785920926em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.6943105111em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8331726133em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.1996142719em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.2009646302em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.2411575563em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.2813504823em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.3215434084em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.3617363344em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.4019292605em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.4823151125em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.578778135em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.6945337621em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.8336012862em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter{position:relative}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy::after,.katex .stretchy::before{content:\"\"}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{box-sizing:border-box;border-top:.049em solid;border-right:.049em solid;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num::before{counter-increment:katexEqnNo;content:\"(\" counter(katexEqnNo) \")\"}.katex .mml-eqn-num::before{counter-increment:mmlEqnNo;content:\"(\" counter(mmlEqnNo) \")\"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:calc(50% + .3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:visibility,opacity,-webkit-transform;transition-property:transform,visibility,opacity;transition-property:transform,visibility,opacity,-webkit-transform}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}.tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}:root{--tiptap-font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;--tiptap-font-family-mono:\"Fira Code\",\"JetBrains Mono\",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--tiptap-font-weight:400;--tiptap-font-size:1rem;--tiptap-line-height:1.7;--tiptap-color:#000000;--tiptap-color-primary:#6e56cf;--tiptap-color-secondly:#cdced6;--tiptap-background:#ffffff;--tiptap-background-selected:#008cff0e;--tiptap-card-color:#000000;--tiptap-card-background:#f9f9f9;--tiptap-code-color:#e5484d;--tiptap-code-background:#feebec;--tiptap-mark-color:#000000;--tiptap-mark-background:#fffab8;--tiptap-operator-shadow:rgba(0, 0, 0, 0.08);--tiptap-operator-border:#e8e8e8;--tiptap-operator-color:#60646c;--tiptap-operator-background:#ffffff;--tiptap-operator-hover-border:#cecece;--tiptap-operator-hover-color:#6e56cf;--tiptap-operator-hover-background:#f0f0f3;--tiptap-operator-dark-border:#e8e8e8;--tiptap-operator-dark-color:#edeef0;--tiptap-operator-dark-background:#111111;--tiptap-operator-dark-hover-border:#484848;--tiptap-operator-dark-hover-color:#6e56cf;--tiptap-operator-dark-hover-background:#212225}.ProseMirror{position:relative;display:flex;flex-direction:column;align-items:flex-start;max-width:100%;width:100%;outline:0;word-wrap:break-word;white-space:break-spaces;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;-webkit-font-feature-settings:\"liga\" 0;font-feature-settings:\"liga\" 0;color:var(--tiptap-color);background:var(--tiptap-background);font-family:var(--tiptap-font-family);font-weight:var(--tiptap-font-weight);font-size:var(--tiptap-font-size);line-height:var(--tiptap-line-height);box-sizing:border-box}.ProseMirror::before{content:\"\";position:absolute;left:-4em;width:4em;height:100%}.ProseMirror *{box-sizing:border-box}.ProseMirror>*{margin:.5em 0;width:100%;max-width:100%}.ProseMirror p{margin:0}.ProseMirror a{color:var(--tiptap-color-primary);cursor:pointer}.ProseMirror b,.ProseMirror strong{font-weight:600}.ProseMirror code{border-radius:.25em;padding:.2em .25em;font-family:var(--tiptap-font-family-mono);font-size:85%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;color:var(--tiptap-code-color);background:var(--tiptap-code-background)}.ProseMirror mark{color:var(--tiptap-mark-color);background:var(--tiptap-mark-background)}.ProseMirror h1,.ProseMirror h2,.ProseMirror h3,.ProseMirror h4,.ProseMirror h5,.ProseMirror h6{margin:.5em 0;font-weight:500;cursor:text}.ProseMirror h1::before,.ProseMirror h2::before,.ProseMirror h3::before,.ProseMirror h4::before,.ProseMirror h5::before,.ProseMirror h6::before{display:inline-block;width:1.5rem;margin-left:-1.5rem;font-family:var(--tiptap-font-family-mono);font-size:.8rem;line-height:0;color:var(--tiptap-color-secondly)}.ProseMirror h1::before{content:\"H1\"}.ProseMirror h2::before{content:\"H2\"}.ProseMirror h3::before{content:\"H3\"}.ProseMirror h4::before{content:\"H4\"}.ProseMirror h5::before{content:\"H5\"}.ProseMirror h6::before{content:\"H6\"}.ProseMirror blockquote{margin:.5em 0;padding-left:1em;font-style:italic;overflow:hidden;position:relative}.ProseMirror blockquote::before{content:\"\";display:inline-block;width:3px;border-radius:1px;position:absolute;margin-left:-1em;top:0;bottom:0;background:var(--tiptap-color-primary)}.ProseMirror hr{position:relative;height:1em;border:0}.ProseMirror hr::before{content:\"\";display:block;position:absolute;border-top:1px solid var(--tiptap-color-primary);top:.5em;left:0;right:0}.ProseMirror ol,.ProseMirror ul{margin:0;padding:0 0 0 1.2em}.ProseMirror ol ol{list-style:lower-alpha}.ProseMirror ol ol ol{list-style:lower-roman}.ProseMirror li{position:relative}.ProseMirror li::before{content:\"\";position:absolute;left:-3em;width:3em;top:0;bottom:0}.ProseMirror table{border-collapse:collapse;box-sizing:border-box;border-radius:4px;width:100%}.ProseMirror table tr{position:relative;border:1px solid var(--tiptap-operator-border)}.ProseMirror table td,.ProseMirror table th{position:relative;min-width:50px;padding:.25em .5em;border:1px solid var(--tiptap-operator-border)}.ProseMirror table [align=left],.ProseMirror table [align=start]{text-align:start}.ProseMirror table [align=center]{text-align:center}.ProseMirror table [align=end],.ProseMirror table [align=right]{text-align:end}.ProseMirror table .selectedCell{background:var(--tiptap-background-selected);background-clip:padding-box}.ProseMirror table .column-resize-handle{position:absolute;right:-2px;top:0;bottom:-2px;width:4px;background-color:var(--tiptap-color-primary);pointer-events:none}.ProseMirror table .ProseMirror-table-grip-drag{cursor:grab;display:flex;justify-content:center;align-items:center;line-height:1;width:.3rem;height:1.7rem;border-radius:2px;transition-duration:.3s;transition-property:width,height,border-radius;border:1px solid var(--tiptap-operator-border);background:var(--tiptap-operator-hover-background)}.ProseMirror table .ProseMirror-table-grip-drag .ProseMirror-icon{opacity:0;transition-duration:.3s;transition-property:opacity}.ProseMirror table .ProseMirror-table-grip-col,.ProseMirror table .ProseMirror-table-grip-row{position:absolute;width:1rem;height:1.7rem;display:flex;align-items:center;justify-content:center}.ProseMirror table .ProseMirror-table-grip-col.active .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-col:active .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-col:focus .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-col:hover .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-row.active .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-row:active .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-row:focus .ProseMirror-table-grip-drag,.ProseMirror table .ProseMirror-table-grip-row:hover .ProseMirror-table-grip-drag{width:1rem;border-radius:4px;color:var(--tiptap-operator-hover-background);background:var(--tiptap-operator-hover-color);border:1px solid var(--tiptap-operator-hover-color)}.ProseMirror table .ProseMirror-table-grip-col.active .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-col:active .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-col:focus .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-col:hover .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-row.active .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-row:active .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-row:focus .ProseMirror-table-grip-drag .ProseMirror-icon,.ProseMirror table .ProseMirror-table-grip-row:hover .ProseMirror-table-grip-drag .ProseMirror-icon{opacity:1}.ProseMirror table .ProseMirror-table-grip-col{top:0;left:50%;-webkit-transform:rotate(90deg) translateX(-.85rem) translateY(50%);transform:rotate(90deg) translateX(-.85rem) translateY(50%)}.ProseMirror table .ProseMirror-table-grip-row{left:0;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.ProseMirror table .ProseMirror-table-grip-cell{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ProseMirror table .ProseMirror-table-grip-table{position:absolute;top:0;left:0}.ProseMirror [data-type=taskList]{list-style:none;margin:0;padding:0}.ProseMirror [data-type=taskList] input{accent-color:var(--tiptap-color-primary)}.ProseMirror [data-type=taskList] li{display:flex}.ProseMirror [data-type=taskList] li label{padding-right:.15em;padding-top:.09em}.ProseMirror [data-type=taskList] li label input{width:1em;height:1em}.ProseMirror [data-type=taskList] div{width:100%}.ProseMirror [data-type=codeBlock]{position:relative;display:flex;flex-direction:column;padding:.75em 1em;gap:.5em;border-radius:4px;border:1px solid var(--tiptap-operator-border);background:var(--tiptap-card-background)}.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar]{position:absolute;top:.5em;right:.5em;display:flex;gap:.5em;opacity:0;transition-duration:.3s;transition-property:opacity}.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] select{display:inline-block;font-size:.8em;padding:.125em;border-radius:4px;outline:0;border:1px solid var(--tiptap-operator-hover-border);background:var(--tiptap-operator-background);transition-duration:.3s;transition-property:color,border,box-shadow}.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] select.active,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] select:active,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] select:focus,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] select:hover{border:1px solid var(--tiptap-operator-hover-color);box-shadow:0 0 0 1px var(--tiptap-operator-hover-color)}.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] button{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;font-size:.8em;padding:.125em .25em;border-radius:4px;outline:0;border:1px solid var(--tiptap-operator-hover-border);background:var(--tiptap-operator-background);transition-duration:.3s;transition-property:color,border,box-shadow}.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] button.active,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] button:active,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] button:focus,.ProseMirror [data-type=codeBlock] [data-type=codeBlockToolbar] button:hover{border:1px solid var(--tiptap-operator-hover-color);box-shadow:0 0 0 1px var(--tiptap-operator-hover-color)}.ProseMirror [data-type=codeBlock]:hover [data-type=codeBlockToolbar]{opacity:1}.ProseMirror [data-type=codeBlock] [data-type=codeBlockContent]{white-space:pre!important;line-height:1.5!important;background:0 0!important;padding:0!important;border:0!important}.ProseMirror [data-type=codeBlock] .hljs-comment,.ProseMirror [data-type=codeBlock] .hljs-quote{color:#a0a1a7;font-style:italic}.ProseMirror [data-type=codeBlock] .hljs-doctag,.ProseMirror [data-type=codeBlock] .hljs-formula,.ProseMirror [data-type=codeBlock] .hljs-keyword{color:#a626a4}.ProseMirror [data-type=codeBlock] .hljs-deletion,.ProseMirror [data-type=codeBlock] .hljs-name,.ProseMirror [data-type=codeBlock] .hljs-section,.ProseMirror [data-type=codeBlock] .hljs-selector-tag,.ProseMirror [data-type=codeBlock] .hljs-subst{color:#e45649}.ProseMirror [data-type=codeBlock] .hljs-literal{color:#0184bb}.ProseMirror [data-type=codeBlock] .hljs-addition,.ProseMirror [data-type=codeBlock] .hljs-attribute,.ProseMirror [data-type=codeBlock] .hljs-meta .hljs-string,.ProseMirror [data-type=codeBlock] .hljs-regexp,.ProseMirror [data-type=codeBlock] .hljs-string{color:#50a14f}.ProseMirror [data-type=codeBlock] .hljs-attr,.ProseMirror [data-type=codeBlock] .hljs-number,.ProseMirror [data-type=codeBlock] .hljs-selector-attr,.ProseMirror [data-type=codeBlock] .hljs-selector-class,.ProseMirror [data-type=codeBlock] .hljs-selector-pseudo,.ProseMirror [data-type=codeBlock] .hljs-template-variable,.ProseMirror [data-type=codeBlock] .hljs-type,.ProseMirror [data-type=codeBlock] .hljs-variable{color:#986801}.ProseMirror [data-type=codeBlock] .hljs-bullet,.ProseMirror [data-type=codeBlock] .hljs-link,.ProseMirror [data-type=codeBlock] .hljs-meta,.ProseMirror [data-type=codeBlock] .hljs-selector-id,.ProseMirror [data-type=codeBlock] .hljs-symbol,.ProseMirror [data-type=codeBlock] .hljs-title{color:#4078f2}.ProseMirror [data-type=codeBlock] .hljs-built_in,.ProseMirror [data-type=codeBlock] .hljs-class .hljs-title,.ProseMirror [data-type=codeBlock] .hljs-title.class_{color:#c18401}.ProseMirror [data-type=codeBlock] .hljs-emphasis{font-style:italic}.ProseMirror [data-type=codeBlock] .hljs-strong{font-weight:700}.ProseMirror [data-type=codeBlock] .hljs-link{text-decoration:underline}.ProseMirror [data-type=details]{display:flex;padding:.5em;border-radius:4px;border:1px solid transparent;transition:border .3s}.ProseMirror [data-type=details]:hover{border:1px solid var(--tiptap-operator-border)}.ProseMirror [data-type=details] [data-type=detailsButton]{display:flex;cursor:pointer;border:none;padding:0;background:0 0}.ProseMirror [data-type=details] [data-type=detailsButton] .ProseMirror-icon{width:2em;height:2em;-webkit-transform:rotateZ(0);transform:rotateZ(0);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.ProseMirror [data-type=details] [data-type=detailsButton]>div{display:flex;align-items:center;justify-content:center;border-radius:4px}.ProseMirror [data-type=details] [data-type=detailsButton]>div.active,.ProseMirror [data-type=details] [data-type=detailsButton]>div:hover{color:var(--tiptap-operator-hover-color);background:var(--tiptap-operator-hover-background)}.ProseMirror [data-type=details] [data-type=detailsContainer]{flex:1;margin-left:.2em}.ProseMirror [data-type=details] [data-type=detailsContainer] [data-type=detailsContent]{display:none}.ProseMirror [data-type=details][open] [data-type=detailsButton] .ProseMirror-icon{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.ProseMirror [data-type=details][open] [data-type=detailsContainer] [data-type=detailsContent]{display:block}.ProseMirror [data-type=embed]{position:relative;display:flex;justify-content:center;align-items:center;margin:.5em 0;border-radius:4px;color:var(--tiptap-card-color);border:1px solid transparent;transition:border .3s}.ProseMirror [data-type=embed]:hover{border:1px solid var(--tiptap-operator-border)}.ProseMirror [data-type=embed] iframe{width:100%;height:100%;border:0;border-radius:4px}.ProseMirror [data-type=image]{position:relative;display:flex;justify-content:center;align-items:center;margin:.5em 0;border-radius:4px;color:var(--tiptap-card-color);border:1px solid transparent;transition:border .3s}.ProseMirror [data-type=image]:hover{border:1px solid var(--tiptap-operator-border)}.ProseMirror [data-type=image] img{display:block;border:0;width:100%;-o-object-fit:cover;object-fit:cover;border-radius:4px}.ProseMirror [data-type=image][data-status]{resize:none;padding:.5em .5em;border:1px solid var(--tiptap-operator-border)}.ProseMirror [data-type=image][data-status] img{display:none}.ProseMirror [data-type=image][data-status]::before{content:attr(data-message)}.ProseMirror [data-type=image][data-status] .ProseMirror-bresizer,.ProseMirror [data-type=image][data-status] .ProseMirror-lresizer,.ProseMirror [data-type=image][data-status] .ProseMirror-rresizer{display:none}.ProseMirror [data-type=image][data-status=loading]{color:var(--tiptap-color-primary)}.ProseMirror [data-type=image][data-status=empty]{color:var(--tiptap-operator-color)}.ProseMirror [data-type=image][data-status=error]{color:var(--tiptap-code-color);background:var(--tiptap-code-background)}.ProseMirror [data-type=audio],.ProseMirror [data-type=video]{position:relative;display:flex;justify-content:center;align-items:center;margin:.5em 0;overflow:hidden;border-radius:4px;color:var(--tiptap-card-color);border:1px solid var(--tiptap-operator-border);transition:border .3s}.ProseMirror [data-type=audio]:hover,.ProseMirror [data-type=video]:hover{border:1px solid var(--tiptap-operator-border)}.ProseMirror [data-type=audio] audio,.ProseMirror [data-type=audio] video,.ProseMirror [data-type=video] audio,.ProseMirror [data-type=video] video{width:100%}.ProseMirror [data-type=audio] .plyr,.ProseMirror [data-type=video] .plyr{--plyr-color-main:var(--tiptap-color-primary);--plyr-menu-background:var(--tiptap-background);--plyr-audio-control-color:var(--tiptap-card-color);--plyr-audio-controls-background:var(--tiptap-background);width:100%}.tippy-box[data-theme=ProseMirror-dark],.tippy-box[data-theme=ProseMirror-none],.tippy-box[data-theme=ProseMirror]{font-size:inherit;line-height:inherit;color:var(--tiptap-operator-color);background:0 0}.tippy-box[data-theme=ProseMirror-dark] .tippy-content,.tippy-box[data-theme=ProseMirror-none] .tippy-content,.tippy-box[data-theme=ProseMirror] .tippy-content{padding:0}.tippy-box[data-theme=ProseMirror]{color:var(--tiptap-operator-color);background:var(--tiptap-operator-background);box-shadow:var(--tiptap-operator-shadow) 0 0 0 1px,var(--tiptap-operator-shadow) 0 2px 4px,var(--tiptap-operator-shadow) 0 4px 8px}.tippy-box[data-theme=ProseMirror-dark]{color:var(--tiptap-operator-dark-color);background:var(--tiptap-operator-dark-background);box-shadow:var(--tiptap-operator-shadow) 0 0 0 1px,var(--tiptap-operator-shadow) 0 2px 4px,var(--tiptap-operator-shadow) 0 4px 8px}.ProseMirror [data-color=gray],.tippy-box[data-theme=ProseMirror-dark] [data-color=gray],.tippy-box[data-theme=ProseMirror-none] [data-color=gray],.tippy-box[data-theme=ProseMirror] [data-color=gray]{color:#8d8d8d;fill:#8d8d8d;background:inherit}.ProseMirror [data-color=slate],.tippy-box[data-theme=ProseMirror-dark] [data-color=slate],.tippy-box[data-theme=ProseMirror-none] [data-color=slate],.tippy-box[data-theme=ProseMirror] [data-color=slate]{color:#8e8c99;fill:#8e8c99;background:inherit}.ProseMirror [data-color=tomato],.tippy-box[data-theme=ProseMirror-dark] [data-color=tomato],.tippy-box[data-theme=ProseMirror-none] [data-color=tomato],.tippy-box[data-theme=ProseMirror] [data-color=tomato]{color:#e54d2e;fill:#e54d2e;background:inherit}.ProseMirror [data-color=red],.tippy-box[data-theme=ProseMirror-dark] [data-color=red],.tippy-box[data-theme=ProseMirror-none] [data-color=red],.tippy-box[data-theme=ProseMirror] [data-color=red]{color:#e5484d;fill:#e5484d;background:inherit}.ProseMirror [data-color=ruby],.tippy-box[data-theme=ProseMirror-dark] [data-color=ruby],.tippy-box[data-theme=ProseMirror-none] [data-color=ruby],.tippy-box[data-theme=ProseMirror] [data-color=ruby]{color:#e54666;fill:#e54666;background:inherit}.ProseMirror [data-color=crimson],.tippy-box[data-theme=ProseMirror-dark] [data-color=crimson],.tippy-box[data-theme=ProseMirror-none] [data-color=crimson],.tippy-box[data-theme=ProseMirror] [data-color=crimson]{color:#e93d82;fill:#e93d82;background:inherit}.ProseMirror [data-color=pink],.tippy-box[data-theme=ProseMirror-dark] [data-color=pink],.tippy-box[data-theme=ProseMirror-none] [data-color=pink],.tippy-box[data-theme=ProseMirror] [data-color=pink]{color:#d6409f;fill:#d6409f;background:inherit}.ProseMirror [data-color=plum],.tippy-box[data-theme=ProseMirror-dark] [data-color=plum],.tippy-box[data-theme=ProseMirror-none] [data-color=plum],.tippy-box[data-theme=ProseMirror] [data-color=plum]{color:#ab4aba;fill:#ab4aba;background:inherit}.ProseMirror [data-color=purple],.tippy-box[data-theme=ProseMirror-dark] [data-color=purple],.tippy-box[data-theme=ProseMirror-none] [data-color=purple],.tippy-box[data-theme=ProseMirror] [data-color=purple]{color:#8e4ec6;fill:#8e4ec6;background:inherit}.ProseMirror [data-color=violet],.tippy-box[data-theme=ProseMirror-dark] [data-color=violet],.tippy-box[data-theme=ProseMirror-none] [data-color=violet],.tippy-box[data-theme=ProseMirror] [data-color=violet]{color:#6e56cf;fill:#6e56cf;background:inherit}.ProseMirror [data-color=iris],.tippy-box[data-theme=ProseMirror-dark] [data-color=iris],.tippy-box[data-theme=ProseMirror-none] [data-color=iris],.tippy-box[data-theme=ProseMirror] [data-color=iris]{color:#5b5bd6;fill:#5b5bd6;background:inherit}.ProseMirror [data-color=indigo],.tippy-box[data-theme=ProseMirror-dark] [data-color=indigo],.tippy-box[data-theme=ProseMirror-none] [data-color=indigo],.tippy-box[data-theme=ProseMirror] [data-color=indigo]{color:#3e63dd;fill:#3e63dd;background:inherit}.ProseMirror [data-color=blue],.tippy-box[data-theme=ProseMirror-dark] [data-color=blue],.tippy-box[data-theme=ProseMirror-none] [data-color=blue],.tippy-box[data-theme=ProseMirror] [data-color=blue]{color:#0090ff;fill:#0090ff;background:inherit}.ProseMirror [data-color=cyan],.tippy-box[data-theme=ProseMirror-dark] [data-color=cyan],.tippy-box[data-theme=ProseMirror-none] [data-color=cyan],.tippy-box[data-theme=ProseMirror] [data-color=cyan]{color:#00a2c7;fill:#00a2c7;background:inherit}.ProseMirror [data-color=teal],.tippy-box[data-theme=ProseMirror-dark] [data-color=teal],.tippy-box[data-theme=ProseMirror-none] [data-color=teal],.tippy-box[data-theme=ProseMirror] [data-color=teal]{color:#12a594;fill:#12a594;background:inherit}.ProseMirror [data-color=jade],.tippy-box[data-theme=ProseMirror-dark] [data-color=jade],.tippy-box[data-theme=ProseMirror-none] [data-color=jade],.tippy-box[data-theme=ProseMirror] [data-color=jade]{color:#29a383;fill:#29a383;background:inherit}.ProseMirror [data-color=green],.tippy-box[data-theme=ProseMirror-dark] [data-color=green],.tippy-box[data-theme=ProseMirror-none] [data-color=green],.tippy-box[data-theme=ProseMirror] [data-color=green]{color:#30a46c;fill:#30a46c;background:inherit}.ProseMirror [data-color=bronze],.tippy-box[data-theme=ProseMirror-dark] [data-color=bronze],.tippy-box[data-theme=ProseMirror-none] [data-color=bronze],.tippy-box[data-theme=ProseMirror] [data-color=bronze]{color:#a18072;fill:#a18072;background:inherit}.ProseMirror [data-color=gold],.tippy-box[data-theme=ProseMirror-dark] [data-color=gold],.tippy-box[data-theme=ProseMirror-none] [data-color=gold],.tippy-box[data-theme=ProseMirror] [data-color=gold]{color:#978365;fill:#978365;background:inherit}.ProseMirror [data-color=brown],.tippy-box[data-theme=ProseMirror-dark] [data-color=brown],.tippy-box[data-theme=ProseMirror-none] [data-color=brown],.tippy-box[data-theme=ProseMirror] [data-color=brown]{color:#ad7f58;fill:#ad7f58;background:inherit}.ProseMirror [data-color=orange],.tippy-box[data-theme=ProseMirror-dark] [data-color=orange],.tippy-box[data-theme=ProseMirror-none] [data-color=orange],.tippy-box[data-theme=ProseMirror] [data-color=orange]{color:#f76b15;fill:#f76b15;background:inherit}.ProseMirror [data-color=amber],.tippy-box[data-theme=ProseMirror-dark] [data-color=amber],.tippy-box[data-theme=ProseMirror-none] [data-color=amber],.tippy-box[data-theme=ProseMirror] [data-color=amber]{color:#ffc53d;fill:#ffc53d;background:inherit}.ProseMirror [data-color=yellow],.tippy-box[data-theme=ProseMirror-dark] [data-color=yellow],.tippy-box[data-theme=ProseMirror-none] [data-color=yellow],.tippy-box[data-theme=ProseMirror] [data-color=yellow]{color:#ffe629;fill:#ffe629;background:inherit}.ProseMirror [data-color=lime],.tippy-box[data-theme=ProseMirror-dark] [data-color=lime],.tippy-box[data-theme=ProseMirror-none] [data-color=lime],.tippy-box[data-theme=ProseMirror] [data-color=lime]{color:#bdee63;fill:#bdee63;background:inherit}.ProseMirror [data-color=mint],.tippy-box[data-theme=ProseMirror-dark] [data-color=mint],.tippy-box[data-theme=ProseMirror-none] [data-color=mint],.tippy-box[data-theme=ProseMirror] [data-color=mint]{color:#86ead4;fill:#86ead4;background:inherit}.ProseMirror [data-color=sky],.tippy-box[data-theme=ProseMirror-dark] [data-color=sky],.tippy-box[data-theme=ProseMirror-none] [data-color=sky],.tippy-box[data-theme=ProseMirror] [data-color=sky]{color:#7ce2fe;fill:#7ce2fe;background:inherit}.ProseMirror [data-color=b-gray],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-gray],.tippy-box[data-theme=ProseMirror-none] [data-color=b-gray],.tippy-box[data-theme=ProseMirror] [data-color=b-gray]{background:#f0f0f0}.ProseMirror [data-color=b-slate],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-slate],.tippy-box[data-theme=ProseMirror-none] [data-color=b-slate],.tippy-box[data-theme=ProseMirror] [data-color=b-slate]{background:#f0f0f3}.ProseMirror [data-color=b-tomato],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-tomato],.tippy-box[data-theme=ProseMirror-none] [data-color=b-tomato],.tippy-box[data-theme=ProseMirror] [data-color=b-tomato]{background:#feebe7}.ProseMirror [data-color=b-red],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-red],.tippy-box[data-theme=ProseMirror-none] [data-color=b-red],.tippy-box[data-theme=ProseMirror] [data-color=b-red]{background:#feebec}.ProseMirror [data-color=b-ruby],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-ruby],.tippy-box[data-theme=ProseMirror-none] [data-color=b-ruby],.tippy-box[data-theme=ProseMirror] [data-color=b-ruby]{background:#feeaed}.ProseMirror [data-color=b-crimson],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-crimson],.tippy-box[data-theme=ProseMirror-none] [data-color=b-crimson],.tippy-box[data-theme=ProseMirror] [data-color=b-crimson]{background:#ffe9f0}.ProseMirror [data-color=b-pink],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-pink],.tippy-box[data-theme=ProseMirror-none] [data-color=b-pink],.tippy-box[data-theme=ProseMirror] [data-color=b-pink]{background:#fee9f5}.ProseMirror [data-color=b-plum],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-plum],.tippy-box[data-theme=ProseMirror-none] [data-color=b-plum],.tippy-box[data-theme=ProseMirror] [data-color=b-plum]{background:#fbebfb}.ProseMirror [data-color=b-purple],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-purple],.tippy-box[data-theme=ProseMirror-none] [data-color=b-purple],.tippy-box[data-theme=ProseMirror] [data-color=b-purple]{background:#f7edfe}.ProseMirror [data-color=b-violet],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-violet],.tippy-box[data-theme=ProseMirror-none] [data-color=b-violet],.tippy-box[data-theme=ProseMirror] [data-color=b-violet]{background:#f4f0fe}.ProseMirror [data-color=b-iris],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-iris],.tippy-box[data-theme=ProseMirror-none] [data-color=b-iris],.tippy-box[data-theme=ProseMirror] [data-color=b-iris]{background:#f0f1fe}.ProseMirror [data-color=b-indigo],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-indigo],.tippy-box[data-theme=ProseMirror-none] [data-color=b-indigo],.tippy-box[data-theme=ProseMirror] [data-color=b-indigo]{background:#e1e9ff}.ProseMirror [data-color=b-blue],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-blue],.tippy-box[data-theme=ProseMirror-none] [data-color=b-blue],.tippy-box[data-theme=ProseMirror] [data-color=b-blue]{background:#e6f4fe}.ProseMirror [data-color=b-cyan],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-cyan],.tippy-box[data-theme=ProseMirror-none] [data-color=b-cyan],.tippy-box[data-theme=ProseMirror] [data-color=b-cyan]{background:#def7f9}.ProseMirror [data-color=b-teal],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-teal],.tippy-box[data-theme=ProseMirror-none] [data-color=b-teal],.tippy-box[data-theme=ProseMirror] [data-color=b-teal]{background:#e0f8f3}.ProseMirror [data-color=b-jade],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-jade],.tippy-box[data-theme=ProseMirror-none] [data-color=b-jade],.tippy-box[data-theme=ProseMirror] [data-color=b-jade]{background:#e6f7ed}.ProseMirror [data-color=b-green],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-green],.tippy-box[data-theme=ProseMirror-none] [data-color=b-green],.tippy-box[data-theme=ProseMirror] [data-color=b-green]{background:#e6f6eb}.ProseMirror [data-color=b-bronze],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-bronze],.tippy-box[data-theme=ProseMirror-none] [data-color=b-bronze],.tippy-box[data-theme=ProseMirror] [data-color=b-bronze]{background:#f6edea}.ProseMirror [data-color=b-gold],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-gold],.tippy-box[data-theme=ProseMirror-none] [data-color=b-gold],.tippy-box[data-theme=ProseMirror] [data-color=b-gold]{background:#f2f0e7}.ProseMirror [data-color=b-brown],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-brown],.tippy-box[data-theme=ProseMirror-none] [data-color=b-brown],.tippy-box[data-theme=ProseMirror] [data-color=b-brown]{background:#f6eee7}.ProseMirror [data-color=b-orange],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-orange],.tippy-box[data-theme=ProseMirror-none] [data-color=b-orange],.tippy-box[data-theme=ProseMirror] [data-color=b-orange]{background:#ffefd6}.ProseMirror [data-color=b-amber],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-amber],.tippy-box[data-theme=ProseMirror-none] [data-color=b-amber],.tippy-box[data-theme=ProseMirror] [data-color=b-amber]{background:#fff7c2}.ProseMirror [data-color=b-yellow],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-yellow],.tippy-box[data-theme=ProseMirror-none] [data-color=b-yellow],.tippy-box[data-theme=ProseMirror] [data-color=b-yellow]{background:#fffab8}.ProseMirror [data-color=b-lime],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-lime],.tippy-box[data-theme=ProseMirror-none] [data-color=b-lime],.tippy-box[data-theme=ProseMirror] [data-color=b-lime]{background:#eef6d6}.ProseMirror [data-color=b-mint],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-mint],.tippy-box[data-theme=ProseMirror-none] [data-color=b-mint],.tippy-box[data-theme=ProseMirror] [data-color=b-mint]{background:#ddf9f2}.ProseMirror [data-color=b-sky],.tippy-box[data-theme=ProseMirror-dark] [data-color=b-sky],.tippy-box[data-theme=ProseMirror-none] [data-color=b-sky],.tippy-box[data-theme=ProseMirror] [data-color=b-sky]{background:#e1f6fd}.resize-cursor{cursor:col-resize}.ProseMirror-icon{display:inline-block;width:1em;height:1em;-webkit-mask-image:var(--svg);mask-image:var(--svg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor}.ProseMirror-icon-open{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12z'/%3E%3C/svg%3E\")}.ProseMirror-icon-upload{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415zM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2'/%3E%3C/svg%3E\")}.ProseMirror-icon-remove{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zM6 7v13h12V7zm1-5h10v2H7zm4 8h2v7h-2z'/%3E%3C/svg%3E\")}.ProseMirror-icon-bold{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 11h4.5a2.5 2.5 0 0 0 0-5H8zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5M8 13v5h5.5a2.5 2.5 0 0 0 0-5z'/%3E%3C/svg%3E\")}.ProseMirror-icon-italic{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z'/%3E%3C/svg%3E\")}.ProseMirror-icon-code{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757zm6.96 9H7.66l6.552-18h2.128z'/%3E%3C/svg%3E\")}.ProseMirror-icon-strike{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M17.154 14c.23.516.346 1.09.346 1.72c0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.434 20 11.586 20c-1.64 0-3.263-.381-4.87-1.145v-2.254c1.52.877 3.075 1.316 4.666 1.316c2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03c-2.48 0-3.719.782-3.719 2.346c0 .42.218.786.654 1.099c.436.313.974.563 1.613.75c.62.18 1.297.414 2.03.699'/%3E%3C/svg%3E\")}.ProseMirror-icon-highlight{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15.243 4.511L8.505 11.25l-.707 2.121l-1.04 1.041l2.828 2.828l1.04-1.04l2.122-.708l6.737-6.737zm6.364 3.536a1 1 0 0 1 0 1.414l-7.778 7.778l-2.122.707l-1.414 1.415a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414L6.05 12.29l.707-2.122l7.779-7.778a1 1 0 0 1 1.414 0zm-6.364-.707l1.414 1.414l-4.95 4.95l-1.414-1.414zm-10.96 9.546l2.828 2.828l-1.414 1.415l-4.243-1.415z'/%3E%3C/svg%3E\")}.ProseMirror-icon-link{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05L8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828l-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607l1.415 1.415l-7.072 7.07l-1.414-1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-underline{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 3v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0V3zM4 20h16v2H4z'/%3E%3C/svg%3E\")}.ProseMirror-icon-sup{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 1 1 23 6c0 .573-.24 1.09-.626 1.454L20.744 9H23v1h-4V9z'/%3E%3C/svg%3E\")}.ProseMirror-icon-sub{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M5.596 4L10.5 9.928L15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4zM21.8 16a.8.8 0 1 0-1.57.22l-1.154.33A2.001 2.001 0 1 1 23 16c0 .573-.24 1.09-.626 1.454L20.744 19H23v1h-4v-1l2.55-2.42a.798.798 0 0 0 .25-.58'/%3E%3C/svg%3E\")}.ProseMirror-icon-blockquote{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179'/%3E%3C/svg%3E\")}.ProseMirror-icon-ul{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z'/%3E%3C/svg%3E\")}.ProseMirror-icon-ol{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z'/%3E%3C/svg%3E\")}.ProseMirror-icon-tl{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 6v3H5V6zM3 4v7h7V4zm10 0h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-2.293-1.793l-1.414-1.414L6 18.086l-1.793-1.793l-1.414 1.414L6 20.914z'/%3E%3C/svg%3E\")}.ProseMirror-icon-h1{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8z'/%3E%3C/svg%3E\")}.ProseMirror-icon-h2{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.065-1.292l-.005.144h-2A3.75 3.75 0 0 1 18.5 8'/%3E%3C/svg%3E\")}.ProseMirror-icon-h3{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m22 8l-.002 2l-2.505 2.883a3.752 3.752 0 0 1-.993 7.367a3.751 3.751 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z'/%3E%3C/svg%3E\")}.ProseMirror-icon-h4{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66zm-2 3.133L17.19 16H20z'/%3E%3C/svg%3E\")}.ProseMirror-icon-h5{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z'/%3E%3C/svg%3E\")}.ProseMirror-icon-h6{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m21.097 8l-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 10.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4'/%3E%3C/svg%3E\")}.ProseMirror-icon-hr{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z'/%3E%3C/svg%3E\")}.ProseMirror-icon-image{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4'/%3E%3C/svg%3E\")}.ProseMirror-icon-plus{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z'/%3E%3C/svg%3E\")}.ProseMirror-icon-drag{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M15.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1.5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3'/%3E%3C/svg%3E\")}.ProseMirror-icon-left{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-right{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-up{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 4.836l-6.207 6.207l1.414 1.414L12 7.664l4.793 4.793l1.414-1.414zm0 5.65l-6.207 6.207l1.414 1.414L12 13.314l4.793 4.793l1.414-1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-down{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z'/%3E%3C/svg%3E\")}.ProseMirror-icon-left-line{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m11.828 12l2.829 2.829l-1.414 1.414L9 12.001l4.243-4.243l1.414 1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-right-line{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-up-line{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-down-line{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z'/%3E%3C/svg%3E\")}.ProseMirror-icon-table{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 8h16V5H4zm10 11v-9h-4v9zm2 0h4v-9h-4zm-8 0v-9H4v9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1'/%3E%3C/svg%3E\")}.ProseMirror-icon-align-left{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 21V3h2v18zm6-6h6v3H9zm-1-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm1-4h10V6H9zM7 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z'/%3E%3C/svg%3E\")}.ProseMirror-icon-align-center{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 15v3h8v-3zM6 9h12V6H6z'/%3E%3C/svg%3E\")}.ProseMirror-icon-align-right{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 21V3h2v18zM9 15h6v3H9zm-1-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM5 9h10V6H5zM3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z'/%3E%3C/svg%3E\")}.ProseMirror-icon-merge-cells{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v5.999h2V9l3 3l-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3l3-3v1.999h2V5h-6v2h-2zm2 8v2h-2v-2zm0-4v2h-2V9z'/%3E%3C/svg%3E\")}.ProseMirror-icon-split-cells{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4l3 3l-3 3v-2H9v2l-3-3l3-3v2h6z'/%3E%3C/svg%3E\")}.ProseMirror-icon-header-row{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 12H5v7h14zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1'/%3E%3C/svg%3E\")}.ProseMirror-icon-header-col{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 5v14h7V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1'/%3E%3C/svg%3E\")}.ProseMirror-icon-help{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355'/%3E%3C/svg%3E\")}.ProseMirror-icon-math{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M10 2a4 4 0 0 0-4 4v3H3v2h3v7a2 2 0 0 1-2 2H3v2h1a4 4 0 0 0 4-4v-7h3V9H8V6a2 2 0 0 1 2-2h1V2zm5.202 14.997L11.891 21h2.595l2.014-2.434L18.514 21h2.595l-3.311-4.003L21.105 13h-2.596L16.5 15.428L14.491 13h-2.595z'/%3E%3C/svg%3E\")}.ProseMirror-icon-audio{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3z'/%3E%3C/svg%3E\")}.ProseMirror-icon-video{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332'/%3E%3C/svg%3E\")}.ProseMirror-icon-embed{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5zM5 19h10.169L19 15.171V5H5z'/%3E%3C/svg%3E\")}.ProseMirror-icon-details{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-7 1v4h3l-4 4l-4-4h3v-4zm5.764-5H5.237l-1 2h15.527z'/%3E%3C/svg%3E\")}.ProseMirror-icon-mermaid{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M11.5 12.5A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5v-.823a3.114 3.114 0 0 0-1.35-2.566A6.114 6.114 0 0 1 .5 4.073V3A1.5 1.5 0 0 1 2 1.5h.666A6.425 6.425 0 0 1 8 4.343A6.425 6.425 0 0 1 13.334 1.5H14A1.5 1.5 0 0 1 15.5 3v1.073a6.114 6.114 0 0 1-2.65 5.038a3.114 3.114 0 0 0-1.35 2.566zm-8-9.43a4.924 4.924 0 0 1 3.738 3.025c.275.688 1.249.688 1.524 0A4.924 4.924 0 0 1 13.334 3H14v1.073a4.614 4.614 0 0 1-2 3.802c-1.252.86-2 2.283-2 3.802v.823H6v-.823c0-1.52-.748-2.941-2-3.802a4.614 4.614 0 0 1-2-3.802V3h.666c.283 0 .562.024.834.07' clip-rule='evenodd'/%3E%3C/svg%3E\")}.ProseMirror-icon-plantuml{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M5.75 2.5h4.5a1.5 1.5 0 0 1 1.269.7a2.5 2.5 0 0 0 .231 4.686V12a1.5 1.5 0 0 1-1.5 1.5h-4.5c-.534 0-1.003-.28-1.269-.7a2.5 2.5 0 0 0-.231-4.686v-.228A2.501 2.501 0 0 0 4.481 3.2c.266-.42.735-.7 1.269-.7m-3 5.614v-.228a2.501 2.501 0 0 1 .146-4.813A3.001 3.001 0 0 1 5.75 1h4.5a3 3 0 0 1 2.854 2.074a2.501 2.501 0 0 1 .146 4.812V12a3 3 0 0 1-3 3h-4.5a3.001 3.001 0 0 1-2.854-2.073a2.501 2.501 0 0 1-.146-4.813M3.5 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1-6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m10-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2' clip-rule='evenodd'/%3E%3C/svg%3E\")}.ProseMirror-code{font-family:var(--tiptap-font-family-mono)}.ProseMirror-warn{padding:0 .5em;border-radius:4px;color:var(--tiptap-mark-color);background:var(--tiptap-mark-background)}.ProseMirror-empty{padding:0 .5em;border-radius:4px;color:var(--tiptap-operator-color);background:var(--tiptap-operator-hover-background)}.ProseMirror-error{padding:0 .5em;border-radius:4px;color:var(--tiptap-code-color);background:var(--tiptap-code-background)}.ProseMirror-loading{padding:0 .5em;border-radius:4px;color:var(--tiptap-color-primary);background:var(--tiptap-operator-hover-background)}.ProseMirror-card-empty{color:var(--tiptap-operator-color)}.ProseMirror-card-error{color:var(--tiptap-code-color);background:var(--tiptap-code-background)}.ProseMirror-card-loading{color:var(--tiptap-color-primary)}.ProseMirror-separator.ProseMirror-separator{display:none!important}.ProseMirror[contenteditable=true] .ProseMirror-gapcursor{display:none;pointer-events:none;position:relative}.ProseMirror[contenteditable=true] .ProseMirror-gapcursor::after{content:\"\";display:block;position:absolute;top:-3px;width:20px;border-top:2px solid var(--tiptap-color-primary);-webkit-animation:ProseMirror-cursor-blink 1.1s steps(2,start) infinite;animation:ProseMirror-cursor-blink 1.1s steps(2,start) infinite}.ProseMirror-focused[contenteditable=true] .ProseMirror-gapcursor{display:block}.ProseMirror[contenteditable=true] .ProseMirror-selectednode{position:relative}.ProseMirror[contenteditable=true] .ProseMirror-selectednode::after{content:\"\";position:absolute;left:-4px;right:-4px;top:-4px;bottom:-4px;border-radius:4px;pointer-events:none;background:var(--tiptap-background-selected)}.ProseMirror[contenteditable=true] .ProseMirror-selectednode.ProseMirror-selectedcard{border:1px solid var(--tiptap-operator-hover-color);box-shadow:0 0 0 1px var(--tiptap-operator-hover-color)}.ProseMirror[contenteditable=true] .ProseMirror-selectednode.ProseMirror-selectedcard::after{content:none!important}li.ProseMirror[contenteditable=true] .ProseMirror-selectednode::after{left:-24px}ul[data-type=taskList] li.ProseMirror[contenteditable=true] .ProseMirror-selectednode::after{left:-4px}.ProseMirror-hideselection{caret-color:transparent}.ProseMirror-hideselection ::-moz-selection{background:0 0}.ProseMirror-hideselection ::selection{background:0 0}.ProseMirror-inner-editor{position:relative;border-radius:4px}.ProseMirror-inner-editor .ProseMirror{white-space:pre!important;line-height:1.5!important;font-family:var(--tiptap-font-family-mono)!important;font-weight:400!important;font-size:.9em!important;background:0 0!important;border:0!important;padding:0!important;overflow:auto!important}.ProseMirror-inner-editor-editor{padding:.75em 1em;background:var(--tiptap-card-background);border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:1px solid var(--tiptap-operator-border)}.ProseMirror-inner-editor-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:auto;padding:.75em 1em;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.ProseMirror-inner-editor-preview [id^=mermaid]{width:100%;display:flex;justify-content:center;align-items:center}.ProseMirror[contenteditable=false] .ProseMirror-inner-editor-editor{display:none!important}.ProseMirror-inner-resizer{position:relative;border-radius:4px}.ProseMirror-inner-resizer .ProseMirror-bresizer,.ProseMirror-inner-resizer .ProseMirror-lresizer,.ProseMirror-inner-resizer .ProseMirror-rresizer{position:absolute;border-radius:5px;border:1px solid var(--tiptap-operator-background);background-color:var(--tiptap-operator-color);opacity:0;transition:opacity .3s}.ProseMirror-inner-resizer .ProseMirror-bresizer>div,.ProseMirror-inner-resizer .ProseMirror-lresizer>div,.ProseMirror-inner-resizer .ProseMirror-rresizer>div{position:fixed;top:0;bottom:0;left:0;right:0}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-lresizer,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-lresizer,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-lresizer{right:.25rem;width:5px;height:40px;cursor:col-resize}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-lresizer>div,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-lresizer>div,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-lresizer>div{cursor:col-resize}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-rresizer,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-rresizer,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-rresizer{left:.25rem;width:5px;height:40px;cursor:col-resize}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-rresizer>div,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-rresizer>div,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-rresizer>div{cursor:col-resize}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-bresizer,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-bresizer,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-bresizer{bottom:.25rem;width:40px;height:5px;cursor:row-resize}.ProseMirror-inner-resizer .ProseMirror-bresizer.ProseMirror-bresizer>div,.ProseMirror-inner-resizer .ProseMirror-lresizer.ProseMirror-bresizer>div,.ProseMirror-inner-resizer .ProseMirror-rresizer.ProseMirror-bresizer>div{cursor:row-resize}.ProseMirror-inner-resizer:hover .ProseMirror-bresizer,.ProseMirror-inner-resizer:hover .ProseMirror-lresizer,.ProseMirror-inner-resizer:hover .ProseMirror-rresizer{opacity:1}.ProseMirror[contenteditable=false] .ProseMirror-inner-resizer .ProseMirror-bresizer,.ProseMirror[contenteditable=false] .ProseMirror-inner-resizer .ProseMirror-lresizer,.ProseMirror[contenteditable=false] .ProseMirror-inner-resizer .ProseMirror-rresizer{display:none!important}@-webkit-keyframes ProseMirror-cursor-blink{to{visibility:hidden}}@keyframes ProseMirror-cursor-blink{to{visibility:hidden}}.ProseMirror-fm{display:flex;justify-content:center;align-items:center;padding:.3rem .5rem}.ProseMirror-fm-divider{width:1px;height:1.3rem;background:var(--tiptap-operator-border)}.ProseMirror-fm-group{gap:.2rem;display:flex;align-items:center;justify-content:center}.ProseMirror-fm-group .ProseMirror-fm-button{margin-left:0;margin-right:0}.ProseMirror-fm-input{font-size:.9rem;line-height:1;flex-grow:1;outline:0;margin:.1rem 0;padding:.3rem .5rem;border-radius:4px;color:var(--tiptap-operator-color);background:var(--tiptap-operator-background);border:1px solid var(--tiptap-operator-hover-border);transition-duration:.3s;transition-property:color,border,box-shadow}.ProseMirror-fm-input.active,.ProseMirror-fm-input:hover{border:1px solid var(--tiptap-operator-hover-color);box-shadow:0 0 0 1px var(--tiptap-operator-hover-color)}.ProseMirror-fm-input::-webkit-input-placeholder{color:var(--tiptap-color-secondly)}.ProseMirror-fm-input::-moz-placeholder{color:var(--tiptap-color-secondly)}.ProseMirror-fm-input::-ms-input-placeholder{color:var(--tiptap-color-secondly)}.ProseMirror-fm-input::placeholder{color:var(--tiptap-color-secondly)}.ProseMirror-fm-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;margin:0 .1rem;outline:0;cursor:pointer;border:none;border-radius:4px;transition-duration:.3s;transition-property:color;color:var(--tiptap-operator-color);background:0 0}.ProseMirror-fm-button:first-child{margin-left:0}.ProseMirror-fm-button:last-child{margin-right:0}.ProseMirror-fm-button.active,.ProseMirror-fm-button:hover{color:var(--tiptap-operator-hover-color);background:var(--tiptap-operator-hover-background)}.ProseMirror-fm-button-popover{display:flex;padding:.3rem .5rem;font-size:.7rem;border-radius:4px;color:var(--tiptap-operator-dark-color);background:var(--tiptap-operator-dark-background)}.ProseMirror-fm-button .ProseMirror-icon{width:1.6rem;height:1.6rem}.ProseMirror-fm-color-picker{display:grid;grid-template-columns:repeat(13,1fr);gap:.5rem;padding:.5rem}.ProseMirror-fm-color-picker button{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;line-height:1;padding:.35rem .5rem;border-radius:4px;border:1px solid var(--tiptap-operator-hover-border);transition-duration:.3s;transition-property:color,border,box-shadow}.ProseMirror-fm-color-picker button.active,.ProseMirror-fm-color-picker button:hover{border:1px solid var(--tiptap-operator-hover-color);box-shadow:0 0 0 1px var(--tiptap-operator-hover-color)}.ProseMirror-fm-group+.ProseMirror-fm-button,.ProseMirror-fm-input+.ProseMirror-fm-button{margin-left:.4rem}.ProseMirror-fm-button+.ProseMirror-fm-group,.ProseMirror-fm-button+.ProseMirror-fm-input{margin-right:.4rem}.ProseMirror-bm{overflow-x:hidden;overflow-y:auto;padding:.5rem 0;width:20rem;max-height:15rem;white-space:nowrap;pointer-events:all;color:var(--tiptap-color)}.ProseMirror-bm-empty{display:flex;align-items:center;font-weight:500;font-size:.8rem;height:2.8rem;padding:0 1rem}.ProseMirror-bm-divider{border-top:1px solid var(--tiptap-operator-border);margin:.25rem 0}.ProseMirror-bm-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:flex;align-items:center;justify-content:flex-start;font-weight:500;font-size:.7rem;line-height:1;width:100%;border:none;outline:0;height:2.4rem;padding:0 1rem;background:0 0}.ProseMirror-bm-button.active,.ProseMirror-bm-button:hover{background:var(--tiptap-operator-hover-background)}.ProseMirror-bm-button-icon{margin-right:.8rem;width:1rem;height:1rem}.ProseMirror-bm-button-icon .ProseMirror-icon{width:1rem;height:1rem}.ProseMirror-bm-button-name{flex-grow:1;text-align:start}.ProseMirror-bm-placeholder::before{content:attr(data-empty);display:block;opacity:0;transition:opacity .3s;pointer-events:none;height:0;padding-left:.1rem;color:var(--tiptap-operator-color);font-size:var(--tiptap-font-size)}.ProseMirror-focused .ProseMirror-bm-placeholder::before{opacity:1}.ProseMirror[contenteditable=false] .ProseMirror-bm-placeholder::before{opacity:0}.ProseMirror-cm{display:flex;gap:.25rem}.ProseMirror-cm-drag,.ProseMirror-cm-plus{display:flex;justify-content:center;align-items:center;line-height:1;width:1.2rem;height:1.2rem;padding:.25rem 0;transition:background .3s;border-radius:4px}.ProseMirror-cm-drag.active,.ProseMirror-cm-drag:hover,.ProseMirror-cm-plus.active,.ProseMirror-cm-plus:hover{background:var(--tiptap-operator-hover-background)}.ProseMirror-cm-plus{cursor:pointer}.ProseMirror-cm-drag{cursor:grab}.ProseMirror-cm-drag:active,.ProseMirror-cm-drag:focus{cursor:grabbing}.ProseMirror-bm-button kbd,.ProseMirror-bm-button-popover kbd,.ProseMirror-fm-button kbd,.ProseMirror-fm-button-popover kbd{font-family:var(--tiptap-font-family-mono);display:inline-flex;align-items:center;justify-content:center;font-size:.5rem;font-weight:600;padding:.1rem .2rem;border-radius:4px;border-width:1px 1px 3px;border-style:solid;border-color:var(--tiptap-operator-hover-border);color:var(--tiptap-operator-color);background:var(--tiptap-operator-background)}@media print{.ProseMirror-bm,.ProseMirror-fm{display:none}}");

function icon(name) {
    return `<span class="ProseMirror-icon ProseMirror-icon-${name}"></span>`;
}

const Subscript = extensionSubscript.Subscript.extend({
    name: "subscript",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Subscript"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "textDirective" && node.name === "sub",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "textDirective",
                            name: "sub"
                        });
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("sub"),
                        shortcut: "Mod-,",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleSubscript().focus().run()
                    }
                ]
            }
        };
    }
});

const Superscript = extensionSuperscript.Superscript.extend({
    name: "superscript",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Superscript"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "textDirective" && node.name === "sup",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "textDirective",
                            name: "sup"
                        });
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("sup"),
                        shortcut: "Mod-.",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleSuperscript().focus().run()
                    }
                ]
            }
        };
    }
});

const STAR_INPUT_REGEX$1 = /(?:^|[^*])(\*\*(?!\s+\*\*)([^*]+)\*\*)$/;
const STAR_PASTE_REGEX$1 = /(?:^|[^*])(\*\*(?!\s+\*\*)([^*]+)\*\*(?!\s+\*\*))/g;
const UNDERSCORE_INPUT_REGEX$1 = /(?:^|[^_])(__(?!\s+__)([^_]+)__)$/;
const UNDERSCORE_PASTE_REGEX$1 = /(?:^|[^_])(__(?!\s+__)([^_]+)__(?!\s+__))/g;
const Bold = extensionBold.Bold.extend({
    name: "bold",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Bold"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "strong",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "strong"
                        });
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("bold"),
                        shortcut: "Mod-B",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleBold().focus().run()
                    }
                ]
            }
        };
    },
    addInputRules () {
        return [
            core.markInputRule({
                find: STAR_INPUT_REGEX$1,
                type: this.type
            }),
            core.markInputRule({
                find: UNDERSCORE_INPUT_REGEX$1,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            core.markPasteRule({
                find: STAR_PASTE_REGEX$1,
                type: this.type
            }),
            core.markPasteRule({
                find: UNDERSCORE_PASTE_REGEX$1,
                type: this.type
            })
        ];
    }
});

const INPUT_REGEX$2 = /(?:^|[^`])(`(?!\s+`)([^`]+)`)$/;
const PASTE_REGEX$2 = /(?:^|[^`])(`(?!\s+`)([^`]+)`(?!\s+`))/g;
const Code = extensionCode.Code.extend({
    name: "code",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Code"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "inlineCode",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.addText(node.value);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, _mark, node)=>{
                        state.addNode({
                            type: "inlineCode",
                            value: node.text ?? ""
                        });
                        return true;
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("code"),
                        shortcut: "Mod-E",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleCode().focus().run()
                    }
                ]
            }
        };
    },
    addInputRules () {
        return [
            core.markInputRule({
                find: INPUT_REGEX$2,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            core.markPasteRule({
                find: PASTE_REGEX$2,
                type: this.type
            })
        ];
    }
});

class FloatMenuView {
    static create(options) {
        return ()=>new FloatMenuView(options);
    }
    show() {
        this.popover.show();
    }
    hide() {
        this.popover.hide();
    }
    update(view, prevState) {
        const state = view.state;
        // skip render
        if (view.composing || prevState && prevState.doc.eq(state.doc) && prevState.selection.eq(state.selection)) {
            return;
        }
        // check should show
        if (!this.options.show?.({
            view: this,
            editor: this.editor
        })) {
            this.hide();
            return;
        }
        // on update
        if (this.options.onUpdate) {
            this.options.onUpdate({
                view: this,
                editor: this.editor,
                element: this.element,
                range: {
                    from: Math.min(...this.editor.state.selection.ranges.map((range)=>range.$from.pos)),
                    to: Math.max(...this.editor.state.selection.ranges.map((range)=>range.$to.pos))
                }
            });
        }
        // reset client rect
        this.popover.setProps({
            getReferenceClientRect: ()=>this._rect()
        });
        // switch to show
        this.show();
    }
    destroy() {
        if (this.options.onDestroy) {
            this.options.onDestroy({
                view: this,
                editor: this.editor,
                element: this.element,
                range: {
                    from: Math.min(...this.editor.state.selection.ranges.map((range)=>range.$from.pos)),
                    to: Math.max(...this.editor.state.selection.ranges.map((range)=>range.$to.pos))
                }
            });
        }
        this.popover.destroy();
        this.element.remove();
    }
    createInput(options) {
        const input = document.createElement("input");
        input.classList.add("ProseMirror-fm-input");
        if (options.id) {
            input.name = options.id;
        }
        if (options.name) {
            input.placeholder = options.name;
        }
        if (options.type) {
            input.type = options.type;
        }
        if (options.value) {
            input.value = options.value;
        }
        if (options.class) {
            for (const item of Array.isArray(options.class) ? options.class : [
                options.class
            ]){
                input.classList.add(item);
            }
        }
        if (options.style) {
            for (const item of Array.isArray(options.style) ? options.style : [
                options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    input.style[key] = val;
                }
            }
        }
        if (options.onEnter) {
            input.addEventListener("keydown", (e)=>{
                if (e.key === "Enter") {
                    options.onEnter?.(input.value, input);
                }
            });
        }
        if (options.onInput) {
            input.addEventListener("input", ()=>{
                options.onInput?.(input.value, input);
            });
        }
        if (options.onChange) {
            input.addEventListener("change", ()=>{
                options.onChange?.(input.value, input);
            });
        }
        if (options.onKey) {
            input.addEventListener("keydown", (e)=>{
                options.onKey?.({
                    key: e.key,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    metaKey: e.metaKey,
                    shiftKey: e.shiftKey
                }, input.value, input);
            });
        }
        if (options.onBoundary) {
            let pos = -1;
            input.addEventListener("mouseup", ()=>{
                if (input.selectionStart === null) {
                    return;
                }
                if (input.selectionStart !== input.selectionEnd) {
                    return;
                }
                pos = input.selectionStart;
            });
            input.addEventListener("keyup", (e)=>{
                if (input.selectionStart === null) {
                    return;
                }
                if (input.selectionStart !== input.selectionEnd) {
                    return;
                }
                if (options.onBoundary && e.key === "ArrowLeft" && pos === 0) {
                    options.onBoundary("left", input.value, input);
                }
                if (options.onBoundary && e.key === "ArrowRight" && (pos === -1 || pos === input.value.length)) {
                    options.onBoundary("right", input.value, input);
                }
                pos = input.selectionStart;
            });
        }
        return {
            input
        };
    }
    createButton(options) {
        const button = document.createElement("button");
        button.classList.add("ProseMirror-fm-button");
        if (options.id) {
            button.name = options.id;
        }
        if (options.view) {
            button.innerHTML = options.view;
        }
        if (options.class) {
            for (const item of Array.isArray(options.class) ? options.class : [
                options.class
            ]){
                button.classList.add(item);
            }
        }
        if (options.style) {
            for (const item of Array.isArray(options.style) ? options.style : [
                options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    button.style[key] = val;
                }
            }
        }
        if (options.onClick) {
            button.addEventListener("click", ()=>{
                options.onClick?.(button);
            });
        }
        const popover = document.createElement("div");
        popover.classList.add("ProseMirror-fm-button-popover");
        popover.innerHTML = options.name;
        if (options.shortcut) {
            popover.innerHTML += "&nbsp;·&nbsp;";
            options.shortcut.split("-").forEach((value, index)=>{
                if (index !== 0) {
                    const span = document.createElement("span");
                    span.innerHTML = "&nbsp;";
                    popover.append(span);
                }
                const kbd = document.createElement("kbd");
                if (navigator.userAgent.includes("Mac")) {
                    kbd.textContent = value.replace(/mod/i, "Cmd");
                } else {
                    kbd.textContent = value.replace(/mod/i, "Ctrl");
                }
                popover.append(kbd);
            });
        }
        const instance = tippy__default.default(button, {
            appendTo: ()=>document.body,
            content: popover,
            arrow: false,
            inertia: true,
            theme: "ProseMirror-dark",
            placement: "top",
            animation: "shift-away",
            duration: [
                200,
                150
            ]
        });
        return {
            button,
            popover,
            instance
        };
    }
    createUpload(options) {
        const file = document.createElement("input");
        file.type = "file";
        if (options.accept) {
            file.accept = options.accept;
        }
        file.addEventListener("change", ()=>{
            options.onUpload?.(file);
        });
        const button = this.createButton({
            ...options,
            onClick: ()=>file.click()
        });
        return {
            ...button,
            file
        };
    }
    createGroup(direction) {
        const element = document.createElement("div");
        element.classList.add("ProseMirror-fm-group");
        element.style.flexDirection = direction;
        return element;
    }
    createDivider() {
        const divider = document.createElement("span");
        divider.classList.add("ProseMirror-fm-divider");
        return {
            divider
        };
    }
    _rect() {
        if (this.options.rect) {
            return this.options.rect({
                view: this,
                editor: this.editor
            });
        }
        const { view, state } = this.editor;
        if (core.isNodeSelection(state.selection)) {
            const node = view.nodeDOM(state.selection.from);
            if (node) {
                return node.getBoundingClientRect();
            }
        }
        return core.posToDOMRect(view, state.selection.from, state.selection.to);
    }
    _element() {
        const element = document.createElement("div");
        element.classList.add("ProseMirror-fm");
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                element.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    element.style[key] = val;
                }
            }
        }
        if (this.options.onInit) {
            this.options.onInit({
                element,
                view: this,
                editor: this.editor,
                range: {
                    from: Math.min(...this.editor.state.selection.ranges.map((range)=>range.$from.pos)),
                    to: Math.max(...this.editor.state.selection.ranges.map((range)=>range.$to.pos))
                }
            });
        }
        return element;
    }
    _popover() {
        const options = {
            appendTo: ()=>document.body,
            getReferenceClientRect: null,
            content: this.element,
            arrow: false,
            interactive: true,
            theme: "ProseMirror",
            trigger: "manual",
            placement: "top",
            maxWidth: "none"
        };
        return tippy__default.default(document.body, this.options.tippy ? this.options.tippy({
            options,
            view: this,
            editor: this.editor
        }) : options);
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
        this.element = this._element();
        this.popover = this._popover();
    }
}

const Link = extensionLink.Link.extend({
    name: "link",
    addOptions () {
        return {
            ...this.parent?.(),
            openOnClick: false,
            dictionary: {
                name: "Link",
                inputLink: "Enter or paste link",
                openLink: "Open link",
                deleteLink: "Delete link"
            }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-k": ()=>{
                return this.editor.chain().toggleLink({
                    href: ""
                }).setTextSelection(this.editor.state.selection.to - 1).run();
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "link",
                    apply: (state, node, type)=>{
                        const url = node.url;
                        const title = node.title;
                        state.openMark(type, {
                            href: url,
                            title
                        });
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "link",
                            title: mark.attrs.title,
                            url: mark.attrs.href
                        });
                    }
                }
            },
            floatMenu: {
                hide: true,
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("link"),
                        shortcut: "Mod-K",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleLink({
                                href: ""
                            }).setTextSelection(editor.state.selection.to - 1).run()
                    }
                ]
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            ...extensionLink.Link.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.state.selection.empty && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector("input")?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const href = view.createInput({
                            name: this.options.dictionary.inputLink,
                            onEnter: (value)=>{
                                editor.chain().extendMarkRange(this.name).updateAttributes(this.name, {
                                    href: value
                                }).focus().run();
                            },
                            onBoundary: (value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    value
                                }).setTextSelection(editor.state.selection.from + (value === "left" ? -1 : 1)).focus().run();
                            }
                        });
                        const open = view.createButton({
                            name: this.options.dictionary.openLink,
                            view: icon("open"),
                            onClick: ()=>{
                                const attrs = editor.getAttributes(this.name);
                                if (attrs.href) {
                                    window.open(attrs.href, attrs.target);
                                }
                            }
                        });
                        const remove = view.createButton({
                            name: this.options.dictionary.deleteLink,
                            view: icon("remove"),
                            onClick: ()=>{
                                editor.chain().unsetLink().run();
                            }
                        });
                        element.append(href.input);
                        element.append(open.button);
                        element.append(remove.button);
                    },
                    onUpdate: ({ editor, element })=>{
                        const href = element.querySelector("input");
                        if (href) {
                            href.value = editor.getAttributes(this.name).href ?? "";
                        }
                    }
                })
            })
        ];
    }
});

const STAR_INPUT_REGEX = /(?:^|[^*])(\*(?!\s+\*)([^*]+)\*)$/;
const STAR_PASTE_REGEX = /(?:^|[^*])(\*(?!\s+\*)([^*]+)\*(?!\s+\*))/g;
const UNDERSCORE_INPUT_REGEX = /(?:^|[^_])(_(?!\s+_)([^_]+)_)$/;
const UNDERSCORE_PASTE_REGEX = /(?:^|[^_])(_(?!\s+_)([^_]+)_(?!\s+_))/g;
const Italic = extensionItalic.Italic.extend({
    name: "italic",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Italic"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "emphasis",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "emphasis"
                        });
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("italic"),
                        shortcut: "Mod-I",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleItalic().focus().run()
                    }
                ]
            }
        };
    },
    addInputRules () {
        return [
            core.markInputRule({
                find: STAR_INPUT_REGEX,
                type: this.type
            }),
            core.markInputRule({
                find: UNDERSCORE_INPUT_REGEX,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            core.markPasteRule({
                find: STAR_PASTE_REGEX,
                type: this.type
            }),
            core.markPasteRule({
                find: UNDERSCORE_PASTE_REGEX,
                type: this.type
            })
        ];
    }
});

const INPUT_REGEX$1 = /(?:^|[^~])(~~(?!\s+~~)([^~]+)~~)$/;
const PASTE_REGEX$1 = /(?:^|[^~])(~~(?!\s+~~)([^~]+)~~(?!\s+~~))/g;
const Strike = extensionStrike.Strike.extend({
    name: "strike",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Strike"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "delete",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "delete"
                        });
                    }
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("strike"),
                        shortcut: "Mod-Shift-I",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleStrike().focus().run()
                    }
                ]
            }
        };
    },
    addInputRules () {
        return [
            core.markInputRule({
                find: INPUT_REGEX$1,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            core.markPasteRule({
                find: PASTE_REGEX$1,
                type: this.type
            })
        ];
    }
});

function remarkDecoration(type, marker, flags) {
    const CHARS = marker.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
    const FLAGS = flags ? `([a-z0-9]{0,2})` : `()`;
    const LOCAL_REGEXP = new RegExp(`${CHARS}${FLAGS}${CHARS}\\s*([^${CHARS}]*[^ ])\\s*${CHARS}${CHARS}`);
    const GLOBAL_REGEXP = new RegExp(`${CHARS}${FLAGS}${CHARS}\\s*([^${CHARS}]*[^ ])\\s*${CHARS}${CHARS}`, "g");
    const visitor = (node, index, parent)=>{
        if (!parent) {
            return;
        }
        if (!LOCAL_REGEXP.test(node.value)) {
            return;
        }
        const children = [];
        const value = node.value;
        let tempValue = "";
        let prevMatchIndex = 0;
        let prevMatchLength = 0;
        const matches = Array.from(value.matchAll(GLOBAL_REGEXP));
        for(let index = 0; index < matches.length; index++){
            const match = matches[index];
            const mIndex = match.index ?? 0;
            const mLength = match[0].length; // match[0] is the matched input
            // could be a text part before each matched part
            const textPartIndex = index === 0 ? 0 : prevMatchIndex + prevMatchLength;
            prevMatchIndex = mIndex;
            prevMatchLength = mLength;
            // if there is a text part before
            if (mIndex > textPartIndex) {
                const textValue = value.substring(textPartIndex, mIndex);
                const textNode = unistBuilder.u("text", textValue);
                children.push(textNode);
            }
            children.push({
                type,
                data: {
                    flags: match[1] ?? ""
                },
                children: [
                    {
                        type: "text",
                        value: match[2] ?? ""
                    }
                ]
            });
            // control for the last text node if exists after the last match
            tempValue = value.slice(mIndex + mLength);
        }
        // if there is still text after the last match
        if (tempValue) {
            const textNode = unistBuilder.u("text", tempValue);
            children.push(textNode);
        }
        if (children.length) {
            parent.children.splice(index, 1, ...children);
        }
    };
    const handler = (node, _parent, state, info)=>{
        // @ts-expect-error
        const exit = state.enter(type);
        const tracker = state.createTracker(info);
        let value = tracker.move(marker + (flags && node.data?.flags ? node.data.flags : "") + marker);
        value += tracker.move(state.containerPhrasing(node, {
            before: value,
            after: value,
            ...tracker.current()
        }));
        value += tracker.move(marker + marker);
        exit();
        return value;
    };
    return function() {
        const data = this.data();
        (data.fromMarkdownExtensions ?? (data.fromMarkdownExtensions = [])).push({
            transforms: [
                (tree)=>{
                    unistUtilVisit.visit(tree, "text", visitor);
                }
            ]
        });
        (data.toMarkdownExtensions ?? (data.toMarkdownExtensions = [])).push({
            handlers: {
                [type]: handler
            }
        });
    };
}

const colors = [
    [
        "gray",
        "z"
    ],
    [
        "slate",
        "s"
    ],
    [
        "tomato",
        "e"
    ],
    [
        "red",
        "r"
    ],
    [
        "ruby",
        "f"
    ],
    [
        "crimson",
        "w"
    ],
    [
        "pink",
        "q"
    ],
    [
        "plum",
        "u"
    ],
    [
        "purple",
        "p"
    ],
    [
        "violet",
        "v"
    ],
    [
        "iris",
        "h"
    ],
    [
        "indigo",
        "i"
    ],
    [
        "blue",
        "b"
    ],
    [
        "cyan",
        "c"
    ],
    [
        "teal",
        "t"
    ],
    [
        "jade",
        "j"
    ],
    [
        "green",
        "g"
    ],
    [
        "bronze",
        "n"
    ],
    [
        "gold",
        "x"
    ],
    [
        "brown",
        "d"
    ],
    [
        "orange",
        "o"
    ],
    [
        "amber",
        "a"
    ],
    [
        "yellow",
        "y"
    ],
    [
        "lime",
        "l"
    ],
    [
        "mint",
        "m"
    ],
    [
        "sky",
        "k"
    ]
];

const INPUT_REGEX = /(?:^|[^=])(==(?!\s+==)([^=]+)==)$/;
const PASTE_REGEX = /(?:^|[^=])(==(?!\s+==)([^=]+)==(?!\s+==))/g;
const Highlight = extensionHighlight.Highlight.extend({
    name: "highlight",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Highlight",
                gray: "Gray",
                slate: "Slate",
                tomato: "Tomato",
                red: "Red",
                ruby: "Ruby",
                crimson: "Crimson",
                pink: "Pink",
                plum: "Plum",
                purple: "Purple",
                violet: "Violet",
                iris: "Iris",
                indigo: "Indigo",
                blue: "Blue",
                cyan: "Cyan",
                teal: "Teal",
                jade: "Jade",
                green: "Green",
                bronze: "Bronze",
                gold: "Gold",
                brown: "Brown",
                orange: "Orange",
                amber: "Amber",
                yellow: "Yellow",
                lime: "Lime",
                mint: "Mint",
                sky: "Sky"
            }
        };
    },
    addAttributes () {
        return {
            color: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-color"),
                renderHTML: (a)=>a.color ? {
                        "data-color": a.color
                    } : {}
            }
        };
    },
    addStorage () {
        const mapping1 = new Map();
        const mapping2 = new Map();
        for (const [c, k] of colors){
            mapping1.set(k, c);
            mapping1.set(`b${k}`, `b-${c}`);
            mapping2.set(c, k);
            mapping2.set(`b-${c}`, `b${k}`);
        }
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "highlight",
                    apply: (state, node, type)=>{
                        const value = node.data?.flags ?? "";
                        state.openMark(type, {
                            color: mapping1.get(value)
                        });
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        const value = mark.attrs.color ?? "";
                        state.withMark(mark, {
                            type: "highlight",
                            data: {
                                flags: mapping2.get(value)
                            }
                        });
                    }
                },
                hooks: {
                    beforeInit: (processor)=>processor.use(remarkDecoration("highlight", "=", true))
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("highlight"),
                        shortcut: "Mod-Shift-H",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleHighlight().focus().run(),
                        onInit: ({ editor, element })=>{
                            const container = document.createElement("div");
                            container.classList.add("ProseMirror-fm-color-picker");
                            for (const color of [
                                ...colors.map((i)=>i[0]),
                                ...colors.map((i)=>`b-${i[0]}`)
                            ]){
                                const button = document.createElement("button");
                                button.textContent = "A";
                                button.setAttribute("data-color", color);
                                const popover = document.createElement("span");
                                popover.classList.add("ProseMirror-fm-button-popover");
                                if (color.startsWith("b-")) {
                                    // @ts-expect-error
                                    popover.textContent = `Background ${this.options.dictionary[color.replace("b-", "")]}`;
                                } else {
                                    // @ts-expect-error
                                    popover.textContent = this.options.dictionary[color];
                                }
                                tippy__default.default(button, {
                                    appendTo: ()=>document.body,
                                    content: popover,
                                    arrow: false,
                                    theme: "ProseMirror-dark",
                                    animation: "shift-away",
                                    duration: [
                                        200,
                                        150
                                    ]
                                });
                                button.addEventListener("click", (e)=>{
                                    e.stopPropagation();
                                    editor.chain().toggleHighlight({
                                        color
                                    }).focus().run();
                                });
                                container.append(button);
                            }
                            tippy__default.default(element, {
                                appendTo: ()=>element,
                                content: container,
                                arrow: false,
                                interactive: true,
                                theme: "ProseMirror",
                                placement: "bottom",
                                maxWidth: "none",
                                animation: "shift-away",
                                duration: [
                                    200,
                                    150
                                ]
                            });
                        }
                    }
                ]
            }
        };
    },
    addInputRules () {
        return [
            core.markInputRule({
                find: INPUT_REGEX,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            core.markPasteRule({
                find: PASTE_REGEX,
                type: this.type
            })
        ];
    }
});

const Underline = extensionUnderline.Underline.extend({
    name: "underline",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Underline"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "underline",
                    apply: (state, node, type)=>{
                        state.openMark(type);
                        state.next(node.children);
                        state.closeMark(type);
                    }
                },
                serializer: {
                    match: (mark)=>mark.type.name === this.name,
                    apply: (state, mark)=>{
                        state.withMark(mark, {
                            type: "underline"
                        });
                    }
                },
                hooks: {
                    beforeInit: (processor)=>processor.use(remarkDecoration("underline", "+"))
                }
            },
            floatMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        view: icon("underline"),
                        shortcut: "Mod-U",
                        active: ({ editor })=>editor.isActive(this.name),
                        action: ({ editor })=>editor.chain().toggleUnderline().focus().run()
                    }
                ]
            }
        };
    }
});

const Text = extensionText.Text.extend({
    name: "text",
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: ({ type })=>type === "text",
                    apply: (state, node)=>{
                        state.addText(node.value);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "text",
                            value: node.text
                        });
                    }
                }
            }
        };
    }
});

const Document = extensionDocument.Document.extend({
    name: "doc",
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "root",
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "root"
                        });
                        state.next(node.content);
                    }
                }
            }
        };
    }
});

const Heading = extensionHeading.Heading.extend({
    name: "heading",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Heading"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "heading",
                    apply: (state, node, type)=>{
                        const depth = node.depth;
                        state.openNode(type, {
                            level: depth
                        });
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "heading",
                            depth: node.attrs.level
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ].map((level)=>({
                        id: `${this.name}${level}`,
                        name: `${this.options.dictionary.name} ${level}`,
                        icon: icon(`h${level}`),
                        shortcut: `Mod-Alt-${level}`,
                        keywords: `heading${level},title${level},bt${level}`,
                        action: (editor)=>editor.chain().toggleHeading({
                                level
                            }).focus().run()
                    }))
            }
        };
    }
});

const Paragraph = extensionParagraph.Paragraph.extend({
    name: "paragraph",
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "paragraph",
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        if (node.children) {
                            state.next(node.children);
                        } else {
                            state.addText(node.value);
                        }
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "paragraph"
                        });
                        if (node.type.name === "text") {
                            state.addNode({
                                type: "text",
                                value: node.text
                            });
                        } else {
                            state.next(node.content);
                        }
                        state.closeNode();
                    }
                }
            }
        };
    }
});

const Blockquote = extensionBlockquote.Blockquote.extend({
    name: "blockquote",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Blockquote"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "blockquote",
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "blockquote"
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("blockquote"),
                        shortcut: "Mod-Shift-B",
                        keywords: "blockquote,bq,yyk",
                        action: (editor)=>editor.chain().toggleBlockquote().focus().run()
                    }
                ]
            }
        };
    }
});

const HardBreak = extensionHardBreak.HardBreak.extend({
    name: "hardBreak",
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "break",
                    apply: (state, _node, type)=>{
                        state.addNode(type);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state)=>{
                        state.addNode({
                            type: "break"
                        });
                    }
                }
            }
        };
    }
});

function isRectSelected(selection, rect) {
    if (isCellSelection(selection)) {
        const map = tables.TableMap.get(selection.$anchorCell.node(-1));
        const start = selection.$anchorCell.start(-1);
        const cells = map.cellsInRect(rect);
        const selectedCells = map.cellsInRect(map.rectBetween(selection.$anchorCell.pos - start, selection.$headCell.pos - start));
        for(let i = 0, count = cells.length; i < count; i++){
            if (!selectedCells.includes(cells[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
function isCellSelection(selection) {
    return selection instanceof tables.CellSelection;
}
function isColumnSelected(selection, index) {
    if (isCellSelection(selection)) {
        const map = tables.TableMap.get(selection.$anchorCell.node(-1));
        return isRectSelected(selection, {
            left: index,
            right: index + 1,
            top: 0,
            bottom: map.height
        });
    }
    return false;
}
function isRowSelected(selection, index) {
    if (isCellSelection(selection)) {
        const map = tables.TableMap.get(selection.$anchorCell.node(-1));
        return isRectSelected(selection, {
            left: 0,
            right: map.width,
            top: index,
            bottom: index + 1
        });
    }
    return false;
}
function isTableSelected(selection) {
    if (isCellSelection(selection)) {
        const map = tables.TableMap.get(selection.$anchorCell.node(-1));
        return isRectSelected(selection, {
            left: 0,
            right: map.width,
            top: 0,
            bottom: map.height
        });
    }
    return false;
}
function findTable(selection) {
    return core.findParentNode((node)=>node.type.spec.tableRole && node.type.spec.tableRole === "table")(selection);
}
function getCellsInColumn(selection, index) {
    const table = findTable(selection);
    if (table) {
        const map = tables.TableMap.get(table.node);
        const indexes = Array.isArray(index) ? index : Array.from([
            index
        ]);
        return indexes.reduce((acc, index)=>{
            if (index >= 0 && index <= map.width - 1) {
                const cells = map.cellsInRect({
                    left: index,
                    right: index + 1,
                    top: 0,
                    bottom: map.height
                });
                return acc.concat(cells.map((nodePos)=>{
                    const node = table.node.nodeAt(nodePos);
                    const pos = nodePos + table.start;
                    return {
                        pos,
                        start: pos + 1,
                        node
                    };
                }));
            }
            return acc;
        }, []);
    }
}
function getCellsInRow(selection, index) {
    const table = findTable(selection);
    if (table) {
        const map = tables.TableMap.get(table.node);
        const indexes = Array.isArray(index) ? index : Array.from([
            index
        ]);
        return indexes.reduce((acc, index)=>{
            if (index >= 0 && index <= map.height - 1) {
                const cells = map.cellsInRect({
                    left: 0,
                    right: map.width,
                    top: index,
                    bottom: index + 1
                });
                return acc.concat(cells.map((nodePos)=>{
                    const node = table.node.nodeAt(nodePos);
                    const pos = nodePos + table.start;
                    return {
                        pos,
                        start: pos + 1,
                        node
                    };
                }));
            }
            return acc;
        }, []);
    }
}
function getCellInTable(selection, row, col) {
    const table = findTable(selection);
    if (table) {
        const map = tables.TableMap.get(table.node);
        const cells = map.cellsInRect({
            left: row,
            right: row + 1,
            top: col,
            bottom: col + 1
        });
        if (cells.length) {
            const node = table.node.nodeAt(cells[0]);
            const pos = table.start + cells[0];
            return {
                pos,
                node,
                start: pos + 1
            };
        }
    }
    return undefined;
}
function selectRowOrColumn(type, tr, index) {
    const table = findTable(tr.selection);
    const isRowSelection = type === "row";
    if (table) {
        const map = tables.TableMap.get(table.node);
        // Check if the index is valid
        if (index >= 0 && index < (isRowSelection ? map.height : map.width)) {
            const left = isRowSelection ? 0 : index;
            const top = isRowSelection ? index : 0;
            const right = isRowSelection ? map.width : index + 1;
            const bottom = isRowSelection ? index + 1 : map.height;
            const cellsInFirstRow = map.cellsInRect({
                left,
                top,
                right: isRowSelection ? right : left + 1,
                bottom: isRowSelection ? top + 1 : bottom
            });
            const cellsInLastRow = bottom - top === 1 ? cellsInFirstRow : map.cellsInRect({
                left: isRowSelection ? left : right - 1,
                top: isRowSelection ? bottom - 1 : top,
                right,
                bottom
            });
            const head = table.start + cellsInFirstRow[0];
            const anchor = table.start + cellsInLastRow[cellsInLastRow.length - 1];
            const $head = tr.doc.resolve(head);
            const $anchor = tr.doc.resolve(anchor);
            return tr.setSelection(new tables.CellSelection($anchor, $head));
        }
    }
    return tr;
}
function selectRow(tr, index) {
    return selectRowOrColumn("row", tr, index);
}
function selectColumn(tr, index) {
    return selectRowOrColumn("column", tr, index);
}
function selectTable(tr) {
    const table = findTable(tr.selection);
    if (table) {
        const { map } = tables.TableMap.get(table.node);
        if (map && map.length) {
            const head = table.start + map[0];
            const anchor = table.start + map[map.length - 1];
            const $head = tr.doc.resolve(head);
            const $anchor = tr.doc.resolve(anchor);
            return tr.setSelection(new tables.CellSelection($anchor, $head));
        }
    }
    return tr;
}
function parseAttributes(value) {
    const regex = /([^=\s]+)="?([^"]+)"?/g;
    const attrs = {};
    let match;
    // eslint-disable-next-line no-cond-assign
    while(match = regex.exec(value)){
        attrs[match[1]] = match[2];
    }
    return attrs;
}
function setAttributes(editor, getPos, attrs) {
    if (editor.isEditable && typeof getPos === "function") {
        editor.view.dispatch(editor.view.state.tr.setNodeMarkup(getPos(), undefined, attrs));
    }
}

const CodeBlock = extensionCodeBlockLowlight.CodeBlockLowlight.extend({
    name: "codeBlock",
    addOptions () {
        return {
            ...this.parent?.(),
            lowlight: lowlight.createLowlight(lowlight.common),
            dictionary: {
                "name": "Code Block",
                "copy": "Copy",
                "copied": "Copied!",
                "arduino": "Arduino",
                "bash": "Bash",
                "c": "C",
                "cpp": "C++",
                "csharp": "C#",
                "css": "CSS",
                "diff": "Diff",
                "go": "Go",
                "graphql": "GraphQL",
                "ini": "INI",
                "java": "Java",
                "javascript": "JavaScript",
                "json": "JSON",
                "kotlin": "Kotlin",
                "less": "Less",
                "lua": "Lua",
                "makefile": "Makefile",
                "markdown": "Markdown",
                "objectivec": "Objective-C",
                "perl": "Perl",
                "php": "PHP",
                "php-template": "PHP Template",
                "plaintext": "Text",
                "python": "Python",
                "python-repl": "Python Repl",
                "r": "R",
                "ruby": "Ruby",
                "rust": "Rust",
                "scss": "Scss",
                "shell": "Shell",
                "sql": "SQL",
                "swift": "Swift",
                "typescript": "TypeScript",
                "vbnet": "Visual Basic .NET",
                "wasm": "WebAssembly",
                "xml": "XML",
                "yaml": "YAML"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "code",
                    apply: (state, node, type)=>{
                        const language = node.lang;
                        const value = node.value;
                        state.openNode(type, {
                            language
                        });
                        state.addText(value);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "code",
                            value: node.content.firstChild?.text || "",
                            lang: node.attrs.language
                        });
                    }
                }
            },
            floatMenu: {
                hide: true
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("code"),
                        shortcut: "Mod-Alt-C",
                        keywords: "codeblock,cb,dmk,",
                        action: (editor)=>editor.chain().toggleCodeBlock().focus().run()
                    }
                ]
            }
        };
    },
    addAttributes () {
        return {
            language: {
                default: "plaintext"
            }
        };
    },
    addNodeView () {
        return ({ node, editor, getPos })=>{
            const parent = document.createElement("pre");
            const toolbar = document.createElement("div");
            const content = document.createElement("code");
            for (const [key, value] of Object.entries(core.mergeAttributes(this.options.HTMLAttributes))){
                if (value !== undefined && value !== null) {
                    parent.setAttribute(key, value);
                    content.setAttribute(key, value);
                }
            }
            parent.setAttribute("data-type", this.name);
            toolbar.setAttribute("data-type", `${this.name}Toolbar`);
            content.setAttribute("data-type", `${this.name}Content`);
            // language list
            const language = document.createElement("select");
            for (const name of this.options.lowlight.listLanguages()){
                const option = document.createElement("option");
                option.value = name;
                option.textContent = this.options.dictionary[name] ?? name;
                language.append(option);
            }
            language.value = node.attrs.language;
            language.addEventListener("change", ()=>{
                if (!editor.isEditable) {
                    language.value = node.attrs.language;
                } else if (typeof getPos === "function") {
                    setAttributes(editor, getPos, {
                        ...node.attrs,
                        language: language.value
                    });
                }
            });
            // copy button
            const copy = document.createElement("button");
            copy.textContent = this.options.dictionary.copy;
            const copied = document.createElement("span");
            copied.textContent = this.options.dictionary.copied;
            copied.classList.add("ProseMirror-fm-button-popover");
            const instance = tippy__default.default(copy, {
                appendTo: ()=>document.body,
                content: copied,
                arrow: false,
                theme: "ProseMirror-dark",
                animation: "shift-away",
                duration: [
                    200,
                    150
                ],
                trigger: "manual"
            });
            copy.addEventListener("click", (e)=>{
                e.stopPropagation();
                navigator.clipboard.writeText(node.content.firstChild?.text || "").then(()=>{
                    instance.show();
                    setTimeout(()=>instance.hide(), 1000);
                });
            });
            toolbar.contentEditable = "false";
            toolbar.append(language);
            toolbar.append(copy);
            parent.append(toolbar);
            parent.append(content);
            return {
                dom: parent,
                contentDOM: content,
                update: (updatedNode)=>{
                    if (updatedNode.type !== this.type) {
                        return false;
                    }
                    if (language.value !== updatedNode.attrs.language) {
                        language.value = updatedNode.attrs.language;
                    }
                    return true;
                }
            };
        };
    },
    addKeyboardShortcuts () {
        return {
            Tab: ({ editor })=>{
                if (editor.isActive(this.name)) {
                    return editor.chain().insertContent("  ").focus().run();
                }
                return false;
            },
            Backspace: ({ editor })=>{
                const state = editor.state;
                const selection = state.selection;
                if (selection.$anchor.parent.type.name !== this.name) {
                    return false;
                }
                if (selection.$anchor.parentOffset !== 0) {
                    return false;
                }
                return editor.chain().toggleNode(this.name, "paragraph").focus().run();
            }
        };
    }
});

const HorizontalRule = extensionHorizontalRule.HorizontalRule.extend({
    name: "horizontalRule",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Horizontal Rule"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "thematicBreak",
                    apply: (state, _node, type)=>{
                        state.addNode(type);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state)=>{
                        state.addNode({
                            type: "thematicBreak"
                        });
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("hr"),
                        keywords: "horizontalrule,hr,hx,fgx",
                        action: (editor)=>editor.chain().setHorizontalRule().focus().run()
                    }
                ]
            }
        };
    }
});

const BulletList = extensionBulletList.BulletList.extend({
    name: "bulletList",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Bullet List"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "list" && !node.ordered && !node.children?.find((item)=>item.checked !== null),
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "list",
                            ordered: false
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("ul"),
                        shortcut: "Mod-Shift-8",
                        keywords: "bulletlist,bl,ul,wxlb",
                        action: (editor)=>editor.chain().toggleBulletList().focus().run()
                    }
                ]
            }
        };
    }
});

const OrderedList = extensionOrderedList.OrderedList.extend({
    name: "orderedList",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Ordered List"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "list" && !!node.ordered,
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "list",
                            ordered: true,
                            start: 1
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("ol"),
                        shortcut: "Mod-Shift-7",
                        keywords: "orderedlist,ol,yxlb",
                        action: (editor)=>editor.chain().toggleOrderedList().focus().run()
                    }
                ]
            }
        };
    }
});

const ListItem = extensionListItem.ListItem.extend({
    name: "listItem",
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "listItem" && node.checked === null,
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "listItem"
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            }
        };
    }
});

const TaskList = extensionTaskList.TaskList.extend({
    name: "taskList",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Task List"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "list" && !node.ordered && node.children?.find((item)=>item.checked !== null),
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "list",
                            ordered: false
                        }).next(node.content).closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("tl"),
                        shortcut: "Mod-Shift-9",
                        keywords: "tasklist,tl,rwlb",
                        action: (editor)=>editor.chain().toggleTaskList().focus().run()
                    }
                ]
            }
        };
    }
});

const TaskItem = extensionTaskItem.TaskItem.extend({
    name: "taskItem",
    addOptions () {
        return {
            ...this.parent?.(),
            nested: true
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "listItem" && node.checked !== null,
                    apply: (state, node, type)=>{
                        state.openNode(type, {
                            checked: node.checked
                        });
                        state.next(node.children);
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "listItem",
                            checked: node.attrs.checked
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            }
        };
    }
});

const Details = core.Node.create({
    name: "details",
    group: "block",
    content: "detailsSummary detailsContent",
    defining: true,
    isolating: true,
    allowGapCursor: false,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Details"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "containerDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        state.openNode(type, node.attributes).next(node.children).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "containerDirective",
                            name: this.name,
                            attributes: node.attrs
                        }).next(node.content).closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("details"),
                        shortcut: "Mod-Alt-D",
                        keywords: "details,zdnl",
                        action: (editor)=>editor.chain().toggleDetails().focus().run()
                    }
                ]
            }
        };
    },
    addAttributes () {
        return {
            open: {
                default: false,
                parseHTML: (e)=>e.getAttribute("open"),
                renderHTML: (a)=>a.open ? {
                        open: ""
                    } : {}
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "details"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "details",
            core.mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    addNodeView () {
        return ({ node, editor, getPos })=>{
            const dom = document.createElement("div");
            const btn = document.createElement("button");
            const ico = document.createElement("div");
            const div = document.createElement("div");
            for (const [key, value] of Object.entries(core.mergeAttributes(this.options.HTMLAttributes))){
                if (value !== undefined && value !== null) {
                    dom.setAttribute(key, value);
                }
            }
            dom.setAttribute("data-type", this.name);
            btn.setAttribute("data-type", `${this.name}Button`);
            div.setAttribute("data-type", `${this.name}Container`);
            if (node.attrs.open) {
                dom.setAttribute("open", "true");
            } else {
                dom.removeAttribute("open");
            }
            ico.innerHTML = icon("right-line");
            btn.addEventListener("click", ()=>{
                const open = !dom.hasAttribute("open");
                setAttributes(editor, getPos, {
                    ...node.attrs,
                    open
                });
            });
            btn.append(ico);
            dom.append(btn);
            dom.append(div);
            return {
                dom,
                contentDOM: div,
                update: (updatedNode)=>{
                    if (updatedNode.type !== this.type) {
                        return false;
                    }
                    if (updatedNode.attrs.open) {
                        dom.setAttribute("open", "true");
                    } else {
                        dom.removeAttribute("open");
                    }
                    return true;
                }
            };
        };
    },
    addCommands () {
        return {
            setDetails: ()=>{
                return ({ state, chain })=>{
                    const range = state.selection.$from.blockRange(state.selection.$to);
                    if (!range) {
                        return false;
                    }
                    const slice = state.doc.slice(range.start, range.end);
                    if (!state.schema.nodes.detailsContent.contentMatch.matchFragment(slice.content)) {
                        return false;
                    }
                    return chain().insertContentAt({
                        from: range.start,
                        to: range.end
                    }, {
                        type: this.name,
                        attrs: {
                            open: true
                        },
                        content: [
                            {
                                type: "detailsSummary"
                            },
                            {
                                type: "detailsContent",
                                content: slice.toJSON()?.content ?? []
                            }
                        ]
                    }).setTextSelection(range.start + 2).run();
                };
            },
            unsetDetails: ()=>{
                return ({ state, chain })=>{
                    const parent = core.findParentNode((node)=>node.type === this.type)(state.selection);
                    if (!parent) {
                        return false;
                    }
                    const summary = core.findChildren(parent.node, (node)=>node.type.name === "detailsSummary");
                    const content = core.findChildren(parent.node, (node)=>node.type.name === "detailsContent");
                    if (!summary.length || !content.length) {
                        return false;
                    }
                    const range = {
                        from: parent.pos,
                        to: parent.pos + parent.node.nodeSize
                    };
                    const defaultType = state.doc.resolve(range.from).parent.type.contentMatch.defaultType;
                    return chain().insertContentAt(range, [
                        defaultType?.create(null, summary[0].node.content).toJSON(),
                        ...content[0].node.content.toJSON() ?? []
                    ]).setTextSelection(range.from + 1).run();
                };
            },
            toggleDetails: ()=>{
                return ({ state, chain })=>{
                    const node = core.findParentNode((node)=>node.type === this.type)(state.selection);
                    if (node) {
                        return chain().unsetDetails().run();
                    } else {
                        return chain().setDetails().run();
                    }
                };
            }
        };
    },
    addInputRules () {
        return [
            core.wrappingInputRule({
                find: /^:::details\s$/,
                type: this.type
            })
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-d": ()=>this.editor.commands.toggleDetails()
        };
    }
});

const DetailsContent = core.Node.create({
    name: "detailsContent",
    group: "block",
    content: "block*",
    defining: true,
    selectable: false,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Details Content"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "containerDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        state.openNode(type, node.attributes).next(node.children).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "containerDirective",
                            name: this.name,
                            attributes: node.attrs
                        }).next(node.content).closeNode();
                    }
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `div[data-type="${this.name}"]`
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "div",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    addKeyboardShortcuts () {
        return {
            Enter: ({ editor })=>{
                const view = editor.view;
                const state$1 = editor.state;
                const selection = state$1.selection;
                const findNode = core.findParentNode((node)=>node.type.name === this.name)(selection);
                if (!selection.empty || !findNode || !findNode.node.childCount) {
                    return false;
                }
                const childCount = findNode.node.childCount;
                if (!(childCount === selection.$from.index(findNode.depth) + 1)) {
                    return false;
                }
                const fillNode = findNode.node.type.contentMatch.defaultType?.createAndFill();
                if (!fillNode) {
                    return false;
                }
                const lastNode = findNode.node.child(childCount - 1);
                if (!lastNode.eq(fillNode)) {
                    return false;
                }
                const rootNode = selection.$from.node(-3);
                if (!rootNode) {
                    return false;
                }
                const indexAfter = selection.$from.indexAfter(-3);
                const nodeType = core.defaultBlockAt(rootNode.contentMatchAt(indexAfter));
                if (!nodeType || !rootNode.canReplaceWith(indexAfter, indexAfter, nodeType)) {
                    return false;
                }
                const defaultNode = nodeType.createAndFill();
                if (!defaultNode) {
                    return false;
                }
                const tr = state$1.tr;
                const after = selection.$from.after(-2);
                tr.replaceWith(after, after, defaultNode);
                tr.setSelection(state.Selection.near(tr.doc.resolve(after), 1));
                const from = state$1.doc.resolve(findNode.pos + 1).posAtIndex(childCount - 1, findNode.depth);
                const to = from + lastNode.nodeSize;
                tr.delete(from, to);
                tr.scrollIntoView();
                view.dispatch(tr);
                return true;
            }
        };
    }
});

const DetailsSummary = core.Node.create({
    name: "detailsSummary",
    group: "block",
    content: "inline*",
    defining: true,
    isolating: true,
    selectable: false,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Details Summary"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "containerDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        const nodes = [];
                        for (const item of node.children ?? []){
                            if (item.type === "paragraph") {
                                if (item.children) {
                                    nodes.push(...item.children);
                                }
                            } else if (item) {
                                nodes.push(item);
                            }
                        }
                        state.openNode(type, node.attributes).next(nodes).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "containerDirective",
                            name: this.name,
                            attributes: node.attrs
                        }).next(node.content).closeNode();
                    }
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "summary"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "summary",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ({ editor })=>{
                const state = editor.state;
                const selection = state.selection;
                if (selection.$anchor.parent.type.name !== this.name) {
                    return false;
                }
                if (selection.$anchor.parentOffset !== 0) {
                    return false;
                }
                return editor.chain().unsetDetails().focus().run();
            },
            Enter: ({ editor })=>{
                const view = editor.view;
                const state$1 = editor.state;
                const head = state$1.selection.$head;
                if (head.parent.type.name !== this.name) {
                    return false;
                }
                // @ts-expect-error
                const hasOffset = view.domAtPos(head.after() + 1).node.offsetParent !== null;
                const findNode = hasOffset ? state$1.doc.nodeAt(head.after()) : head.node(-2);
                if (!findNode) {
                    return false;
                }
                const indexAfter = hasOffset ? 0 : head.indexAfter(-1);
                const nodeType = core.defaultBlockAt(findNode.contentMatchAt(indexAfter));
                if (!nodeType || !findNode.canReplaceWith(indexAfter, indexAfter, nodeType)) {
                    return false;
                }
                const defaultNode = nodeType.createAndFill();
                if (!defaultNode) {
                    return false;
                }
                const tr = state$1.tr;
                const after = hasOffset ? head.after() + 1 : head.after(-1);
                tr.replaceWith(after, after, defaultNode);
                tr.setSelection(state.Selection.near(tr.doc.resolve(after), 1));
                tr.scrollIntoView();
                view.dispatch(tr);
                return true;
            }
        };
    }
});

// TODO: drag row or column
// TODO: serialize custom properties to markdown
const Table = extensionTable.Table.extend({
    name: "table",
    addOptions () {
        return {
            ...this.parent?.(),
            resizable: true,
            dictionary: {
                name: "Table",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment",
                toggleHeaderRow: "Toggle header row",
                toggleHeaderCol: "Toggle header column",
                deleteTable: "Delete table"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "table",
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        if (node.children) {
                            state.next(node.children.map((a, i)=>({
                                    ...a,
                                    align: node.align[i],
                                    isHeader: i === 0
                                })));
                        }
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        const firstLine = node.content.firstChild?.content;
                        if (!firstLine) {
                            return;
                        }
                        const align = [];
                        firstLine.forEach((cell)=>align.push(cell.attrs.alignment));
                        state.openNode({
                            type: "table",
                            align
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            floatMenu: {
                hide: true
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("table"),
                        keywords: "table,bg",
                        action: (editor)=>editor.chain().insertTable({
                                rows: 3,
                                cols: 3
                            }).focus().run()
                    }
                ]
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            ...extensionTable.Table.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>{
                        if (!editor.isEditable) {
                            return false;
                        }
                        return isTableSelected(editor.state.selection);
                    },
                    rect: ({ editor })=>{
                        const { view, state } = editor;
                        const table = findTable(state.selection);
                        if (table) {
                            const node = view.nodeDOM(table.pos);
                            const grip = node?.querySelector(".ProseMirror-table-grip-table");
                            if (grip) {
                                return grip.getBoundingClientRect();
                            }
                        }
                        return core.posToDOMRect(view, state.selection.from, state.selection.to);
                    },
                    onInit: ({ view, editor, element })=>{
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "left").run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "center").run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "right").run()
                        });
                        const toggleHeaderRow = view.createButton({
                            name: this.options.dictionary.toggleHeaderRow,
                            view: icon("header-row"),
                            onClick: ()=>editor.chain().toggleHeaderRow().run()
                        });
                        const toggleHeaderCol = view.createButton({
                            name: this.options.dictionary.toggleHeaderCol,
                            view: icon("header-col"),
                            onClick: ()=>editor.chain().toggleHeaderColumn().run()
                        });
                        const deleteTable = view.createButton({
                            name: this.options.dictionary.deleteTable,
                            view: icon("remove"),
                            onClick: ()=>editor.chain().deleteTable().run()
                        });
                        element.append(alignLeft.button);
                        element.append(alignCenter.button);
                        element.append(alignRight.button);
                        element.append(toggleHeaderRow.button);
                        element.append(toggleHeaderCol.button);
                        element.append(deleteTable.button);
                    }
                }),
                props: {
                    decorations: (state)=>{
                        const { doc, selection } = state;
                        const decorations = [];
                        if (this.editor.isEditable) {
                            const cell = getCellInTable(selection, 0, 0);
                            if (cell) {
                                decorations.push(view.Decoration.widget(cell.pos + 1, ()=>{
                                    const grip = document.createElement("div");
                                    grip.classList.add("ProseMirror-table-grip-table");
                                    return grip;
                                }));
                            }
                        }
                        return view.DecorationSet.create(doc, decorations);
                    }
                }
            })
        ];
    }
});

const TableRow = extensionTableRow.TableRow.extend({
    name: "tableRow",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                insertTop: "Insert column on the top",
                insertBottom: "Insert column on the bottom",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment",
                deleteRow: "Delete row"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "tableRow",
                    apply: (state, node, type)=>{
                        state.openNode(type);
                        if (node.children) {
                            state.next(node.children.map((a, i)=>({
                                    ...a,
                                    align: node.align?.[i],
                                    isHeader: node.isHeader
                                })));
                        }
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "tableRow"
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            clickMenu: {
                hide: true
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            ...extensionTableRow.TableRow.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>{
                        if (!editor.isEditable) {
                            return false;
                        }
                        const selection = editor.state.selection;
                        if (isTableSelected(selection)) {
                            return false;
                        }
                        const cells = getCellsInColumn(selection, 0);
                        return !!cells?.some((_cell, index)=>isRowSelected(selection, index));
                    },
                    rect: ({ editor })=>{
                        const { view, state } = editor;
                        if (isCellSelection(state.selection)) {
                            const cell = view.nodeDOM(state.selection.$headCell.pos);
                            if (cell) {
                                const grip = cell.querySelector(".ProseMirror-table-grip-row");
                                if (grip) {
                                    return grip.getBoundingClientRect();
                                } else {
                                    return cell.getBoundingClientRect();
                                }
                            }
                        }
                        return core.posToDOMRect(view, state.selection.from, state.selection.to);
                    },
                    onInit: ({ view, editor, element })=>{
                        const insertTop = view.createButton({
                            id: "insert-top",
                            name: this.options.dictionary.insertTop,
                            view: icon("up"),
                            onClick: ()=>editor.chain().addRowBefore().run()
                        });
                        const insertBottom = view.createButton({
                            id: "insert-bottom",
                            name: this.options.dictionary.insertBottom,
                            view: icon("down"),
                            onClick: ()=>editor.chain().addRowAfter().run()
                        });
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "left").run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "center").run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "right").run()
                        });
                        const deleteRow = view.createButton({
                            name: this.options.dictionary.deleteRow,
                            view: icon("remove"),
                            onClick: ()=>editor.chain().deleteRow().run()
                        });
                        element.append(insertTop.button);
                        element.append(insertBottom.button);
                        element.append(alignLeft.button);
                        element.append(alignCenter.button);
                        element.append(alignRight.button);
                        element.append(deleteRow.button);
                    }
                }),
                props: {
                    decorations: (state)=>{
                        const { tr, doc, selection } = state;
                        const decorations = [];
                        if (this.editor.isEditable) {
                            const cells = getCellsInColumn(selection, 0);
                            if (cells) {
                                for(let index = 0; index < cells.length; index++){
                                    decorations.push(view.Decoration.widget(cells[index].pos + 1, ()=>{
                                        const grip = document.createElement("div");
                                        grip.classList.add("ProseMirror-table-grip-row");
                                        if (isRowSelected(selection, index)) {
                                            grip.classList.add("active");
                                        }
                                        if (index === 0) {
                                            grip.classList.add("first");
                                        }
                                        if (index === cells.length - 1) {
                                            grip.classList.add("last");
                                        }
                                        const drag = document.createElement("div");
                                        drag.classList.add("ProseMirror-table-grip-drag");
                                        drag.innerHTML = icon("drag");
                                        drag.addEventListener("mousedown", (event)=>{
                                            event.preventDefault();
                                            event.stopImmediatePropagation();
                                            this.editor.view.dispatch(selectRow(tr, index));
                                        });
                                        grip.append(drag);
                                        return grip;
                                    }));
                                }
                            }
                        }
                        return view.DecorationSet.create(doc, decorations);
                    }
                }
            })
        ];
    }
});

const TableCell = extensionTableCell.TableCell.extend({
    name: "tableCell",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                mergeCells: "Merge cells",
                splitCells: "Split cells",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment"
            }
        };
    },
    addAttributes () {
        return {
            ...this.parent?.(),
            align: {
                default: null
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "tableCell" && !node.isHeader,
                    apply: (state, node, type)=>{
                        state.openNode(type, {
                            alignment: node.align
                        });
                        state.openNode(state.editor.schema.nodes.paragraph);
                        state.next(node.children);
                        state.closeNode();
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "tableCell"
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            clickMenu: {
                hide: true
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            ...extensionTableCell.TableCell.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>{
                        if (!editor.isEditable) {
                            return false;
                        }
                        const selection = editor.state.selection;
                        if (isTableSelected(selection)) {
                            return false;
                        }
                        if (getCellsInRow(selection, 0)?.some((_cell, index)=>isColumnSelected(selection, index))) {
                            return false;
                        }
                        if (getCellsInColumn(selection, 0)?.some((_cell, index)=>isRowSelected(selection, index))) {
                            return false;
                        }
                        return isCellSelection(selection);
                    },
                    rect: ({ editor })=>{
                        const { view, state } = editor;
                        if (isCellSelection(state.selection)) {
                            const cell = view.nodeDOM(state.selection.$headCell.pos);
                            if (cell) {
                                const grip = cell.querySelector(".ProseMirror-table-grip-cell");
                                if (grip) {
                                    return grip.getBoundingClientRect();
                                } else {
                                    return cell.getBoundingClientRect();
                                }
                            }
                        }
                        return core.posToDOMRect(view, state.selection.from, state.selection.to);
                    },
                    onInit: ({ view, editor, element })=>{
                        const mergeCells = view.createButton({
                            name: this.options.dictionary.mergeCells,
                            view: icon("merge-cells"),
                            onClick: ()=>editor.chain().mergeCells().run()
                        });
                        const splitCells = view.createButton({
                            name: this.options.dictionary.splitCells,
                            view: icon("split-cells"),
                            onClick: ()=>editor.chain().splitCell().run()
                        });
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "left").run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "center").run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "right").run()
                        });
                        element.append(mergeCells.button);
                        element.append(splitCells.button);
                        element.append(alignLeft.button);
                        element.append(alignCenter.button);
                        element.append(alignRight.button);
                    }
                }),
                props: {
                    decorations: (state)=>{
                        const { doc, selection } = state;
                        const decorations = [];
                        if (this.editor.isEditable) {
                            const table = findTable(selection);
                            if (table) {
                                const map = tables.TableMap.get(table.node);
                                for (const pos of map.cellsInRect({
                                    left: 0,
                                    right: map.width,
                                    top: 0,
                                    bottom: map.height
                                })){
                                    decorations.push(view.Decoration.widget(table.start + pos + 1, ()=>{
                                        const grip = document.createElement("div");
                                        grip.classList.add("ProseMirror-table-grip-cell");
                                        return grip;
                                    }));
                                }
                            }
                        }
                        return view.DecorationSet.create(doc, decorations);
                    }
                }
            })
        ];
    }
});

const TableHeader = extensionTableHeader.TableHeader.extend({
    name: "tableHeader",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                insertLeft: "Insert column on the left",
                insertRight: "Insert column on the right",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment",
                deleteCol: "Delete column"
            }
        };
    },
    addAttributes () {
        return {
            ...this.parent?.(),
            align: {
                default: null
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "tableCell" && !!node.isHeader,
                    apply: (state, node, type)=>{
                        state.openNode(type, {
                            alignment: node.align
                        });
                        state.openNode(state.editor.schema.nodes.paragraph);
                        state.next(node.children);
                        state.closeNode();
                        state.closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "tableCell"
                        });
                        state.next(node.content);
                        state.closeNode();
                    }
                }
            },
            clickMenu: {
                hide: true
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            ...extensionTableHeader.TableHeader.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>{
                        if (!editor.isEditable) {
                            return false;
                        }
                        const selection = editor.state.selection;
                        if (isTableSelected(selection)) {
                            return false;
                        }
                        const cells = getCellsInRow(selection, 0);
                        return !!cells?.some((_cell, index)=>isColumnSelected(selection, index));
                    },
                    rect: ({ editor })=>{
                        const { view, state } = editor;
                        if (isCellSelection(state.selection)) {
                            const cell = view.nodeDOM(state.selection.$headCell.pos);
                            if (cell) {
                                const grip = cell.querySelector(".ProseMirror-table-grip-col");
                                if (grip) {
                                    return grip.getBoundingClientRect();
                                } else {
                                    return cell.getBoundingClientRect();
                                }
                            }
                        }
                        return core.posToDOMRect(view, state.selection.from, state.selection.to);
                    },
                    onInit: ({ view, editor, element })=>{
                        const insertLeft = view.createButton({
                            name: this.options.dictionary.insertLeft,
                            view: icon("left"),
                            onClick: ()=>editor.chain().addColumnBefore().run()
                        });
                        const insertRight = view.createButton({
                            name: this.options.dictionary.insertRight,
                            view: icon("right"),
                            onClick: ()=>editor.chain().addColumnAfter().run()
                        });
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "left").run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "center").run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().setCellAttribute("align", "right").run()
                        });
                        const deleteCol = view.createButton({
                            name: this.options.dictionary.deleteCol,
                            view: icon("remove"),
                            onClick: ()=>editor.chain().deleteColumn().run()
                        });
                        element.append(insertLeft.button);
                        element.append(insertRight.button);
                        element.append(alignLeft.button);
                        element.append(alignCenter.button);
                        element.append(alignRight.button);
                        element.append(deleteCol.button);
                    }
                }),
                props: {
                    decorations: (state)=>{
                        const { tr, doc, selection } = state;
                        const decorations = [];
                        if (this.editor.isEditable) {
                            const cells = getCellsInRow(selection, 0);
                            if (cells) {
                                for(let index = 0; index < cells.length; index++){
                                    decorations.push(view.Decoration.widget(cells[index].pos + 1, ()=>{
                                        const grip = document.createElement("div");
                                        grip.classList.add("ProseMirror-table-grip-col");
                                        if (isColumnSelected(selection, index)) {
                                            grip.classList.add("active");
                                        }
                                        if (index === 0) {
                                            grip.classList.add("first");
                                        } else if (index === cells.length - 1) {
                                            grip.classList.add("last");
                                        }
                                        const drag = document.createElement("div");
                                        drag.classList.add("ProseMirror-table-grip-drag");
                                        drag.innerHTML = icon("drag");
                                        drag.addEventListener("mousedown", (event)=>{
                                            event.preventDefault();
                                            event.stopImmediatePropagation();
                                            this.editor.view.dispatch(selectColumn(tr, index));
                                        });
                                        grip.append(drag);
                                        return grip;
                                    }));
                                }
                            }
                        }
                        return view.DecorationSet.create(doc, decorations);
                    }
                }
            })
        ];
    }
});

class InnerRenderView {
    static create(options) {
        return (_options)=>new InnerRenderView({
                ...options,
                ..._options,
                HTMLAttributes: {
                    ...options.HTMLAttributes,
                    ..._options.HTMLAttributes
                }
            });
    }
    get dom() {
        return this._root;
    }
    get node() {
        return this._node;
    }
    get getPos() {
        return this.options.getPos;
    }
    get HTMLAttributes() {
        return this.options.HTMLAttributes;
    }
    get $root() {
        return this._root;
    }
    update(node) {
        if (node.type !== this.options.node.type) {
            return false;
        }
        this._node = node;
        if (this.options.onUpdate) {
            this.options.onUpdate({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        return true;
    }
    destroy() {
        if (this.options.onDestroy) {
            this.options.onDestroy({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        this.$root.remove();
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
        this._node = options.node;
        this._root = document.createElement(options.tag ?? "div");
        this._root.classList.add("ProseMirror-inner-render");
        this._root.setAttribute("data-type", this._node.type.name);
        if (this.options.id) {
            this._root.setAttribute("name", this.options.id);
        }
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                this._root.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    this._root.style[key] = val;
                }
            }
        }
        for (const [key, value] of Object.entries(core.mergeAttributes(this.options.HTMLAttributes))){
            if (value !== undefined && value !== null) {
                this._root.setAttribute(key, value);
            }
        }
        if (this.options.onInit) {
            this.options.onInit({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
    }
}

class BlockMenuView {
    static create(options) {
        return ()=>new BlockMenuView(options);
    }
    onStart(props) {
        this._index = 0;
        this._items = [];
        // element
        this._element = document.createElement("div");
        this._element.classList.add("ProseMirror-bm");
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                this._element.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    this._element.style[key] = val;
                }
            }
        }
        if (this.options.onInit) {
            this.options.onInit({
                view: this,
                range: props.range,
                editor: this.editor,
                element: this._element
            });
        }
        // popover
        const options = {
            appendTo: ()=>document.body,
            getReferenceClientRect: null,
            content: this._element,
            arrow: false,
            interactive: true,
            theme: "ProseMirror",
            trigger: "manual",
            placement: "top-start",
            maxWidth: "none"
        };
        this._popover = tippy__default.default(document.body, this.options.tippy ? this.options.tippy({
            options,
            view: this,
            editor: this.editor
        }) : options);
        this.onUpdate(props);
    }
    onUpdate(props) {
        if (this._element === undefined || this._popover === undefined || this._index === undefined || this._items === undefined) {
            return;
        }
        // items
        this._items = props.items;
        // update
        if (this.options.onUpdate) {
            this.options.onUpdate({
                view: this,
                range: props.range,
                editor: this.editor,
                element: this._element
            });
        }
        // render
        this._render(props.range);
        // client rect
        // @ts-expect-error
        this._popover.setProps({
            getReferenceClientRect: props.clientRect
        });
    }
    onKeyDown(props) {
        if (this._element === undefined || this._popover === undefined || this._index === undefined || this._items === undefined) {
            return false;
        }
        if (props.event.key === "Escape") {
            if (this._popover) {
                this._popover.hide();
            }
            return true;
        }
        if (props.event.key === "Enter") {
            const item = this._items[this._index];
            if (item && typeof item !== "string" && item.action) {
                item.action({
                    view: this,
                    range: props.range,
                    editor: this.editor,
                    element: this._element
                });
            }
            return true;
        }
        if (props.event.key === "ArrowUp") {
            const prev = this._index - 1;
            const index = this._items[prev] && typeof this._items[prev] === "string" ? prev - 1 : prev;
            this._index = index < 0 ? this._items.length - 1 : index;
            this._render(props.range);
            return true;
        }
        if (props.event.key === "ArrowDown") {
            const next = this._index + 1;
            const index = this._items[next] && typeof this._items[next] === "string" ? next + 1 : next;
            this._index = index >= this._items.length ? 0 : index;
            this._render(props.range);
            return true;
        }
        return false;
    }
    onExit(props) {
        if (this._element === undefined || this._popover === undefined || this._index === undefined || this._items === undefined) {
            return;
        }
        this._popover.hide();
        if (this.options.onDestroy) {
            this.options.onDestroy({
                view: this,
                range: props.range,
                editor: this.editor,
                element: this._element
            });
        }
        this._popover.destroy();
        this._element.remove();
        this._index = undefined;
        this._items = undefined;
        this._element = undefined;
        this._popover = undefined;
    }
    createButton(element, options) {
        if (options.id) {
            element.setAttribute("name", options.id);
        }
        if (options.class) {
            for (const item of Array.isArray(options.class) ? options.class : [
                options.class
            ]){
                element.classList.add(item);
            }
        }
        if (options.style) {
            for (const item of Array.isArray(options.style) ? options.style : [
                options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    element.style[key] = val;
                }
            }
        }
        // icon
        if (options.icon) {
            const icon = document.createElement("div");
            icon.classList.add("ProseMirror-bm-button-icon");
            icon.innerHTML = options.icon;
            element.append(icon);
        }
        // name
        const name = document.createElement("div");
        name.classList.add("ProseMirror-bm-button-name");
        name.textContent = options.name;
        element.append(name);
        // shortcut
        if (options.shortcut) {
            options.shortcut.split("-").forEach((value, index)=>{
                if (index !== 0) {
                    const span = document.createElement("span");
                    span.innerHTML = "+";
                    element.append(span);
                }
                const kbd = document.createElement("kbd");
                if (navigator.userAgent.includes("Mac")) {
                    kbd.textContent = value.replace(/mod/i, "Cmd");
                } else {
                    kbd.textContent = value.replace(/mod/i, "Ctrl");
                }
                element.append(kbd);
            });
        }
    }
    _render(range) {
        if (this._element === undefined || this._popover === undefined || this._index === undefined || this._items === undefined) {
            return;
        }
        this._element.innerHTML = "";
        this._index = Math.min(this._index, Math.max(0, this._items.length - 1));
        if (this._items.length) {
            const nodes = [];
            for(let i = 0; i < this._items.length; i++){
                const item = this._items[i];
                if (item === "|") {
                    const view = document.createElement("div");
                    view.classList.add("ProseMirror-bm-divider");
                    nodes.push(view);
                } else {
                    const view = document.createElement("button");
                    view.classList.add("ProseMirror-bm-button");
                    if (i === this._index) {
                        view.classList.add("active");
                    }
                    item.render({
                        range,
                        view: this,
                        editor: this.editor,
                        element: view
                    });
                    view.addEventListener("click", ()=>{
                        if (this._element) {
                            item.action({
                                range,
                                view: this,
                                editor: this.editor,
                                element: view
                            });
                        }
                    });
                    nodes.push(view);
                }
            }
            this._element.append(...nodes);
            // noinspection JSIgnoredPromiseFromCall
            scrollIntoView__default.default(nodes[this._index], {
                block: "center",
                scrollMode: "if-needed",
                boundary: (parent)=>parent !== this._element
            });
        } else {
            const view = document.createElement("div");
            view.classList.add("ProseMirror-bm-empty");
            view.textContent = this.options.dictionary.empty;
            this._element.append(view);
        }
        this._popover.show();
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
    }
}

const Emoji = core.Node.create({
    name: "emoji",
    inline: true,
    group: "inline",
    atom: true,
    draggable: true,
    addAttributes () {
        return {
            value: {
                default: ""
            }
        };
    },
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Emoji",
                queryEmpty: "No results found"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "emoji",
                    apply: (state, node, type)=>{
                        state.openNode(type).addText(node.value).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "text",
                            value: node.content.firstChild?.text || ""
                        });
                    }
                },
                hooks: {
                    // @ts-expect-error
                    beforeInit: (processor)=>processor.use(remarkGemoji__default.default)
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`,
                preserveWhitespace: "full",
                getAttrs: (node)=>({
                        value: node.textContent
                    })
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            node.attrs.value
        ];
    },
    addNodeView () {
        return InnerRenderView.create({
            tag: "span",
            HTMLAttributes: this.options.HTMLAttributes,
            onRender: ({ view })=>{
                view.$root.innerHTML = gemoji.nameToEmoji[view.node.attrs.value];
            }
        });
    },
    addCommands () {
        return {
            setEmoji: (name)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs: {
                            value: name
                        }
                    });
            }
        };
    },
    addInputRules () {
        return [
            new core.InputRule({
                find: /:([a-zA-Z0-9_+]+):/,
                handler: ({ state, range, match })=>{
                    const { from, to } = range;
                    const $start = state.doc.resolve(from);
                    const index = $start.index();
                    const $end = state.doc.resolve(to);
                    if (!$start.parent.canReplaceWith(index, $end.index(), this.type)) {
                        return null;
                    }
                    const value = match[1];
                    if (gemoji.nameToEmoji[value]) {
                        state.tr.replaceRangeWith(from, to, this.type.create({
                            value
                        }, this.type.schema.text(value)));
                    }
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            suggestion.Suggestion({
                editor: this.editor,
                pluginKey: new state.PluginKey(`${this.name}-suggestion`),
                char: ":",
                items: ({ query })=>{
                    const items = [];
                    for (const [name, html] of Object.entries(gemoji.nameToEmoji)){
                        if (query !== "") {
                            const q = query.toLowerCase();
                            if (!name.toLowerCase().includes(q)) {
                                continue;
                            }
                        }
                        items.push({
                            action: ({ editor, range })=>{
                                editor.chain().deleteRange(range).setEmoji(name).focus().run();
                            },
                            render: ({ view, element })=>view.createButton(element, {
                                    id: name,
                                    name: `${name} - ${html}`
                                })
                        });
                    }
                    return items.slice(0, 20);
                },
                render: BlockMenuView.create({
                    editor: this.editor,
                    dictionary: {
                        empty: this.options.dictionary.queryEmpty
                    }
                })
            })
        ];
    }
});

function wrap(root, match) {
    const visitor = (node, index, parent)=>{
        if (!parent || typeof index !== "number") {
            return;
        }
        if (match(node)) {
            if (parent.type !== "paragraph") {
                parent.children.splice(index, 1, {
                    type: "paragraph",
                    children: [
                        node
                    ]
                });
                return [
                    unistUtilVisit.SKIP,
                    index
                ];
            }
        }
    };
    unistUtilVisit.visit(root, visitor);
    return root;
}
function unwrap(root, match) {
    const visitor = (node, index, parent)=>{
        if (!parent || typeof index !== "number") {
            return;
        }
        const items = [];
        for(let i = 0; i < node.children.length; i++){
            const child = node.children[i];
            if (match(child)) {
                items.push(child);
            } else {
                const last = items[items.length - 1];
                if (Array.isArray(last)) {
                    last.push(child);
                } else {
                    items.push([
                        child
                    ]);
                }
            }
        }
        parent.children.splice(index, 1, ...items.map((i)=>{
            if (Array.isArray(i)) {
                return {
                    type: "paragraph",
                    children: i
                };
            } else {
                return i;
            }
        }));
        return index + items.length;
    };
    unistUtilVisit.visit(root, "paragraph", visitor);
    return root;
}

class InnerResizerView {
    static create(options) {
        return (_options)=>new InnerResizerView({
                ...options,
                ..._options,
                HTMLAttributes: options.HTMLAttributes ?? {}
            });
    }
    get dom() {
        return this._root;
    }
    get node() {
        return this._node;
    }
    get getPos() {
        return this.options.getPos;
    }
    get HTMLAttributes() {
        return this.options.HTMLAttributes;
    }
    get $root() {
        return this._root;
    }
    update(node) {
        if (node.type !== this.options.node.type) {
            return false;
        }
        this._node = node;
        const width = this._node.attrs.width ? `${this._node.attrs.width}px` : "";
        if (this._root.style.width !== width) {
            this._root.style.width = width;
        }
        const height = this._node.attrs.height ? `${this._node.attrs.height}px` : "";
        if (this._root.style.height !== height) {
            this._root.style.height = height;
        }
        if (this._node.attrs.align === "left" || this._node.attrs.align === "start") {
            if (this._root.style.alignSelf !== "flex-start") {
                this._root.style.alignSelf = "flex-start";
            }
        }
        if (this._node.attrs.align === "center" || this._node.attrs.align === "start") {
            if (this._root.style.alignSelf !== "center") {
                this._root.style.alignSelf = "center";
            }
        }
        if (this._node.attrs.align === "right" || this._node.attrs.align === "end") {
            if (this._root.style.alignSelf !== "flex-end") {
                this._root.style.alignSelf = "flex-end";
            }
        }
        if (this.options.onUpdate) {
            this.options.onUpdate({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        return true;
    }
    destroy() {
        if (this.options.onDestroy) {
            this.options.onDestroy({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        this.$root.remove();
    }
    _resizer(direction) {
        const store = {
            resizing: false,
            offset: 0,
            size: 0
        };
        const resizer = document.createElement("div");
        const wrapper = document.createElement("div");
        wrapper.style.display = "none";
        wrapper.style.userSelect = "unset";
        if (direction === "left") {
            resizer.classList.add("ProseMirror-lresizer");
        } else if (direction === "right") {
            resizer.classList.add("ProseMirror-rresizer");
        } else {
            resizer.classList.add("ProseMirror-bresizer");
        }
        resizer.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            const rect = resizer.getBoundingClientRect();
            wrapper.style.display = "block";
            wrapper.style.userSelect = "none";
            store.resizing = true;
            if (direction === "left") {
                store.offset = rect.x;
                store.size = this._root.clientWidth;
            } else if (direction === "right") {
                store.offset = rect.x;
                store.size = this._root.clientWidth;
            } else {
                store.offset = rect.y;
                store.size = this._root.clientHeight;
            }
        });
        wrapper.addEventListener("mousemove", (e)=>{
            if (!store.resizing) {
                return;
            }
            if (direction === "left") {
                const size = store.size + Math.round((e.clientX - store.offset) * (this._root.style.alignSelf === "center" ? 2 : 1));
                if (size >= 100) {
                    this._root.style.width = `${size}px`;
                }
            } else if (direction === "right") {
                const size = store.size - Math.round((e.clientX - store.offset) * (this._root.style.alignSelf === "center" ? 2 : 1));
                if (size >= 100) {
                    this._root.style.width = `${size}px`;
                }
            } else {
                const size = store.size + Math.round(e.clientY - store.offset);
                if (size >= 100) {
                    this._root.style.height = `${size}px`;
                }
            }
        });
        wrapper.addEventListener("mouseup", ()=>{
            store.resizing = false;
            store.offset = 0;
            store.size = 0;
            wrapper.style.display = "none";
            wrapper.style.userSelect = "unset";
            if (direction === "left" || direction === "right") {
                setAttributes(this.editor, this.options.getPos, {
                    ...this._node.attrs,
                    width: this._root.clientWidth
                });
            } else {
                setAttributes(this.editor, this.options.getPos, {
                    ...this._node.attrs,
                    height: this._root.clientHeight
                });
            }
        });
        wrapper.addEventListener("mouseleave", ()=>{
            store.resizing = false;
            store.offset = 0;
            store.size = 0;
            wrapper.style.display = "none";
            wrapper.style.userSelect = "unset";
            if (direction === "left" || direction === "right") {
                setAttributes(this.editor, this.options.getPos, {
                    ...this._node.attrs,
                    width: this._root.clientWidth
                });
            } else {
                setAttributes(this.editor, this.options.getPos, {
                    ...this._node.attrs,
                    height: this._root.clientHeight
                });
            }
        });
        resizer.append(wrapper);
        this._root.append(resizer);
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
        this._node = options.node;
        this._root = document.createElement(options.tag ?? "div");
        this._root.classList.add("ProseMirror-inner-resizer");
        this._root.setAttribute("data-type", this._node.type.name);
        if (this.options.id) {
            this._root.setAttribute("name", this.options.id);
        }
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                this._root.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    this._root.style[key] = val;
                }
            }
        }
        for (const [key, value] of Object.entries(core.mergeAttributes(this.options.HTMLAttributes))){
            if (value !== undefined && value !== null) {
                this._root.setAttribute(key, value);
            }
        }
        this._root.style.width = this._node.attrs.width ? `${this._node.attrs.width}px` : "";
        this._root.style.height = this._node.attrs.height ? `${this._node.attrs.height}px` : "";
        if (this._node.attrs.align === "left" || this._node.attrs.align === "start") {
            this._root.style.alignSelf = "flex-start";
        }
        if (this._node.attrs.align === "center" || this._node.attrs.align === "start") {
            this._root.style.alignSelf = "center";
        }
        if (this._node.attrs.align === "right" || this._node.attrs.align === "end") {
            this._root.style.alignSelf = "flex-end";
        }
        if (this.options.onInit) {
            this.options.onInit({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root
            });
        }
        if (!this.options.resize || this.options.resize.includes("width")) {
            this._resizer("left");
            this._resizer("right");
        }
        if (!this.options.resize || this.options.resize.includes("height")) {
            this._resizer("bottom");
        }
    }
}

const Embed = core.Node.create({
    name: "embed",
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    addOptions () {
        return {
            items: [
                {
                    name: "GitHub Gist",
                    match: ({ node })=>{
                        return node.attrs.src?.match(/(?:https?:\/\/)?gist\.github\.?com\/?(.*)$/i);
                    },
                    render: ({ editor, view, node, element })=>{
                        const match = node.attrs.src?.match(/(?:https?:\/\/)?gist\.github\.?com\/?(.*)$/i);
                        if (!match) {
                            return;
                        }
                        window.addEventListener("message", (e)=>{
                            if (e.data?.type === "resize" && e.data?.value) {
                                if (Math.abs(node.attrs.height - e.data.value) > 5) {
                                    setAttributes(editor, view.getPos, {
                                        ...node.attrs,
                                        height: e.data.value
                                    });
                                }
                            }
                        });
                        element.src = `
              data:text/html;charset=utf-8,
              <head>
                <base target='_blank' />
                <title>GitHub Gist</title>
              </head>
              <body>
                <script src="https://gist.github.com/${match[1]}.js"></script>
                <script>
                  window.addEventListener("load", () => {
                    window.parent.postMessage({ type: "resize", value: document.body.scrollHeight }, "*");
                  });
                </script>
              </body>
            `;
                    }
                }
            ],
            inline: false,
            HTMLAttributes: {},
            dictionary: {
                name: "Embed",
                inputEmbed: "Enter or paste embed",
                openEmbed: "Open embed",
                deleteEmbed: "Delete embed",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment"
            }
        };
    },
    addAttributes () {
        return {
            src: {
                default: null
            },
            align: {
                default: "center"
            },
            width: {
                default: null
            },
            height: {
                default: null
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "textDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        state.addNode(type, node.attributes);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "textDirective",
                            name: this.name,
                            attributes: node.attrs
                        });
                    }
                },
                hooks: {
                    afterParse: (root)=>this.options.inline ? root : unwrap(root, (node)=>node.type === "textDirective" && node.name === this.name),
                    beforeSerialize: (root)=>this.options.inline ? root : wrap(root, (node)=>node.type === "textDirective" && node.name === this.name)
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("embed"),
                        keywords: "embed,iframe,qrk",
                        action: (editor)=>editor.chain().setEmbed({
                                src: ""
                            }).focus().run()
                    }
                ]
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "iframe[src]"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "iframe",
            core.mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    addNodeView () {
        return InnerResizerView.create({
            HTMLAttributes: this.options.HTMLAttributes,
            onInit: ({ editor, view })=>{
                const ifr = document.createElement("iframe");
                for (const [key, value] of Object.entries(core.mergeAttributes(view.HTMLAttributes))){
                    if (value !== undefined && value !== null) {
                        ifr.setAttribute(key, value);
                    }
                }
                ifr.src = view.node.attrs.src ?? "";
                view.$root.append(ifr);
                for (const item of this.options.items){
                    if (item.match({
                        editor,
                        view,
                        node: view.node,
                        element: ifr
                    })) {
                        item.render({
                            editor,
                            view,
                            node: view.node,
                            element: ifr
                        });
                        break;
                    }
                }
            },
            onUpdate: ({ editor, view })=>{
                const ifr = view.$root.firstElementChild;
                if (ifr) {
                    const src = view.node.attrs.src ?? "";
                    if (ifr.getAttribute("src") !== src) {
                        ifr.src = src;
                    }
                    for (const item of this.options.items){
                        if (item.match({
                            editor,
                            view,
                            node: view.node,
                            element: ifr
                        })) {
                            item.render({
                                editor,
                                view,
                                node: view.node,
                                element: ifr
                            });
                            break;
                        }
                    }
                }
            }
        });
    },
    addCommands () {
        return {
            setEmbed: (options)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs: options
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.nodeInputRule({
                find: /(:embed\{([^}]+)\})/,
                type: this.type,
                getAttributes: (match)=>parseAttributes(match[2])
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector("input")?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const href = view.createInput({
                            name: this.options.dictionary.inputEmbed,
                            onEnter: (value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    src: value
                                }).focus().run();
                            },
                            onBoundary: (value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    value
                                }).setTextSelection(editor.state.selection.from + (value === "left" ? -1 : 1)).focus().run();
                            }
                        });
                        const open = view.createButton({
                            name: this.options.dictionary.openEmbed,
                            view: icon("open"),
                            onClick: ()=>{
                                const attrs = editor.getAttributes(this.name);
                                if (attrs.src) {
                                    window.open(attrs.src, attrs.target);
                                }
                            }
                        });
                        const remove = view.createButton({
                            name: this.options.dictionary.deleteEmbed,
                            view: icon("remove"),
                            onClick: ()=>{
                                editor.chain().deleteSelection().focus().run();
                            }
                        });
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "left"
                                }).run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "center"
                                }).run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "right"
                                }).run()
                        });
                        element.append(href.input);
                        element.append(alignLeft.button);
                        element.append(alignCenter.button);
                        element.append(alignRight.button);
                        element.append(open.button);
                        element.append(remove.button);
                    },
                    onUpdate: ({ editor, element })=>{
                        const href = element.querySelector("input");
                        if (href) {
                            href.value = editor.getAttributes(this.name).src ?? "";
                        }
                    }
                })
            })
        ];
    }
});

const Image = extensionImage.Image.extend({
    name: "image",
    addOptions () {
        return {
            ...this.parent?.(),
            dictionary: {
                name: "Image",
                empty: "Add image",
                error: "Error loading image",
                loading: "Loading image...",
                inputSrc: "Enter or paste link",
                inputAlt: "Image description",
                inputTitle: "Image title",
                imageOpen: "Open image",
                imageUpload: "Upload image",
                imageDelete: "Delete image",
                alignLeft: "Left alignment",
                alignCenter: "Center alignment",
                alignRight: "Right alignment"
            }
        };
    },
    addStorage () {
        return {
            ...this.parent?.(),
            markdown: {
                parser: {
                    match: (node)=>node.type === "image",
                    apply: (state, node, type)=>{
                        const src = node.url;
                        const alt = node.alt;
                        const title = node.title;
                        state.addNode(type, {
                            src,
                            alt,
                            title
                        });
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "image",
                            title: node.attrs.title,
                            url: node.attrs.src,
                            alt: node.attrs.alt
                        });
                    }
                },
                hooks: {
                    afterParse: (root)=>this.options.inline ? root : unwrap(root, (node)=>node.type === "image"),
                    beforeSerialize: (root)=>this.options.inline ? root : wrap(root, (node)=>node.type === "image")
                }
            },
            uploader: {
                match: (_editor, data)=>data.type.startsWith("image"),
                apply: (editor, data)=>editor.chain().setImage({
                        src: data.url,
                        alt: data.name
                    }).run()
            },
            floatMenu: {
                hide: true
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("image"),
                        keywords: "image,picture,tp,zp",
                        action: (editor)=>editor.chain().setImage({
                                src: ""
                            }).focus().run()
                    }
                ]
            }
        };
    },
    addAttributes () {
        return {
            ...this.parent?.(),
            align: {
                default: "center"
            },
            width: {
                default: null
            }
        };
    },
    addNodeView () {
        return InnerResizerView.create({
            resize: [
                "width"
            ],
            HTMLAttributes: this.options.HTMLAttributes,
            onInit: ({ view })=>{
                const img = document.createElement("img");
                for (const [key, value] of Object.entries(core.mergeAttributes(view.HTMLAttributes))){
                    if (value !== undefined && value !== null) {
                        img.setAttribute(key, value);
                    }
                }
                img.src = view.node.attrs.src ?? "";
                img.alt = view.node.attrs.alt ?? "";
                img.title = view.node.attrs.title ?? "";
                view.$root.setAttribute("data-status", "loading");
                view.$root.setAttribute("data-message", this.options.dictionary.loading);
                img.addEventListener("load", ()=>{
                    view.$root.removeAttribute("data-status");
                    view.$root.removeAttribute("data-message");
                });
                img.addEventListener("error", ()=>{
                    if (img.getAttribute("src")) {
                        view.$root.setAttribute("data-status", "error");
                        view.$root.setAttribute("data-message", this.options.dictionary.error);
                    } else {
                        view.$root.setAttribute("data-status", "empty");
                        view.$root.setAttribute("data-message", this.options.dictionary.empty);
                    }
                });
                view.$root.append(img);
            },
            onUpdate: ({ view })=>{
                const img = view.$root.firstElementChild;
                if (img) {
                    const src = view.node.attrs.src ?? "";
                    if (img.getAttribute("src") !== src) {
                        img.src = src;
                    }
                    const alt = view.node.attrs.alt ?? "";
                    if (img.getAttribute("alt") !== alt) {
                        img.alt = alt;
                    }
                    const title = view.node.attrs.title ?? "";
                    if (img.getAttribute("title") !== title) {
                        img.title = title;
                    }
                }
            }
        });
    },
    addProseMirrorPlugins () {
        return [
            ...extensionImage.Image.config.addProseMirrorPlugins?.apply(this) ?? [],
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector(`input[name="src"]`)?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const group1 = view.createGroup("row");
                        const group2 = view.createGroup("column");
                        const group3 = view.createGroup("column");
                        const src = view.createInput({
                            id: "src",
                            name: this.options.dictionary.inputSrc,
                            onKey: ({ key })=>{
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    editor.chain().focus().run();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const alt = view.createInput({
                            id: "alt",
                            name: this.options.dictionary.inputAlt,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const title = view.createInput({
                            id: "title",
                            name: this.options.dictionary.inputTitle,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    editor.chain().focus().run();
                                }
                            }
                        });
                        const open = view.createButton({
                            id: "open",
                            name: this.options.dictionary.imageOpen,
                            view: icon("open"),
                            onClick: ()=>{
                                const attrs = editor.getAttributes(this.name);
                                if (attrs.src) {
                                    window.open(attrs.src, attrs.target);
                                }
                            }
                        });
                        const upload = view.createUpload({
                            id: "upload",
                            name: this.options.dictionary.imageUpload,
                            view: icon("upload"),
                            accept: "image/*",
                            onUpload: (element)=>{
                                const uploader = this.editor.storage.uploader;
                                if (element.files && uploader) {
                                    uploader.upload(element.files).then((items)=>items.forEach((item)=>{
                                            if (item.type.startsWith("image")) {
                                                editor.chain().setImage({
                                                    src: item.url,
                                                    alt: item.name
                                                }).run();
                                            }
                                        }));
                                }
                            }
                        });
                        const remove = view.createButton({
                            id: "remove",
                            name: this.options.dictionary.imageDelete,
                            view: icon("remove"),
                            onClick: ()=>{
                                editor.chain().deleteSelection().focus().run();
                            }
                        });
                        const alignLeft = view.createButton({
                            name: this.options.dictionary.alignLeft,
                            view: icon("align-left"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "left"
                                }).run()
                        });
                        const alignCenter = view.createButton({
                            name: this.options.dictionary.alignCenter,
                            view: icon("align-center"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "center"
                                }).run()
                        });
                        const alignRight = view.createButton({
                            name: this.options.dictionary.alignRight,
                            view: icon("align-right"),
                            onClick: ()=>editor.chain().updateAttributes(this.name, {
                                    align: "right"
                                }).run()
                        });
                        group2.addEventListener("keydown", (e)=>{
                            if (e.key === "Enter") {
                                editor.chain().updateAttributes(this.name, {
                                    src: src.input.value,
                                    alt: alt.input.value,
                                    title: title.input.value
                                }).focus().run();
                            }
                        });
                        const div1 = view.createGroup("row");
                        const div2 = view.createGroup("row");
                        div1.append(open.button);
                        div1.append(upload.button);
                        div1.append(remove.button);
                        div2.append(alignLeft.button);
                        div2.append(alignCenter.button);
                        div2.append(alignRight.button);
                        group2.append(src.input);
                        group2.append(alt.input);
                        group2.append(title.input);
                        group3.append(div1);
                        group3.append(div2);
                        group1.append(group2);
                        group1.append(group3);
                        element.append(group1);
                    },
                    onUpdate: ({ editor, element })=>{
                        const attrs = editor.getAttributes(this.name);
                        const src = element.querySelector(`input[name="src"]`);
                        const alt = element.querySelector(`input[name="alt"]`);
                        const title = element.querySelector(`input[name="title"]`);
                        src.value = attrs.src ?? "";
                        alt.value = attrs.alt ?? "";
                        title.value = attrs.title ?? "";
                    }
                })
            })
        ];
    }
});

const Audio = core.Node.create({
    name: "audio",
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    addOptions () {
        return {
            inline: false,
            HTMLAttributes: {},
            dictionary: {
                name: "Audio",
                inputSrc: "Enter or paste link",
                inputAlt: "Audio description",
                inputTitle: "Audio title",
                audioOpen: "Open audio",
                audioUpload: "Upload audio",
                audioDelete: "Delete audio"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "textDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        state.addNode(type, node.attributes);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "textDirective",
                            name: this.name,
                            attributes: node.attrs
                        });
                    }
                },
                hooks: {
                    afterParse: (root)=>this.options.inline ? root : unwrap(root, (node)=>node.type === "textDirective" && node.name === this.name),
                    beforeSerialize: (root)=>this.options.inline ? root : wrap(root, (node)=>node.type === "textDirective" && node.name === this.name)
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("audio"),
                        keywords: "audio,yp",
                        action: (editor)=>editor.chain().setAudio({
                                src: ""
                            }).focus().run()
                    }
                ]
            }
        };
    },
    addAttributes () {
        return {
            src: {
                default: null
            },
            title: {
                default: null
            },
            align: {
                default: "center"
            },
            width: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "audio"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "audio",
            core.mergeAttributes({
                controls: "true"
            }, this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    addNodeView () {
        return InnerResizerView.create({
            resize: [
                "width"
            ],
            HTMLAttributes: this.options.HTMLAttributes,
            onInit: ({ view })=>{
                const ado = document.createElement("audio");
                for (const [key, value] of Object.entries(core.mergeAttributes(view.HTMLAttributes))){
                    if (value !== undefined && value !== null) {
                        ado.setAttribute(key, value);
                    }
                }
                ado.src = view.node.attrs.src ?? "";
                ado.title = view.node.attrs.title ?? "";
                view.$root.append(ado);
                view.$root.classList.add("ProseMirror-selectedcard");
                // @ts-expect-error
                view.plyr = new Plyr__default.default(ado);
            },
            onUpdate: ({ view })=>{
                const ado = view.$root.querySelector("audio");
                if (ado) {
                    const src = view.node.attrs.src ?? "";
                    const title = view.node.attrs.title ?? "";
                    if (ado.getAttribute("src") !== src || ado.getAttribute("title") !== title) {
                        // @ts-expect-error
                        view.plyr?.destroy();
                        const dom = view.$root.querySelector("audio");
                        dom.src = src;
                        dom.title = title;
                        // @ts-expect-error
                        view.plyr = new Plyr__default.default(dom);
                    }
                }
            },
            onDestroy: ({ view })=>{
                // @ts-expect-error
                view.plyr?.destroy();
            }
        });
    },
    addCommands () {
        return {
            setAudio: (options)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs: options
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.nodeInputRule({
                find: /(:audio{([^}]+)})/,
                type: this.type,
                getAttributes: (match)=>parseAttributes(match[2])
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector(`input[name="src"]`)?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const group = view.createGroup("column");
                        const src = view.createInput({
                            id: "src",
                            name: this.options.dictionary.inputSrc,
                            onKey: ({ key })=>{
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    editor.chain().focus().run();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const alt = view.createInput({
                            id: "alt",
                            name: this.options.dictionary.inputAlt,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const title = view.createInput({
                            id: "title",
                            name: this.options.dictionary.inputTitle,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    editor.chain().focus().run();
                                }
                            }
                        });
                        const open = view.createButton({
                            id: "open",
                            name: this.options.dictionary.audioOpen,
                            view: icon("open"),
                            onClick: ()=>{
                                const attrs = editor.getAttributes(this.name);
                                if (attrs.src) {
                                    window.open(attrs.src, attrs.target);
                                }
                            }
                        });
                        const upload = view.createUpload({
                            id: "upload",
                            name: this.options.dictionary.audioUpload,
                            view: icon("upload"),
                            accept: "audio/*",
                            onUpload: (element)=>{
                                const uploader = this.editor.storage.uploader;
                                if (element.files && uploader) {
                                    uploader.upload(element.files).then((items)=>items.forEach((item)=>{
                                            if (item.type.startsWith("audio")) {
                                                editor.chain().setAudio({
                                                    src: item.url,
                                                    alt: item.name
                                                }).run();
                                            }
                                        }));
                                }
                            }
                        });
                        const remove = view.createButton({
                            id: "remove",
                            name: this.options.dictionary.audioDelete,
                            view: icon("remove"),
                            onClick: ()=>{
                                editor.chain().deleteSelection().run();
                            }
                        });
                        group.addEventListener("keydown", (e)=>{
                            if (e.key === "Enter") {
                                editor.chain().updateAttributes(this.name, {
                                    src: src.input.value,
                                    alt: alt.input.value,
                                    title: title.input.value
                                }).focus().run();
                            }
                        });
                        group.append(src.input);
                        group.append(alt.input);
                        group.append(title.input);
                        element.append(group);
                        element.append(open.button);
                        element.append(upload.button);
                        element.append(remove.button);
                    },
                    onUpdate: ({ editor, element })=>{
                        const attrs = editor.getAttributes(this.name);
                        const src = element.querySelector(`input[name="src"]`);
                        const alt = element.querySelector(`input[name="alt"]`);
                        const title = element.querySelector(`input[name="title"]`);
                        src.value = attrs.src ?? "";
                        alt.value = attrs.alt ?? "";
                        title.value = attrs.title ?? "";
                    }
                })
            })
        ];
    }
});

const Video = core.Node.create({
    name: "video",
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    addAttributes () {
        return {
            src: {
                default: null
            },
            title: {
                default: null
            },
            align: {
                default: "center"
            },
            width: {
                default: null
            }
        };
    },
    addOptions () {
        return {
            inline: false,
            HTMLAttributes: {},
            dictionary: {
                name: "Video",
                inputSrc: "Enter or paste link",
                inputAlt: "Video description",
                inputTitle: "Video title",
                videoOpen: "Open video",
                videoUpload: "Upload video",
                videoDelete: "Delete video"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "textDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        state.addNode(type, node.attributes);
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "textDirective",
                            name: this.name,
                            attributes: node.attrs
                        });
                    }
                },
                hooks: {
                    afterParse: (root)=>this.options.inline ? root : unwrap(root, (node)=>node.type === "textDirective" && node.name === this.name),
                    beforeSerialize: (root)=>this.options.inline ? root : wrap(root, (node)=>node.type === "textDirective" && node.name === this.name)
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("video"),
                        keywords: "video,sp",
                        action: (editor)=>editor.chain().setVideo({
                                src: ""
                            }).focus().run()
                    }
                ]
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "video"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "video",
            core.mergeAttributes({
                controls: "true"
            }, this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    addNodeView () {
        return InnerResizerView.create({
            resize: [
                "width"
            ],
            HTMLAttributes: this.options.HTMLAttributes,
            onInit: ({ view })=>{
                const vdo = document.createElement("video");
                for (const [key, value] of Object.entries(core.mergeAttributes(view.HTMLAttributes))){
                    if (value !== undefined && value !== null) {
                        vdo.setAttribute(key, value);
                    }
                }
                vdo.src = view.node.attrs.src ?? "";
                vdo.title = view.node.attrs.title ?? "";
                view.$root.append(vdo);
                view.$root.classList.add("ProseMirror-selectedcard");
                // @ts-expect-error
                view.plyr = new Plyr__default.default(vdo);
            },
            onUpdate: ({ view })=>{
                const vdo = view.$root.querySelector("video");
                if (vdo) {
                    const src = view.node.attrs.src ?? "";
                    const title = view.node.attrs.title ?? "";
                    if (vdo.getAttribute("src") !== src || vdo.getAttribute("title") !== title) {
                        // @ts-expect-error
                        view.plyr?.destroy();
                        const dom = view.$root.querySelector("video");
                        dom.src = src;
                        dom.title = title;
                        // @ts-expect-error
                        view.plyr = new Plyr__default.default(dom);
                    }
                }
            },
            onDestroy: ({ view })=>{
                // @ts-expect-error
                view.plyr?.destroy();
            }
        });
    },
    addCommands () {
        return {
            setVideo: (options)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs: options
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.nodeInputRule({
                find: /(:video{([^}]+)})/,
                type: this.type,
                getAttributes: (match)=>parseAttributes(match[2])
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector(`input[name="src"]`)?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const group = view.createGroup("column");
                        const src = view.createInput({
                            id: "src",
                            name: this.options.dictionary.inputSrc,
                            onKey: ({ key })=>{
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    editor.chain().focus().run();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const alt = view.createInput({
                            id: "alt",
                            name: this.options.dictionary.inputAlt,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (key === "ArrowDown") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="src"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    const node = element.querySelector(`input[name="title"]`);
                                    node?.focus();
                                }
                            }
                        });
                        const title = view.createInput({
                            id: "title",
                            name: this.options.dictionary.inputTitle,
                            onKey: ({ key })=>{
                                if (key === "ArrowUp") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                            },
                            onBoundary: (boundary)=>{
                                if (boundary === "left") {
                                    const node = element.querySelector(`input[name="alt"]`);
                                    node?.focus();
                                }
                                if (boundary === "right") {
                                    editor.chain().focus().run();
                                }
                            }
                        });
                        const open = view.createButton({
                            id: "open",
                            name: this.options.dictionary.videoOpen,
                            view: icon("open"),
                            onClick: ()=>{
                                const attrs = editor.getAttributes(this.name);
                                if (attrs.src) {
                                    window.open(attrs.src, attrs.target);
                                }
                            }
                        });
                        const upload = view.createUpload({
                            id: "upload",
                            name: this.options.dictionary.videoUpload,
                            view: icon("upload"),
                            accept: "video/*",
                            onUpload: (element)=>{
                                const uploader = this.editor.storage.uploader;
                                if (element.files && uploader) {
                                    uploader.upload(element.files).then((items)=>items.forEach((item)=>{
                                            if (item.type.startsWith("video")) {
                                                editor.chain().setVideo({
                                                    src: item.url,
                                                    alt: item.name
                                                }).run();
                                            }
                                        }));
                                }
                            }
                        });
                        const remove = view.createButton({
                            id: "remove",
                            name: this.options.dictionary.videoDelete,
                            view: icon("remove"),
                            onClick: ()=>{
                                editor.chain().deleteSelection().run();
                            }
                        });
                        group.addEventListener("keydown", (e)=>{
                            if (e.key === "Enter") {
                                editor.chain().updateAttributes(this.name, {
                                    src: src.input.value,
                                    alt: alt.input.value,
                                    title: title.input.value
                                }).focus().run();
                            }
                        });
                        group.append(src.input);
                        group.append(alt.input);
                        group.append(title.input);
                        element.append(group);
                        element.append(open.button);
                        element.append(upload.button);
                        element.append(remove.button);
                    },
                    onUpdate: ({ editor, element })=>{
                        const attrs = editor.getAttributes(this.name);
                        const src = element.querySelector(`input[name="src"]`);
                        const alt = element.querySelector(`input[name="alt"]`);
                        const title = element.querySelector(`input[name="title"]`);
                        src.value = attrs.src ?? "";
                        alt.value = attrs.alt ?? "";
                        title.value = attrs.title ?? "";
                    }
                })
            })
        ];
    }
});

class InnerEditorView {
    static create(options) {
        return (_options)=>new InnerEditorView({
                ...options,
                ..._options,
                HTMLAttributes: {
                    ...options.HTMLAttributes,
                    ..._options.HTMLAttributes
                }
            });
    }
    get dom() {
        return this._root;
    }
    get view() {
        return this._view;
    }
    get node() {
        return this._node;
    }
    get getPos() {
        return this.options.getPos;
    }
    get HTMLAttributes() {
        return this.options.HTMLAttributes;
    }
    get $root() {
        return this._root;
    }
    get $editor() {
        return this._editor;
    }
    get $preview() {
        return this._preview;
    }
    update(node) {
        if (node.type !== this.options.node.type) {
            return false;
        }
        this._node = node;
        if (this.options.onUpdate) {
            this.options.onUpdate({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        if (this._view) {
            const state = this._view.state;
            const start = node.content.findDiffStart(state.doc.content);
            if (typeof start === "number") {
                const diff = node.content.findDiffEnd(state.doc.content);
                if (diff) {
                    let endA = diff.a;
                    let endB = diff.b;
                    const overlap = start - Math.min(endA, endB);
                    if (overlap > 0) {
                        endA += overlap;
                        endB += overlap;
                    }
                    this._view.dispatch(state.tr.replace(start, endB, node.slice(start, endA)).setMeta("fromOutside", true));
                }
            }
        }
        return true;
    }
    selectNode() {
        if (!this.editor.isEditable) {
            return;
        }
        if (this.options.onOpen) {
            this.options.onOpen({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        this._root.classList.add("ProseMirror-selectednode");
        this._root.classList.add("ProseMirror-selectedcard");
        this._editor.style.display = "block";
        this._view = new view.EditorView(this._editor, {
            state: state.EditorState.create({
                doc: this._node,
                plugins: [
                    keymap.keymap({
                        "Enter": commands.newlineInCode,
                        "Tab": (state, dispatch)=>{
                            if (dispatch) {
                                dispatch(state.tr.insertText("  "));
                            }
                            return true;
                        },
                        "Backspace": (state)=>{
                            if (state.selection.$anchor.parentOffset !== 0) {
                                return false;
                            }
                            return this.editor.chain().toggleNode(this._node.type.name, "paragraph").focus().run();
                        },
                        "Mod-Enter": ()=>{
                            const $view = this.editor.view;
                            const $state = $view.state;
                            const $to = $state.selection.to;
                            const $tr = $state.tr.replaceWith($to, $to, $state.schema.nodes.paragraph.createAndFill());
                            $view.dispatch($tr.setSelection(state.TextSelection.create($tr.doc, $to)));
                            $view.focus();
                            return true;
                        }
                    })
                ]
            }),
            dispatchTransaction: (tr)=>{
                if (!this._view) {
                    return;
                }
                const { state, transactions } = this._view.state.applyTransaction(tr);
                this._view.updateState(state);
                if (!tr.getMeta("fromOutside")) {
                    const $view = this.editor.view;
                    const $state = $view.state;
                    const $tr = $state.tr;
                    const $offset = transform.StepMap.offset(this.options.getPos() + 1);
                    transactions.forEach((transaction)=>{
                        transaction.steps.forEach((step)=>{
                            const mapped = step.map($offset);
                            if (!mapped) {
                                throw new Error("step discarded!");
                            }
                            $tr.step(mapped);
                        });
                    });
                    if ($tr.docChanged) {
                        $view.dispatch($tr);
                    }
                }
            }
        });
        this._view.focus();
    }
    deselectNode() {
        if (this.options.onClose) {
            this.options.onClose({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        if (this._view) {
            this._view.destroy();
        }
        this._view = undefined;
        this._root.classList.remove("ProseMirror-selectednode");
        this._root.classList.remove("ProseMirror-selectedcard");
        this._editor.style.display = "none";
    }
    stopEvent(event) {
        if (this._view && event.target) {
            return this._view.dom.contains(event.target);
        }
        return false;
    }
    ignoreMutation() {
        return true;
    }
    destroy() {
        this.deselectNode();
        if (this.options.onDestroy) {
            this.options.onDestroy({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        this.$root.remove();
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
        this._node = options.node;
        this._root = document.createElement(options.tag ?? "div");
        this._root.classList.add("ProseMirror-inner-editor");
        this._root.setAttribute("data-type", this._node.type.name);
        if (this.options.id) {
            this._root.setAttribute("name", this.options.id);
        }
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                this._root.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    this._root.style[key] = val;
                }
            }
        }
        for (const [key, value] of Object.entries(core.mergeAttributes(this.options.HTMLAttributes))){
            if (value !== undefined && value !== null) {
                this._root.setAttribute(key, value);
            }
        }
        this._editor = document.createElement("div");
        this._preview = document.createElement("div");
        this._editor.style.display = "none";
        this._editor.classList.add("ProseMirror-inner-editor-editor");
        this._preview.classList.add("ProseMirror-inner-editor-preview");
        this._root.append(this._editor);
        this._root.append(this._preview);
        if (this.options.onInit) {
            this.options.onInit({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
        if (this.options.onRender) {
            this.options.onRender({
                view: this,
                editor: this.editor,
                $root: this._root,
                $editor: this._editor,
                $preview: this._preview
            });
        }
    }
}

function debounce(delay, apply) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        // @ts-expect-error
        timer = setTimeout(()=>apply(...args), delay);
    };
}
function configure(extensions, node, options, overwrite) {
    if (options !== false) {
        if (typeof options === "boolean") {
            extensions.push(node.configure(overwrite));
        } else {
            extensions.push(node.configure({
                ...overwrite,
                ...options
            }));
        }
    }
}

mermaid__default.default.initialize({
    startOnLoad: false
});
const Mermaid = core.Node.create({
    name: "mermaid",
    group: "block",
    marks: "",
    content: "text*",
    atom: true,
    code: true,
    defining: true,
    isolating: true,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Mermaid",
                inputHelp: "Help",
                inputGraph: "Enter or paste the mermaid code"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "containerDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        const collect = (node)=>{
                            return (node.children ?? []).reduce((a, i)=>{
                                if (i.type === "text") {
                                    return a + i.value;
                                } else {
                                    return a + collect(i);
                                }
                            }, "");
                        };
                        state.openNode(type).addText(collect(node)).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "containerDirective",
                            name: this.name
                        }).next(node.content).closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("mermaid"),
                        keywords: "mermaid,graph",
                        action: (editor)=>editor.chain().setMermaid("graph TD;\n  A-->B;  A-->C;\n  B-->D;\n  C-->D;").focus().run()
                    }
                ]
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`,
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            node.textContent
        ];
    },
    addNodeView () {
        const render = debounce(300, (code, node)=>{
            const dom = document.createElement("div");
            dom.id = `${this.name}-${Math.random().toString(36).substring(2, 10)}`;
            mermaid__default.default.render(dom.id, code).then(({ svg, bindFunctions })=>{
                dom.innerHTML = svg;
                bindFunctions?.(dom);
                node.innerHTML = dom.outerHTML;
            }).catch((reason)=>{
                document.querySelector(`#d${dom.id}`)?.remove();
                node.classList.add("ProseMirror-card-error");
                node.innerHTML = reason;
            });
        });
        return InnerEditorView.create({
            HTMLAttributes: this.options.HTMLAttributes,
            onRender: ({ view })=>{
                view.$preview.classList.remove("ProseMirror-card-empty");
                view.$preview.classList.remove("ProseMirror-card-error");
                if (!view.node.textContent) {
                    view.$preview.classList.add("ProseMirror-card-empty");
                    view.$preview.innerHTML = this.options.dictionary.inputGraph;
                } else {
                    render(view.node.textContent, view.$preview);
                }
            }
        });
    },
    addCommands () {
        return {
            setMermaid: (code)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        content: [
                            {
                                type: "text",
                                text: code
                            }
                        ]
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.textblockTypeInputRule({
                find: /^:::mermaid$/,
                type: this.type
            })
        ];
    }
});

const MathBlock = core.Node.create({
    name: "mathBlock",
    group: "block",
    marks: "",
    content: "text*",
    atom: true,
    code: true,
    defining: true,
    isolating: true,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Math Block",
                inputMath: "Enter or paste the equation",
                inputHelp: "Help"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "math",
                    apply: (state, node, type)=>{
                        const code = node.value;
                        state.openNode(type).addText(code).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "math",
                            value: node.textContent
                        });
                    }
                },
                hooks: {
                    beforeInit: (processor)=>processor.use(remarkMath__default.default)
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("math"),
                        keywords: "mathblock,sxgs,gsk",
                        action: (editor)=>editor.chain().setMathBlock("E = mc^2").focus().run()
                    }
                ]
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`,
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            node.textContent
        ];
    },
    addNodeView () {
        return InnerEditorView.create({
            HTMLAttributes: this.options.HTMLAttributes,
            onRender: ({ view })=>{
                view.$preview.classList.remove("ProseMirror-card-empty");
                view.$preview.classList.remove("ProseMirror-card-error");
                try {
                    if (!view.node.textContent) {
                        view.$preview.classList.add("ProseMirror-card-empty");
                        view.$preview.innerHTML = this.options.dictionary.inputMath;
                    } else {
                        katex__default.default.render(view.node.textContent, view.$preview);
                    }
                } catch (e) {
                    view.$preview.classList.add("ProseMirror-card-error");
                    view.$preview.innerHTML = e.message;
                }
            }
        });
    },
    addCommands () {
        return {
            setMathBlock: (code)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        content: [
                            {
                                type: "text",
                                text: code
                            }
                        ]
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.textblockTypeInputRule({
                find: /^\$\$\s$/,
                type: this.type
            }),
            core.textblockTypeInputRule({
                find: /^:::math$/,
                type: this.type
            })
        ];
    }
});

const MathInline = core.Node.create({
    name: "mathInline",
    inline: true,
    group: "inline",
    atom: true,
    draggable: true,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "Math Inline",
                emptyMath: "Add a Tex equation",
                inputMath: "Enter or paste the equation",
                inputHelp: "Help"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "inlineMath",
                    apply: (state, node, type)=>{
                        state.addNode(type, {
                            value: node.value
                        });
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.addNode({
                            type: "inlineMath",
                            value: node.attrs.value
                        });
                    }
                },
                hooks: {
                    beforeInit: (processor)=>processor.use(remarkMath__default.default)
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("math"),
                        keywords: "mathinline,sxgs,hngs",
                        action: (editor)=>editor.chain().setMathInline("E = mc^2").focus().run()
                    }
                ]
            }
        };
    },
    addAttributes () {
        return {
            value: {
                default: ""
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`,
                preserveWhitespace: "full",
                getAttrs: (node)=>({
                        value: node.textContent
                    })
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            node.attrs.value
        ];
    },
    addNodeView () {
        return InnerRenderView.create({
            tag: "span",
            HTMLAttributes: this.options.HTMLAttributes,
            onRender: ({ view })=>{
                try {
                    if (!view.node.attrs.value) {
                        const span = document.createElement("span");
                        span.classList.add("ProseMirror-empty");
                        span.textContent = this.options.dictionary.inputMath;
                        view.$root.innerHTML = span.outerHTML;
                    } else {
                        katex__default.default.render(view.node.attrs.value, view.$root);
                    }
                } catch (e) {
                    const span = document.createElement("span");
                    span.classList.add("ProseMirror-error");
                    span.textContent = e.message;
                    view.$root.innerHTML = span.outerHTML;
                }
            }
        });
    },
    addCommands () {
        return {
            setMathInline: (code)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        attrs: {
                            value: code
                        }
                    });
            }
        };
    },
    addInputRules () {
        return [
            new core.InputRule({
                find: /\$(.+)\$/,
                handler: ({ state, range, match })=>{
                    const { from, to } = range;
                    const $start = state.doc.resolve(from);
                    const index = $start.index();
                    const $end = state.doc.resolve(to);
                    if (!$start.parent.canReplaceWith(index, $end.index(), this.type)) {
                        return null;
                    }
                    const value = match[1];
                    state.tr.replaceRangeWith(from, to, this.type.create({
                        value
                    }, this.type.schema.text(value)));
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>editor.isEditable && editor.isActive(this.name),
                    tippy: ({ options })=>({
                            ...options,
                            onMount: (i)=>i.popper.querySelector("input")?.focus()
                        }),
                    onInit: ({ view, editor, element })=>{
                        const code = view.createInput({
                            name: this.options.dictionary.inputMath,
                            onInput: (value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    value
                                }).setNodeSelection(editor.state.selection.from).run();
                            },
                            onEnter: (value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    value
                                }).setTextSelection(editor.state.selection.from + 1).focus().run();
                            },
                            onBoundary: (boundary, value)=>{
                                editor.chain().updateAttributes(this.name, {
                                    value
                                }).setTextSelection(editor.state.selection.from + (boundary === "left" ? -1 : 1)).focus().run();
                            }
                        });
                        const help = view.createButton({
                            name: this.options.dictionary.inputHelp,
                            view: icon("help"),
                            onClick: ()=>window.open("https://katex.org/")
                        });
                        code.input.classList.add("ProseMirror-code");
                        element.append(code.input);
                        element.append(help.button);
                    },
                    onUpdate: ({ editor, element })=>{
                        const code = element.querySelector("input");
                        if (code) {
                            code.value = editor.getAttributes(this.name)?.value ?? "";
                        }
                    }
                })
            })
        ];
    }
});

class ParserStack {
    addText(value) {
        const nodes = this.nodes[this.nodes.length - 1].content;
        const last = nodes[nodes.length - 1];
        const node = this.editor.schema.text(value ?? "", this.marks);
        const merged = last && this.maybeMerge(last, node);
        if (merged) {
            nodes[nodes.length - 1] = merged;
        } else {
            nodes.push(node);
        }
    }
    openMark(type, attrs) {
        const mark = type.create(attrs);
        this.marks = mark.addToSet(this.marks);
    }
    closeMark(type) {
        this.marks = type.removeFromSet(this.marks);
    }
    openNode(type, attrs) {
        this.nodes.push({
            type,
            attrs,
            content: []
        });
    }
    addNode(type, attrs, content) {
        const node = type.createAndFill(attrs, content, this.marks);
        if (!node) {
            return null;
        }
        if (this.nodes.length) {
            this.nodes[this.nodes.length - 1].content.push(node);
        }
        return node;
    }
    closeNode() {
        this.marks = model.Mark.none;
        const node = this.nodes.pop();
        if (!node) {
            return null;
        }
        return this.addNode(node.type, node.attrs, node.content);
    }
    parse() {
        let doc = null;
        do {
            doc = this.closeNode();
        }while (this.nodes.length)
        return doc;
    }
    maybeMerge(a, b) {
        if (a.isText && b.isText && model.Mark.sameSet(a.marks, b.marks)) {
            // @ts-expect-error
            return this.editor.schema.text(a.text + b.text, a.marks);
        }
    }
    constructor(editor){
        this.editor = editor;
        this.marks = model.Mark.none;
        this.nodes = [];
    }
}

class ParserState {
    parse(markdown) {
        for (const storage of Object.values(this.editor.storage)){
            if (storage?.markdown?.hooks?.beforeParse) {
                markdown = storage.markdown.hooks.beforeParse(markdown);
            }
        }
        let root = this.processor.runSync(this.processor.parse(markdown));
        for (const storage of Object.values(this.editor.storage)){
            if (storage?.markdown?.hooks?.afterParse) {
                root = storage.markdown.hooks.afterParse(root);
            }
        }
        this.next(root);
        return this.stack.parse();
    }
    next(nodes = []) {
        for (const node of [
            nodes
        ].flat()){
            this.runNode(node);
        }
        return this;
    }
    addText(value) {
        this.stack.addText(value);
        return this;
    }
    addNode(type, attrs, content) {
        this.stack.addNode(type, attrs, content);
        return this;
    }
    openNode(type, attrs) {
        this.stack.openNode(type, attrs);
        return this;
    }
    closeNode() {
        this.stack.closeNode();
        return this;
    }
    openMark(type, attrs) {
        this.stack.openMark(type, attrs);
        return this;
    }
    closeMark(type) {
        this.stack.closeMark(type);
        return this;
    }
    runNode(node) {
        const extension = this.matchNode(node);
        if (extension) {
            const name = extension.name;
            const type = this.editor.schema[extension.type === "node" ? "nodes" : "marks"][name];
            const storage = extension.storage;
            storage?.markdown?.parser?.apply(this, node, type);
        }
    }
    matchNode(node) {
        const extension = this.editor.extensionManager.extensions.find((e)=>{
            const name = e.name;
            const storage = e.storage;
            return name !== "markdown" && storage?.markdown?.parser?.match(node);
        });
        if (!extension) {
            console.warn(`No parser match ${node.type}`);
            return undefined;
        }
        return extension;
    }
    constructor(editor, processor){
        this.stack = new ParserStack(editor);
        this.editor = editor;
        this.processor = processor;
    }
}

class SerializerStack {
    openMark(mark, node) {
        const isIn = mark.isInSet(this.marks);
        if (isIn) {
            return;
        }
        this.marks = mark.addToSet(this.marks);
        this.openNode(node);
    }
    closeMark(mark) {
        if (!mark.isInSet(this.marks)) {
            return;
        }
        this.marks = mark.type.removeFromSet(this.marks);
        this.closeNode();
    }
    openNode(node) {
        this.nodes.push(node);
    }
    addNode(node) {
        if (this.nodes.length) {
            const top = this.nodes[this.nodes.length - 1];
            if (!top.children) {
                top.children = [];
            }
            top.children.push(node);
        }
        return node;
    }
    closeNode() {
        const node = this.nodes.pop();
        if (!node) {
            return null;
        }
        return this.addNode(node);
    }
    serialize() {
        let doc = null;
        do {
            doc = this.closeNode();
        }while (this.nodes.length)
        return doc;
    }
    constructor(editor){
        this.editor = editor;
        this.marks = model.Mark.none;
        this.nodes = [];
    }
}

class SerializerState {
    serialize(document) {
        this.next(document);
        let root = this.stack.serialize();
        for (const storage of Object.values(this.editor.storage)){
            if (storage?.markdown?.hooks?.beforeSerialize) {
                root = storage.markdown.hooks.beforeSerialize(root);
            }
        }
        console.log(root);
        let markdown = this.processor.stringify(root);
        for (const storage of Object.values(this.editor.storage)){
            if (storage?.markdown?.hooks?.afterSerialize) {
                markdown = storage.markdown.hooks.afterSerialize(markdown);
            }
        }
        return markdown;
    }
    next(nodes) {
        if (this.isFragment(nodes)) {
            nodes.forEach((node)=>this.runNode(node));
            return this;
        }
        this.runNode(nodes);
        return this;
    }
    addNode(node) {
        this.stack.addNode(node);
        return this;
    }
    openNode(node) {
        this.stack.openNode(node);
        return this;
    }
    closeNode() {
        this.stack.closeNode();
        return this;
    }
    withMark(mark, node) {
        this.stack.openMark(mark, node);
        return this;
    }
    isFragment(node) {
        return Object.hasOwn(node, "size");
    }
    runNode(node) {
        const next = node.marks.every((mark)=>{
            const storage = this.matchNode(mark)?.storage;
            return !storage?.markdown?.serializer?.apply(this, mark, node);
        });
        if (next) {
            const storage = this.matchNode(node)?.storage;
            storage?.markdown?.serializer?.apply(this, node);
        }
        for (const mark of node.marks){
            this.stack.closeMark(mark);
        }
    }
    matchNode(node) {
        const extension = this.editor.extensionManager.extensions.find((e)=>{
            const name = e.name;
            const storage = e.storage;
            return name !== "markdown" && storage?.markdown?.serializer?.match(node);
        });
        if (!extension) {
            console.warn(`No serializer match ${node.type.name}`);
            return undefined;
        }
        return extension;
    }
    constructor(editor, processor){
        this.stack = new SerializerStack(editor);
        this.editor = editor;
        this.processor = processor;
    }
}

const Markdown = core.Extension.create({
    name: "markdown",
    addStorage () {
        return {};
    },
    onBeforeCreate () {
        // processor
        this.storage.processor = unified.unified().use(remarkParse__default.default).use(remarkStringify__default.default).use(remarkGfm__default.default).use(remarkDirective__default.default);
        for (const [key, value] of Object.entries(this.editor.storage)){
            if (key !== this.name && value?.markdown?.hooks?.beforeInit) {
                this.storage.processor = value.markdown.hooks.beforeInit(this.storage.processor);
            }
        }
        for (const [key, value] of Object.entries(this.editor.storage)){
            if (key !== this.name && value?.markdown?.hooks?.afterInit) {
                this.storage.processor = value.markdown.hooks.afterInit(this.storage.processor);
            }
        }
        // parser
        this.storage.parse = (markdown)=>{
            return new ParserState(this.editor, this.storage.processor).parse(markdown);
        };
        // serializer
        this.storage.serialize = (document)=>{
            return new SerializerState(this.editor, this.storage.processor).serialize(document);
        };
        // get
        this.storage.get = ()=>{
            return this.editor.storage[this.name].serialize(this.editor.state.doc);
        };
        // set
        this.storage.set = (markdown, emit)=>{
            const tr = this.editor.state.tr;
            const doc = this.editor.storage[this.name].parse(markdown);
            this.editor.view.dispatch(tr.replaceWith(0, tr.doc.content.size, doc).setMeta("preventUpdate", !emit));
        };
    }
});

const Uploader = core.Extension.create({
    name: "uploader",
    addOptions () {
        return {
            upload: (files)=>{
                const items = [];
                for(let i = 0; i < files.length; i++){
                    const file = files.item(i);
                    if (!file) {
                        continue;
                    }
                    items.push(file);
                }
                const upload = (file)=>{
                    return new Promise((resolve)=>{
                        const reader = new FileReader();
                        reader.addEventListener("load", ()=>resolve({
                                name: file.name,
                                type: file.type,
                                size: file.size,
                                url: reader.result
                            }), false);
                        reader.readAsDataURL(file);
                    });
                };
                return Promise.all(items.map((item)=>upload(item)));
            }
        };
    },
    addStorage () {
        return {
            upload: this.options.upload
        };
    },
    addProseMirrorPlugins () {
        const upload = (files)=>{
            this.options.upload(files).then((items)=>items.forEach((item)=>{
                    for (const storage of Object.values(this.editor.storage)){
                        if (storage?.uploader) {
                            for (const uploader of Array.isArray(storage.uploader) ? storage.uploader : [
                                storage.uploader
                            ]){
                                if (uploader.match(this.editor, item)) {
                                    uploader.apply(this.editor, item);
                                    return;
                                }
                            }
                        }
                    }
                }));
        };
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-handler`),
                props: {
                    handlePaste: (_view, event)=>{
                        const editable = this.editor.isEditable;
                        const { clipboardData } = event;
                        if (!editable || !clipboardData || clipboardData.files.length === 0) {
                            return false;
                        }
                        upload(clipboardData.files);
                        return true;
                    },
                    handleDrop: (_view, event)=>{
                        if (!(event instanceof DragEvent) || !this.editor.isEditable) {
                            return false;
                        }
                        const { files } = event.dataTransfer ?? {};
                        if (!files || files.length <= 0) {
                            return false;
                        }
                        upload(files);
                        return true;
                    }
                }
            })
        ];
    }
});

const Plantuml = core.Node.create({
    name: "plantuml",
    group: "block",
    marks: "",
    content: "text*",
    atom: true,
    code: true,
    defining: true,
    isolating: true,
    addOptions () {
        return {
            HTMLAttributes: {},
            dictionary: {
                name: "PlantUML",
                inputHelp: "Help",
                inputGraph: "Enter or paste the plantuml code"
            }
        };
    },
    addStorage () {
        return {
            markdown: {
                parser: {
                    match: (node)=>node.type === "containerDirective" && node.name === this.name,
                    apply: (state, node, type)=>{
                        const collect = (node)=>{
                            return (node.children ?? []).reduce((a, i)=>{
                                if (i.type === "text") {
                                    return a + i.value;
                                } else {
                                    return a + collect(i);
                                }
                            }, "");
                        };
                        state.openNode(type).addText(collect(node)).closeNode();
                    }
                },
                serializer: {
                    match: (node)=>node.type.name === this.name,
                    apply: (state, node)=>{
                        state.openNode({
                            type: "containerDirective",
                            name: this.name
                        }).next(node.content).closeNode();
                    }
                }
            },
            blockMenu: {
                items: [
                    {
                        id: this.name,
                        name: this.options.dictionary.name,
                        icon: icon("plantuml"),
                        keywords: "plantuml,graph",
                        action: (editor)=>editor.chain().setPlantuml("@startuml\nBob -> Alice : hello\n@enduml").focus().run()
                    }
                ]
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`,
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "span",
            core.mergeAttributes({
                "data-type": this.name
            }, this.options.HTMLAttributes, HTMLAttributes),
            node.textContent
        ];
    },
    addNodeView () {
        const render = debounce(300, (code, node)=>{
            try {
                const dom = document.createElement("img");
                dom.src = `https://www.plantuml.com/plantuml/svg/${plantumlEncoder.encode(code)}`;
                dom.alt = code;
                node.innerHTML = dom.outerHTML;
            } catch (e) {
                node.classList.add("ProseMirror-card-error");
                node.innerHTML = e.message;
            }
        });
        return InnerEditorView.create({
            HTMLAttributes: this.options.HTMLAttributes,
            onRender: ({ view })=>{
                view.$preview.classList.remove("ProseMirror-card-empty");
                view.$preview.classList.remove("ProseMirror-card-error");
                if (!view.node.textContent) {
                    view.$preview.classList.add("ProseMirror-card-empty");
                    view.$preview.innerHTML = this.options.dictionary.inputGraph;
                } else {
                    render(view.node.textContent, view.$preview);
                }
            }
        });
    },
    addCommands () {
        return {
            setPlantuml: (code)=>{
                return ({ commands })=>commands.insertContent({
                        type: this.name,
                        content: [
                            {
                                type: "text",
                                text: code
                            }
                        ]
                    });
            }
        };
    },
    addInputRules () {
        return [
            core.textblockTypeInputRule({
                find: /^:::plantuml$/,
                type: this.type
            })
        ];
    }
});

const BlockMenu = core.Extension.create({
    name: "blockMenu",
    addOptions () {
        return {
            items: [
                "heading1",
                "heading2",
                "heading3",
                "|",
                "orderedList",
                "bulletList",
                "taskList",
                "|",
                "image",
                "audio",
                "video",
                "|",
                "blockquote",
                "codeBlock",
                "mathBlock",
                "mermaid",
                "plantuml",
                "|",
                "horizontalRule",
                "table",
                "details",
                "embed"
            ],
            dictionary: {
                lineEmpty: "Enter '/' to insert block...",
                lineSlash: "Continue typing to filter...",
                queryEmpty: "No results found"
            }
        };
    },
    addProseMirrorPlugins () {
        const mappings = new Map();
        for (const storage of Object.values(this.editor.storage)){
            if (storage?.blockMenu) {
                if (storage.blockMenu.items) {
                    const menus = Array.isArray(storage.blockMenu.items) ? storage.blockMenu.items : [
                        storage.blockMenu.items
                    ];
                    for (const menu of menus){
                        mappings.set(menu.id, menu);
                    }
                }
            }
        }
        if (!mappings.size || !this.options.items.length) {
            return [];
        }
        return [
            suggestion.Suggestion({
                editor: this.editor,
                pluginKey: new state.PluginKey(`${this.name}-suggestion`),
                char: "/",
                items: ({ query })=>{
                    const filtered = [];
                    for (const name of this.options.items){
                        if (name === "|") {
                            filtered.push(name);
                            continue;
                        }
                        const item = mappings.get(name);
                        if (!item) {
                            continue;
                        }
                        if (query !== "") {
                            const q = query.toLowerCase();
                            if (!item.name.toLowerCase().includes(q) && !item.keywords.toLowerCase().includes(q)) {
                                continue;
                            }
                        }
                        filtered.push({
                            action: ({ editor, view })=>{
                                // clear search
                                const { state, dispatch } = editor.view;
                                const from = state.selection.$from;
                                const tr = state.tr.deleteRange(from.start(), from.pos);
                                dispatch(tr);
                                // command
                                item.action(editor, view);
                                // focus
                                editor.view.focus();
                            },
                            render: ({ view, element })=>view.createButton(element, {
                                    id: name,
                                    name: item.name,
                                    icon: item.icon,
                                    shortcut: item.shortcut
                                })
                        });
                    }
                    const items = [];
                    for(let i = 0; i < filtered.length; i++){
                        const item = filtered[i];
                        if (item === "|") {
                            if (i === 0 || i === filtered.length - 1) {
                                continue;
                            }
                            if (filtered[i + 1] === "|") {
                                continue;
                            }
                            if (items.length === 0) {
                                continue;
                            }
                            if (items[items.length - 1] === "|") {
                                continue;
                            }
                        }
                        items.push(item);
                    }
                    return items;
                },
                render: BlockMenuView.create({
                    editor: this.editor,
                    dictionary: {
                        empty: this.options.dictionary.queryEmpty
                    }
                })
            }),
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-placeholder`),
                props: {
                    decorations: (state)=>{
                        const parent = core.findParentNode((node)=>node.type.name === "paragraph")(state.selection);
                        if (!parent) {
                            return;
                        }
                        const decorations = [];
                        const isEmpty = parent && parent.node.content.size === 0;
                        const isSlash = parent && parent.node.textContent === "/";
                        const isTopLevel = state.selection.$from.depth === 1;
                        if (isTopLevel) {
                            if (isEmpty) {
                                decorations.push(view.Decoration.node(parent.pos, parent.pos + parent.node.nodeSize, {
                                    "class": "ProseMirror-bm-placeholder",
                                    "data-empty": this.options.dictionary.lineEmpty
                                }));
                            }
                            if (isSlash) {
                                decorations.push(view.Decoration.node(parent.pos, parent.pos + parent.node.nodeSize, {
                                    "class": "ProseMirror-bm-placeholder",
                                    "data-empty": ` ${this.options.dictionary.lineSlash}`
                                }));
                            }
                            return view.DecorationSet.create(state.doc, decorations);
                        }
                        return null;
                    }
                }
            })
        ];
    }
});

// Copy from: https://github.com/ProseMirror/prosemirror-view/blob/master/src/clipboard.ts
let _detachedDoc = null;
const wrapMap = {
    thead: [
        "table"
    ],
    tbody: [
        "table"
    ],
    tfoot: [
        "table"
    ],
    caption: [
        "table"
    ],
    colgroup: [
        "table"
    ],
    col: [
        "table",
        "colgroup"
    ],
    tr: [
        "table",
        "tbody"
    ],
    td: [
        "table",
        "tbody",
        "tr"
    ],
    th: [
        "table",
        "tbody",
        "tr"
    ]
};
function detachedDoc() {
    return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
function serializeForClipboard(view, slice) {
    const context = [];
    let { openStart, openEnd, content } = slice;
    while(openStart > 1 && openEnd > 1 && content.childCount === 1 && content.firstChild.childCount === 1){
        openStart -= 1;
        openEnd -= 1;
        const node = content.firstChild;
        context.push(node.type.name, node.attrs !== node.type.defaultAttrs ? node.attrs : null);
        content = node.content;
    }
    const serializer = view.someProp("clipboardSerializer") || model.DOMSerializer.fromSchema(view.state.schema);
    const doc = detachedDoc();
    const wrap = doc.createElement("div");
    wrap.appendChild(serializer.serializeFragment(content, {
        document: doc
    }));
    let firstChild = wrap.firstChild;
    let needsWrap;
    let wrappers = 0;
    // eslint-disable-next-line no-cond-assign
    while(firstChild && firstChild.nodeType === 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])){
        for(let i = needsWrap.length - 1; i >= 0; i--){
            const wrapper = doc.createElement(needsWrap[i]);
            while(wrap.firstChild)wrapper.appendChild(wrap.firstChild);
            wrap.appendChild(wrapper);
            wrappers++;
        }
        firstChild = wrap.firstChild;
    }
    if (firstChild && firstChild.nodeType === 1) {
        firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
    }
    const text = view.someProp("clipboardTextSerializer", (f)=>f(slice, view)) || slice.content.textBetween(0, slice.content.size, "\n\n");
    return {
        dom: wrap,
        text
    };
}

class ClickMenuView {
    show(active) {
        if (active.node.type.name === "listItem") {
            this.popover.setProps({
                getReferenceClientRect: ()=>active.dom.getBoundingClientRect(),
                offset: [
                    0,
                    30
                ]
            });
        } else {
            this.popover.setProps({
                getReferenceClientRect: ()=>active.dom.getBoundingClientRect(),
                offset: [
                    0,
                    10
                ]
            });
        }
        if (this._active?.dom !== active.dom) {
            this.popover.hide();
        }
        this._active = active;
        this.popover.show();
    }
    hide() {
        this.popover.hide();
    }
    keydown(_event) {
        this.hide();
    }
    drop(_event) {
        this._dragging = false;
    }
    dragstart(event) {
        this._dragging = true;
        const view = this.editor.view;
        const selection = this._selection;
        if (event.dataTransfer && selection) {
            const slice = selection.content();
            view.dragging = {
                slice,
                move: true
            };
            const { dom, text } = serializeForClipboard(view, slice);
            event.dataTransfer.effectAllowed = "copyMove";
            event.dataTransfer.clearData();
            event.dataTransfer.setData("text/html", dom.innerHTML);
            event.dataTransfer.setData("text/plain", text);
        }
    }
    dragover(event) {
        if (this._dragging) {
            const view = this.editor.view;
            const root = view.dom.parentElement;
            if (!root) {
                return;
            }
            const rect = root.getBoundingClientRect();
            if (root.scrollHeight > root.clientHeight) {
                if (root.scrollTop > 0 && Math.abs(event.y - rect.y) < 20) {
                    root.scrollTop = root.scrollTop > 10 ? root.scrollTop - 10 : 0;
                    return;
                }
                if (Math.round(root.scrollTop + rect.height) < Math.round(view.dom.getBoundingClientRect().height) && Math.abs(event.y - (rect.height + rect.y)) < 20) {
                    root.scrollTop = root.scrollTop + 10;
                }
            }
        }
    }
    dragenter(_event) {
        this._dragging = true;
    }
    dragleave(_event) {
        this._dragging = false;
    }
    mouseup(_event) {
        if (!this._dragging) {
            requestAnimationFrame(()=>{
                this.editor.view.focus();
            });
            return;
        }
        this._dragging = false;
        this._selection = undefined;
    }
    mousedown(_event) {
        const { state: state$1, view } = this.editor;
        const active = this._active;
        if (active && state.NodeSelection.isSelectable(active.node)) {
            const selection = state.NodeSelection.create(state$1.doc, active.pos.pos - (active.node.isLeaf ? 0 : 1));
            view.dispatch(state$1.tr.setSelection(selection));
            view.focus();
            this._selection = selection;
        }
    }
    mousemove(event) {
        const { view } = this.editor;
        if (view.composing || !view.editable || !event.target) {
            return false;
        }
        clearTimeout(this._timer);
        // @ts-expect-error
        this._timer = setTimeout(()=>{
            const active = this._find(event);
            if (active) {
                this.show(active);
            } else {
                this.hide();
            }
        }, 8);
        return false;
    }
    plus() {
        if (this._active) {
            const { pos, node } = this._active;
            this.editor.chain().insertContentAt(pos.pos + node.nodeSize, {
                type: "paragraph"
            }).setTextSelection(pos.pos + node.nodeSize).focus().run();
        }
    }
    destroy() {
        this.popover.destroy();
        this.element.remove();
    }
    _element() {
        const element = document.createElement("div");
        element.classList.add("ProseMirror-cm");
        if (this.options.class) {
            for (const item of Array.isArray(this.options.class) ? this.options.class : [
                this.options.class
            ]){
                element.classList.add(item);
            }
        }
        if (this.options.style) {
            for (const item of Array.isArray(this.options.style) ? this.options.style : [
                this.options.style
            ]){
                for (const [key, val] of Object.entries(item)){
                    // @ts-expect-error
                    element.style[key] = val;
                }
            }
        }
        const plus = document.createElement("div");
        plus.innerHTML = icon("plus");
        plus.classList.add("ProseMirror-cm-plus");
        plus.addEventListener("click", this.plus.bind(this));
        const drag = document.createElement("div");
        drag.innerHTML = icon("drag");
        drag.classList.add("ProseMirror-cm-drag");
        drag.draggable = true;
        drag.addEventListener("mouseup", this.mouseup.bind(this));
        drag.addEventListener("mousedown", this.mousedown.bind(this));
        drag.addEventListener("dragstart", this.dragstart.bind(this));
        element.append(plus);
        element.append(drag);
        return element;
    }
    _popover() {
        const options = {
            appendTo: ()=>document.body,
            getReferenceClientRect: null,
            content: this.element,
            arrow: false,
            interactive: true,
            theme: "ProseMirror-none",
            animation: "shift-away",
            trigger: "manual",
            placement: "left-start",
            maxWidth: "none",
            offset: [
                0,
                10
            ],
            zIndex: 998
        };
        return tippy__default.default(document.body, this.options.tippy ? this.options.tippy({
            options,
            view: this,
            editor: this.editor
        }) : options);
    }
    _find(event) {
        const { view } = this.editor;
        if (view.composing || !view.editable || !event.target || !view.dom.parentElement) {
            return undefined;
        }
        let pos = 0;
        let node = event.target;
        if (node === view.dom) {
            node = document.elementFromPoint(event.x + 70, event.y);
        }
        if (node) {
            pos = view.posAtDOM(node, 0);
        }
        if (pos <= 0) {
            return undefined;
        }
        let _pos = view.state.doc.resolve(pos);
        let _node = _pos.node();
        if (_node.type.name === "doc") {
            const node = view.state.doc.nodeAt(pos);
            if (!node) {
                return undefined;
            }
            _node = node;
        }
        while(_node && (this._nodeIsNotBlock(_node) || this._nodeIsDisabled(_node) || this._nodeIsFirstChild(_pos))){
            _pos = view.state.doc.resolve(_pos.before());
            _node = _pos.node();
        }
        _pos = _pos.pos - _pos.parentOffset === 0 ? _pos : view.state.doc.resolve(_pos.pos - _pos.parentOffset);
        let _dom = view.nodeDOM(_pos.pos);
        if (!_dom) {
            _dom = view.nodeDOM(_pos.pos - 1);
        }
        while(_dom?.parentElement && _dom.parentElement !== view.dom.parentElement && _pos.pos === view.posAtDOM(_dom.parentElement, 0)){
            _dom = _dom.parentElement;
        }
        if (!_dom) {
            return undefined;
        }
        return {
            node: _node,
            pos: _pos,
            dom: _dom
        };
    }
    _nodeIsDisabled(node) {
        return this.editor.storage[node.type.name]?.clickMenu?.hide;
    }
    _nodeIsNotBlock(node) {
        return !node.type.isBlock || node.type.name === "doc";
    }
    _nodeIsFirstChild(pos) {
        let parent = pos.parent;
        const node = pos.node();
        if (parent === node) {
            parent = pos.node(pos.depth - 1);
        }
        if (!parent || parent.type.name === "doc") {
            return false;
        }
        return parent.firstChild === node;
    }
    constructor(options){
        this.editor = options.editor;
        this.options = options;
        this.element = this._element();
        this.popover = this._popover();
    }
}

const ClickMenu = core.Extension.create({
    name: "clickMenu",
    addProseMirrorPlugins () {
        const view = new ClickMenuView({
            editor: this.editor
        });
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-click-menu`),
                view: ()=>({
                        destroy: ()=>view.destroy()
                    }),
                props: {
                    handleDOMEvents: {
                        drop: (_view, event)=>view.drop(event),
                        keydown: (_view, event)=>view.keydown(event),
                        dragover: (_view, event)=>view.dragover(event),
                        dragenter: (_view, event)=>view.dragenter(event),
                        dragleave: (_view, event)=>view.dragleave(event),
                        mousemove: (_view, event)=>view.mousemove(event)
                    }
                }
            })
        ];
    }
});

function isInCode(state) {
    try {
        return core.isActive(state, "codeBlock") || core.isActive(state, "code");
    } catch (e) {
        return false;
    }
}
function isMarkdown(value) {
    // code-ish
    if (value.match(/^```/gm)) {
        return true;
    }
    // link-ish
    if (value.match(/\[[^]+]\(https?:\/\/\S+\)/gm)) {
        return true;
    }
    if (value.match(/\[[^]+]\(\/\S+\)/gm)) {
        return true;
    }
    // heading-ish
    if (value.match(/^#{1,6}\s+\S+/gm)) {
        return true;
    }
    // list-ish
    // noinspection RedundantIfStatementJS
    if (value.match(/^[\d-*].?\s\S+/gm)) {
        return true;
    }
    return false;
}
const Clipboard = core.Extension.create({
    name: "clipboard",
    addProseMirrorPlugins () {
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-handler`),
                props: {
                    handlePaste: (view, event)=>{
                        const editable = this.editor.isEditable;
                        const clipboardData = event.clipboardData;
                        if (!editable || !clipboardData || clipboardData.files.length !== 0) {
                            return false;
                        }
                        const text = clipboardData.getData("text/plain");
                        const html = clipboardData.getData("text/html");
                        if (html.length > 0) {
                            return false;
                        }
                        if (isInCode(view.state)) {
                            event.preventDefault();
                            view.dispatch(view.state.tr.insertText(text));
                            return true;
                        }
                        if (isMarkdown(text)) {
                            const slice = this.editor.storage.markdown.parse(text);
                            if (!slice || typeof slice === "string") {
                                return false;
                            }
                            const contentSlice = view.state.selection.content();
                            view.dispatch(view.state.tr.replaceSelection(new model.Slice(slice.content, contentSlice.openStart, contentSlice.openEnd)));
                            return true;
                        }
                        return false;
                    },
                    clipboardTextSerializer: (slice)=>{
                        const doc = this.editor.schema.topNodeType.createAndFill(undefined, slice.content);
                        if (!doc) {
                            return "";
                        }
                        return this.editor.storage.markdown.serialize(doc);
                    }
                }
            })
        ];
    }
});

const StarterKit = core.Extension.create({
    name: "starterKit",
    addExtensions () {
        const extensions = [];
        // marks
        configure(extensions, Subscript, this.options.sub);
        configure(extensions, Superscript, this.options.sup);
        configure(extensions, Bold, this.options.bold);
        configure(extensions, Code, this.options.code);
        configure(extensions, Link, this.options.link);
        configure(extensions, Italic, this.options.italic);
        configure(extensions, Strike, this.options.strike);
        configure(extensions, Highlight, this.options.highlight);
        configure(extensions, Underline, this.options.underline);
        // nodes
        configure(extensions, Text, this.options.text);
        configure(extensions, Document, this.options.document);
        configure(extensions, Heading, this.options.heading);
        configure(extensions, Paragraph, this.options.paragraph);
        configure(extensions, Blockquote, this.options.blockquote);
        configure(extensions, HardBreak, this.options.hardBreak);
        configure(extensions, CodeBlock, this.options.codeBlock);
        configure(extensions, HorizontalRule, this.options.horizontalRule);
        configure(extensions, BulletList, this.options.bulletList);
        configure(extensions, OrderedList, this.options.orderedList);
        configure(extensions, ListItem, this.options.listItem);
        configure(extensions, TaskList, this.options.taskList);
        configure(extensions, TaskItem, this.options.taskItem);
        configure(extensions, Details, this.options.details);
        configure(extensions, DetailsContent, this.options.detailsContent);
        configure(extensions, DetailsSummary, this.options.detailsSummary);
        configure(extensions, Table, this.options.table);
        configure(extensions, TableRow, this.options.tableRow);
        configure(extensions, TableCell, this.options.tableCell);
        configure(extensions, TableHeader, this.options.tableHeader);
        configure(extensions, Emoji, this.options.emoji);
        configure(extensions, Embed, this.options.embed);
        configure(extensions, Image, this.options.image);
        configure(extensions, Audio, this.options.audio);
        configure(extensions, Video, this.options.video);
        configure(extensions, Mermaid, this.options.mermaid);
        configure(extensions, Plantuml, this.options.plantuml);
        configure(extensions, MathBlock, this.options.mathBlock);
        configure(extensions, MathInline, this.options.mathInline);
        // extensions
        configure(extensions, Uploader, this.options.uploader);
        configure(extensions, Markdown, this.options.markdown);
        configure(extensions, Clipboard, this.options.clipboard);
        configure(extensions, BlockMenu, this.options.blockMenu);
        configure(extensions, ClickMenu, this.options.clickMenu);
        // tiptap
        configure(extensions, extensionHistory.History, this.options.history);
        configure(extensions, extensionGapcursor.Gapcursor, this.options.gapCursor);
        configure(extensions, extensionDropcursor.Dropcursor, this.options.dropCursor, {
            color: "var(--tiptap-color-primary)",
            width: 2
        });
        return extensions;
    }
});

const FloatMenu = core.Extension.create({
    name: "floatMenu",
    addOptions () {
        return {
            items: [
                "bold",
                "italic",
                "strike",
                "underline",
                "|",
                "code",
                "highlight",
                "link",
                "|",
                "superscript",
                "subscript"
            ]
        };
    },
    addProseMirrorPlugins () {
        const hiddens = new Set();
        const mappings = new Map();
        for (const [name, storage] of Object.entries(this.editor.storage)){
            if (storage?.floatMenu) {
                if (storage.floatMenu.hide) {
                    hiddens.add(name);
                }
                if (storage.floatMenu.items) {
                    const menus = Array.isArray(storage.floatMenu.items) ? storage.floatMenu.items : [
                        storage.floatMenu.items
                    ];
                    for (const menu of menus){
                        mappings.set(menu.id, menu);
                    }
                }
            }
        }
        if (!mappings.size || !this.options.items.length) {
            return [];
        }
        return [
            new state.Plugin({
                key: new state.PluginKey(`${this.name}-float-menu`),
                view: FloatMenuView.create({
                    editor: this.editor,
                    show: ({ editor })=>{
                        const { state, isEditable } = editor;
                        if (!isEditable) {
                            return false;
                        }
                        const { selection, doc } = state;
                        if (selection.empty) {
                            return false;
                        }
                        const isEmptyTextBlock = !doc.textBetween(selection.from, selection.to).length && core.isTextSelection(selection);
                        if (isEmptyTextBlock) {
                            return false;
                        }
                        for (const hidden of hiddens){
                            if (core.isActive(state, hidden)) {
                                return false;
                            }
                        }
                        return !core.isNodeSelection(selection);
                    },
                    onInit: ({ view, range, editor, element })=>{
                        for (const name of this.options.items){
                            if (name !== "|") {
                                const item = mappings.get(name);
                                if (item) {
                                    const button = view.createButton({
                                        id: name,
                                        name: item.name,
                                        view: item.view,
                                        shortcut: item.shortcut,
                                        onClick: ()=>item.action({
                                                view,
                                                range,
                                                editor,
                                                element: button.button
                                            })
                                    });
                                    element.append(button.button);
                                    item.onInit?.({
                                        view,
                                        range,
                                        editor,
                                        element: button.button
                                    });
                                }
                            } else {
                                const divider = view.createDivider();
                                element.append(divider.divider);
                            }
                        }
                    },
                    onUpdate: ({ view, range, editor, element })=>{
                        for (const name of this.options.items){
                            if (name !== "|") {
                                const dom = element.querySelector(`[name="${name}"]`);
                                const item = mappings.get(name);
                                if (dom && item) {
                                    item.onUpdate?.({
                                        view,
                                        range,
                                        editor,
                                        element: dom
                                    });
                                    if (item.active({
                                        view,
                                        range,
                                        editor,
                                        element: dom
                                    })) {
                                        dom.classList.add("active");
                                        continue;
                                    }
                                    dom.classList.remove("active");
                                }
                            }
                        }
                    },
                    onDestroy: ({ view, range, editor, element })=>{
                        for (const name of this.options.items){
                            if (name !== "|") {
                                const dom = element.querySelector(`[name="${name}"]`);
                                const item = mappings.get(name);
                                if (dom && item) {
                                    item.onDestroy?.({
                                        view,
                                        range,
                                        editor,
                                        element: dom
                                    });
                                }
                            }
                        }
                    }
                })
            })
        ];
    }
});

exports.Audio = Audio;
exports.BlockMenu = BlockMenu;
exports.BlockMenuView = BlockMenuView;
exports.Blockquote = Blockquote;
exports.Bold = Bold;
exports.BulletList = BulletList;
exports.ClickMenu = ClickMenu;
exports.ClickMenuView = ClickMenuView;
exports.Clipboard = Clipboard;
exports.Code = Code;
exports.CodeBlock = CodeBlock;
exports.Details = Details;
exports.DetailsContent = DetailsContent;
exports.DetailsSummary = DetailsSummary;
exports.Document = Document;
exports.Embed = Embed;
exports.Emoji = Emoji;
exports.FloatMenu = FloatMenu;
exports.FloatMenuView = FloatMenuView;
exports.HardBreak = HardBreak;
exports.Heading = Heading;
exports.Highlight = Highlight;
exports.HorizontalRule = HorizontalRule;
exports.Image = Image;
exports.InnerEditorView = InnerEditorView;
exports.InnerRenderView = InnerRenderView;
exports.InnerResizerView = InnerResizerView;
exports.Italic = Italic;
exports.Link = Link;
exports.ListItem = ListItem;
exports.Markdown = Markdown;
exports.MathBlock = MathBlock;
exports.MathInline = MathInline;
exports.Mermaid = Mermaid;
exports.OrderedList = OrderedList;
exports.Paragraph = Paragraph;
exports.StarterKit = StarterKit;
exports.Strike = Strike;
exports.Subscript = Subscript;
exports.Superscript = Superscript;
exports.Table = Table;
exports.TableCell = TableCell;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.TaskItem = TaskItem;
exports.TaskList = TaskList;
exports.Text = Text;
exports.Underline = Underline;
exports.Uploader = Uploader;
exports.Video = Video;
exports.colors = colors;
exports.configure = configure;
exports.debounce = debounce;
exports.findTable = findTable;
exports.getCellInTable = getCellInTable;
exports.getCellsInColumn = getCellsInColumn;
exports.getCellsInRow = getCellsInRow;
exports.icon = icon;
exports.isCellSelection = isCellSelection;
exports.isColumnSelected = isColumnSelected;
exports.isInCode = isInCode;
exports.isMarkdown = isMarkdown;
exports.isRectSelected = isRectSelected;
exports.isRowSelected = isRowSelected;
exports.isTableSelected = isTableSelected;
exports.parseAttributes = parseAttributes;
exports.remarkDecoration = remarkDecoration;
exports.selectColumn = selectColumn;
exports.selectRow = selectRow;
exports.selectRowOrColumn = selectRowOrColumn;
exports.selectTable = selectTable;
exports.setAttributes = setAttributes;
exports.unwrap = unwrap;
exports.wrap = wrap;
Object.keys(extensionGapcursor).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return extensionGapcursor[k]; }
  });
});
Object.keys(extensionHistory).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return extensionHistory[k]; }
  });
});
Object.keys(extensionDropcursor).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return extensionDropcursor[k]; }
  });
});
