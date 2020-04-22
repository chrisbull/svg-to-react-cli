Forked from chrisbull/svg-to-react-native-cli and added options to override width, height, fill and stroke of the compiled SVG.

# svg-to-react-native-cli
Based on svg-to-react-cli.
A command line utility that takes a svg image file and outputs a fully formatted stateless functional React Native component with `height` and `width` for props. With flags to toggle formatting and remove style attributes.

## To Use
`npm install -g svg-to-react-native-cli`

### One File

`svg-to-react-native src/svg/images/logo Logo --output src/svg/components/`

**NOTE**: image file must be in current working directory. Do not add the extension. If file is `image.svg`, then just enter `image` as the first argument. ComponentName will be the name of the sfc and filename with `.js` appended.

### Multi File

`svg-to-react-native --dir src/svg/images/ --output src/svg/components/`

or for all files in directory (will name all components in CamelCase based on image name. If image is `image.svg` then new component will be `Image` and file will be `Image.js`):


**Optional Flags:**

`-d, --directory <path>` - the dirctory from project folder to your svg images (src/svg/images) (optional)

`-o, --output <path>` - the output path. Do not include the filename.

`--help` - Prints out this readme.

`--example` - Prints an example of the i/o of this util.

## Example

Takes this:
```html
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="128px" height="128px" viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
<g>
	<circle fill="#E16B5A" cx="64" cy="64" r="64"/>
	<path fill="#D16354" d="M119.23,96.322c-0..."/>
	<path fill="#242424" d="M64,104c-9.775,0-..."/>
	<path fill="#B3B3B3" d="M64,95.5c-12.861,..."/>
	<g>
		<path fill="#1A1A1A" d="M86.43,39.278C8..."/>
		<path fill="#1A1A1A" d="M99,49c0-6.564-..."/>
		<path fill="#1A1A1A" d="M35.073,39.171c..."/>
	</g>
	<path fill="#242424" d="M69,71.5c-1.382,..."/>
	<path fill="#F5F5F5" d="M76.5,59c-2.756,..."/>
	<path fill="#242424" d="M76.5,56.5c-1.37..."/>
	<path fill="#F5F5F5" d="M51.5,59c-2.759,..."/>
	<path fill="#242424" d="M51.498,56.5C500..."/>
	<path fill="#242424" d="M74,81.5H54c-1.3..."/>
</g>
</svg>
```
And creates a new file with this:

```javascript

import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default function TestSvg(props) {
  return (
    <Svg height="128px" id="Layer_1" width="128px" version="1.1" viewBox="0 0 128 128" x="0px" y="0px" xmlSpace="preserve">
    	<G>
    		<Circle x="64" y="64" fill="#E16B5A" r="64"/>
    		<Path d="M119.23,96.322c-0..." fill="#D16354"/>
    		<Path d="M64,104c-9.775,0-..." fill="#242424"/>
    		<Path d="M64,95.5c-12.861,..." fill="#B3B3B3"/>
    		<G>
    			<Path d="M86.43,39.278C8..." fill="#1A1A1A"/>
    			<Path d="M99,49c0-6.564-..." fill="#1A1A1A"/>
    			<Path d="M35.073,39.171c..." fill="#1A1A1A"/>
    		</G>
    		<Path d="M69,71.5c-1.382,..." fill="#242424"/>
    		<Path d="M76.5,59c-2.756,..." fill="#F5F5F5"/>
    		<Path d="M76.5,56.5c-1.37..." fill="#242424"/>
    		<Path d="M51.5,59c-2.759,..." fill="#F5F5F5"/>
    		<Path d="M51.498,56.5C500..." fill="#242424"/>
    		<Path d="M74,81.5H54c-1.3..." fill="#242424"/>
    	</G>
    </Svg>
  );
}
```

## Width / height order of precedence
The order of precedence of how width/height is set on a generated component is as follows:

 - 1 - Passed in width and height props are always priority one. This gives run time control to the container.
 - 2 - If a svg has its width/height set, this will be the first fallback if width/height props are not provided.
 - 3 - If the svg has not provided width/height attributes, the svg's viewbox's width/height segments are used as the fallback if width/height props are not provided.
 - 4 - Finally, if the svg has no width/height attributes, and the svg also doesn't have a viewbox - a fallback of 50px is applied to the width and height
