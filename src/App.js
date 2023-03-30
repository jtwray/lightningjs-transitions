/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      // Video: {
      //   rect: true,
      //   w: 960,
      //   h: 720,
      //   x: 960,
      //   y: 540,
      //   mount: .5,
      //   color: 0xffff0000
      // },
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
      },
      // Window: {
      //   rect: true,
      //   w: 960,
      //   h: 720,
      //   x: 960,
      //   y: 540,
      //   color:0xCCff00ff,
      //   radius:50,
      //   shader: {
      //     type: Lightning.shaders.Hole,
      //     w: 760,
      //     h: 220,
      //     x: 960,
      //     y: 540,
      //     color:0xAAff00ff,
      //     radius:[5]
      //   }
      // },
      Square: {
        rect: true,
        w: 100,
        h: 100,
        y: 540,
        color: 0xffff00ff,
        shader: {
          type: Lightning.shaders.Hole,
          w: 760,
          h: 220,
          x: 960,
          y: 540,
          // color:0xAAff00ff,
          // radius:[5]
        },
        // transitions: {
        //   x: {
        //     duration: 3,
        //     timingFunction: 'linear',
        //   },
        //   color: {
        //     duration: 3,
        //     delay: 3,
        //   },
        // },
      },
      Circle: {
        rect: true,
        w: 100,
        h: 100,
        y: 540,
        color: 0xffff0000,
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          radius: [50, 50, 50, 50], //[tl,tr.br,bl]

          timingFunction: 'linear',
          duration: 3,
        },
        // transitions: {
        //   x: {
        //     duration: 3,
        //     timingFunction: 'linear',
        //   },
        //   color: {
        //     duration: 3,
        //     delay: 3,
        //   },
        // },
      },
    }
  }
  _handleEnter() {
    this.tag('Square').patch({
      smooth: {
        x: 1820,
        color: 0xff0000ff,
      },
    })
    this.tag('Circle').patch({
      smooth: {
        x: 1820,
        y: 0,
        color: 0xff0000ff,
      },
    })
  }
}
