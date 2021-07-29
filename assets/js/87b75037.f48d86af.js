(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[5574],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return u}});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(h,o(o({ref:a},p),{},{components:t})):i.createElement(h,o({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3919:function(e,a,t){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}t.d(a,{b:function(){return i},Z:function(){return n}})},4996:function(e,a,t){"use strict";t.d(a,{C:function(){return r},Z:function(){return o}});var i=t(2263),n=t(3919);function r(){var e=(0,i.Z)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,r=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,n.b)(t))return t;if(l)return a+t;var p=t.startsWith(a)?t:a+t.replace(/^\//,"");return c?e+p:p}(r,t,e,a)}}}function o(e,a){return void 0===a&&(a={}),(0,r().withBaseUrl)(e,a)}},5798:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var i=t(2122),n=t(9756),r=(t(7294),t(3905)),o=t(4996),l=["components"],s={id:"devices",title:"Camera Devices",sidebar_label:"Camera Devices"},c=void 0,p={unversionedId:"guides/devices",id:"guides/devices",isDocsHomePage:!1,title:"Camera Devices",description:"What are camera devices?",source:"@site/docs/guides/DEVICES.mdx",sourceDirName:"guides",slug:"/guides/devices",permalink:"/react-native-vision-camera/docs/guides/devices",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/DEVICES.mdx",version:"current",frontMatter:{id:"devices",title:"Camera Devices",sidebar_label:"Camera Devices"},sidebar:"visionSidebar",previous:{title:"Getting Started",permalink:"/react-native-vision-camera/docs/guides"},next:{title:"Lifecycle",permalink:"/react-native-vision-camera/docs/guides/lifecycle"}},m=[{value:"What are camera devices?",id:"what-are-camera-devices",children:[]},{value:"Get available camera devices",id:"get-available-camera-devices",children:[]},{value:"The <code>useCameraDevices</code> hook",id:"the-usecameradevices-hook",children:[]},{value:"The <code>supportsParallelVideoProcessing</code> prop",id:"the-supportsparallelvideoprocessing-prop",children:[]}],d={toc:m};function u(e){var a=e.components,t=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",null,(0,r.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},(0,r.kt)("image",{href:(0,o.Z)("img/demo.gif"),x:"18",y:"33",width:"247",height:"469"}),(0,r.kt)("image",{href:(0,o.Z)("img/frame.png"),width:"283",height:"535"}))),(0,r.kt)("h3",{id:"what-are-camera-devices"},"What are camera devices?"),(0,r.kt)("p",null,'Camera devices are the physical (or "virtual") devices that can be used to record videos or capture photos.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Physical"),": A physical camera device is a ",(0,r.kt)("strong",{parentName:"p"},"camera lens on your phone"),". Different physical camera devices have different specifications, such as different capture formats, field of views, frame rates, focal lengths, and more. Some phones have multiple physical camera devices."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Examples: ",(0,r.kt)("em",{parentName:"p"},'"Backside Wide-Angle Camera"'),", ",(0,r.kt)("em",{parentName:"p"},'"Frontside Wide-Angle Camera (FaceTime HD)"'),", ",(0,r.kt)("em",{parentName:"p"},'"Ultra-Wide-Angle back camera"'),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Virtual"),": A virtual camera device is a ",(0,r.kt)("strong",{parentName:"p"},"combination of one or more physical camera devices"),", and provides features such as ",(0,r.kt)("em",{parentName:"p"},"virtual-device-switchover")," while zooming or ",(0,r.kt)("em",{parentName:"p"},"combined photo delivery")," from all physiscal cameras to produce higher quality images."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Examples: ",(0,r.kt)("em",{parentName:"p"},'"Triple-Camera"'),", ",(0,r.kt)("em",{parentName:"p"},'"Dual-Wide-Angle Camera"'))))),(0,r.kt)("h3",{id:"get-available-camera-devices"},"Get available camera devices"),(0,r.kt)("p",null,"To get a list of all available camera devices, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAvailableCameraDevices")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const devices = await Camera.getAvailableCameraDevices()\n")),(0,r.kt)("p",null,"Each camera device provides properties describing the features of this device. For example, a camera device provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"hasFlash")," property which is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the device supports activating the flash when taking photos or recording videos."),(0,r.kt)("p",null,"The most important properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"devices"),": A list of physical device types this camera device consists of. For a ",(0,r.kt)("strong",{parentName:"li"},"single physical camera device"),", this property is always an array of one element. ",(0,r.kt)("strong",{parentName:"li"},"For virtual multi-cameras")," this property contains all the physical camera devices that are combined to create this virtual multi-camera device"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"position"),": The position of the camera device relative to the phone (",(0,r.kt)("inlineCode",{parentName:"li"},"front"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"back"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasFlash"),": Whether this camera device supports using the flash to take photos or record videos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasTorch"),": Whether this camera device supports enabling/disabling the torch at any time (",(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/cameraprops.cameraprops-1#torch"},(0,r.kt)("inlineCode",{parentName:"a"},"Camera.torch")," prop"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isMultiCam"),": Determines whether the camera device is a virtual multi-camera device which contains multiple combined physical camera devices."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minZoom"),": The minimum available zoom factor. This can be ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," for any wide-angle camera, and a value lower than ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"0.5"),') for ultra-wide-angle cameras ("fish-eye"). When you pass ',(0,r.kt)("inlineCode",{parentName:"li"},"zoom={0}")," to the Camera, the ",(0,r.kt)("inlineCode",{parentName:"li"},"minZoom")," factor will be applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"neutralZoom"),': The zoom factor where the camera is "neutral". For any wide-angle cameras this property might be the same as ',(0,r.kt)("inlineCode",{parentName:"li"},"minZoom"),', where as for ultra-wide-angle cameras ("fish-eye") this might be a value higher than ',(0,r.kt)("inlineCode",{parentName:"li"},"minZoom"),". It is recommended that you always start at ",(0,r.kt)("inlineCode",{parentName:"li"},"neutralZoom")," and let the user manually zoom out to ",(0,r.kt)("inlineCode",{parentName:"li"},"minZoom")," on demand."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxZoom"),": The maximum available zoom factor. When you pass ",(0,r.kt)("inlineCode",{parentName:"li"},"zoom={1}")," to the Camera, the ",(0,r.kt)("inlineCode",{parentName:"li"},"maxZoom")," factor will be applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formats"),": A list of all available formats (See ",(0,r.kt)("a",{parentName:"li",href:"formats"},"Camera Formats"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supportsParallelVideoProcessing"),": Determines whether this camera devices supports using Video Recordings (",(0,r.kt)("inlineCode",{parentName:"li"},"video={true}"),") and Frame Processors (",(0,r.kt)("inlineCode",{parentName:"li"},"frameProcessor={...}"),") at the same time. (See ",(0,r.kt)("a",{parentName:"li",href:"#the-supportsparallelvideoprocessing-prop"},(0,r.kt)("inlineCode",{parentName:"a"},"supportsParallelVideoProcessing")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"supportsFocus"),": Determines whether this camera device supports focusing (See ",(0,r.kt)("a",{parentName:"li",href:"focusing"},"Focusing"),")")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/cameradevice.cameradevice-1"},(0,r.kt)("inlineCode",{parentName:"a"},"CameraDevice")," type")," for full API reference"))),(0,r.kt)("p",null,"For debugging purposes you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," properties to log and compare devices. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"devices")," properties to determine the physical camera devices this camera device consists of, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a single Wide-Angle camera, this would be ",(0,r.kt)("inlineCode",{parentName:"li"},'["wide-angle-camera"]')),(0,r.kt)("li",{parentName:"ul"},"For a Triple-Camera, this would be ",(0,r.kt)("inlineCode",{parentName:"li"},'["wide-angle-camera", "ultra-wide-angle-camera", "telephoto-camera"]'))),(0,r.kt)("p",null,"You can use the helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"parsePhysicalDeviceTypes")," to convert a list of physical devices to a single device descriptor type which can also describe virtual devices:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(device.devices)\n//  --\x3e ["wide-angle-camera", "ultra-wide-angle-camera", "telephoto-camera"]\n\nconst deviceType = parsePhysicalDeviceTypes(device.devices)\nconsole.log(deviceType)\n//  --\x3e "triple-camera"\n')),(0,r.kt)("p",null,"Always choose a camera device that is best fitted for your use-case; so you might filter out any cameras that do not support flash, have low zoom values, are not on the back side of the phone, do not contain a format with high resolution or fps, and more."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to be careful when filtering out unneeded camera devices, since not every phone supports all camera device types. Some phones don't even have front-cameras. You always want to have a camera device, even when it's not the one that has the best features."))),(0,r.kt)("h3",{id:"the-usecameradevices-hook"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"useCameraDevices")," hook"),(0,r.kt)("p",null,"VisionCamera provides a hook to make camera device selection a lot easier. You can specify a device type to only find devices with the given type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices('wide-angle-camera')\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n    />\n  )\n}\n")),(0,r.kt)("p",null,'Or just return the "best matching camera device". This function prefers camera devices with more physical cameras, and always ranks "wide-angle" physical camera devices first.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"triple-camera")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"dual-wide-camera")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"dual-camera")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"wide-angle-camera")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"ultra-wide-angle-camera")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"telephoto-camera")," > ...")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n    />\n  )\n}\n")),(0,r.kt)("h3",{id:"the-supportsparallelvideoprocessing-prop"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"supportsParallelVideoProcessing")," prop"),(0,r.kt)("p",null,"Camera devices provide the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/cameradevice.cameradevice-1#supportsparallelvideoprocessing"},(0,r.kt)("inlineCode",{parentName:"a"},"supportsParallelVideoProcessing")," property")," which determines whether the device supports using Video Recordings (",(0,r.kt)("inlineCode",{parentName:"p"},"video={true}"),") and Frame Processors (",(0,r.kt)("inlineCode",{parentName:"p"},"frameProcessor={...}"),") at the same time."),(0,r.kt)("p",null,"If this property is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", you can either enable ",(0,r.kt)("inlineCode",{parentName:"p"},"video"),", or add a ",(0,r.kt)("inlineCode",{parentName:"p"},"frameProcessor"),", but not both."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On iOS this value is always ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"On newer Android devices this value is always ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"On older Android devices this value is ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," if the Camera's hardware level is ",(0,r.kt)("inlineCode",{parentName:"li"},"LEGACY")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"LIMITED"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," otherwise. (See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/hardware/camera2/CameraCharacteristics#INFO_SUPPORTED_HARDWARE_LEVEL"},(0,r.kt)("inlineCode",{parentName:"a"},"INFO_SUPPORTED_HARDWARE_LEVEL"))," or ",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/android/hardware/camera2/CameraDevice#regular-capture"},'the tables at "Regular capture"'),")")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An app that only supports ",(0,r.kt)("strong",{parentName:"li"},"taking photos")," (e.g. a vintage Polaroid Camera app) works on every Camera device because the ",(0,r.kt)("inlineCode",{parentName:"li"},"supportsParallelVideoProcessing")," only affects ",(0,r.kt)("em",{parentName:"li"},"video processing"),"."),(0,r.kt)("li",{parentName:"ul"},"An app that supports ",(0,r.kt)("strong",{parentName:"li"},"taking photos")," and ",(0,r.kt)("strong",{parentName:"li"},"videos")," (e.g. a Camera app) works on every Camera device because only a single ",(0,r.kt)("em",{parentName:"li"},"video processing")," feature is used (",(0,r.kt)("inlineCode",{parentName:"li"},"video"),")."),(0,r.kt)("li",{parentName:"ul"},"An app that only uses ",(0,r.kt)("strong",{parentName:"li"},"Frame Processors"),' (e.g. the "Hotdog/Not Hotdog detector" app) (no taking photos or videos) works on every Camera device because it only uses a single ',(0,r.kt)("em",{parentName:"li"},"video processing")," feature (",(0,r.kt)("inlineCode",{parentName:"li"},"frameProcessor"),")."),(0,r.kt)("li",{parentName:"ul"},"An app that uses ",(0,r.kt)("strong",{parentName:"li"},"Frame Processors")," and supports ",(0,r.kt)("strong",{parentName:"li"},"taking photos")," and ",(0,r.kt)("strong",{parentName:"li"},"videos")," (e.g. Snapchat, Instagram) only works on Camera devices where ",(0,r.kt)("inlineCode",{parentName:"li"},"supportsParallelVideoProcessing")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". (iPhones and newer Android Phones)")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Actually the limitation also affects the ",(0,r.kt)("inlineCode",{parentName:"p"},"photo")," feature, but VisionCamera will automatically fall-back to ",(0,r.kt)("strong",{parentName:"p"},"Snapshot capture")," if you are trying to use multiple features (",(0,r.kt)("inlineCode",{parentName:"p"},"photo")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"frameProcessor"),") and they are not natively supported. (See ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/capturing#taking-snapshots"},'"Taking Snapshots"'),")"))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"-next-section-camera-lifecycle"},"\ud83d\ude80 Next section: ",(0,r.kt)("a",{parentName:"h4",href:"lifecycle"},"Camera Lifecycle")))}u.isMDXComponent=!0}}]);