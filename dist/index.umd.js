!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):(e||self).useelementwidth=n(e.react)}(this,function(e){return function(n){if("undefined"==typeof window)return 0;var t=e.useCallback(function(){var e,t;return(null==n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect().width)*((null===(t=window.visualViewport)||void 0===t?void 0:t.scale)||1)||0},[null==n?void 0:n.current]),i=e.useState(0),u=i[0],o=i[1],l=new ResizeObserver(function(e){window.requestAnimationFrame(function(){var t,i;null!=n&&n.current&&(null!=e&&null!==(t=e[0])&&void 0!==t&&null!==(i=t.contentBoxSize)&&void 0!==i&&i[0]?o(e[0].contentBoxSize[0].inlineSize):o(null!=e&&e.contentBoxSize?e[0].contentBoxSize.inlineSize:e[0].contentRect.width))})});return e.useEffect(function(){o(t())},[null==n?void 0:n.current]),e.useEffect(function(){if(null!=n&&n.current)return l.observe(null==n?void 0:n.current),function(){null!=n&&n.current&&l.unobserve(null==n?void 0:n.current)}}),u}});
//# sourceMappingURL=index.umd.js.map
