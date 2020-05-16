import React, { useState } from 'react'

import { Add } from 'add-bidder'

const Content = () => {
  //const [loadAdd ,setLoadAdd] = useState(false)

  // setTimeout(() => {
  //   console.log('fetch new add')
  //   setLoadAdd(true)
  // },2000)
  return (
    <main>
      <header>
        <h1>Add Bidder Demo </h1> 
      </header>
      <Add size="banner" />
      <div className="articles"> 
      <article className="card">
        <h3>Lorem ipsum </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nunc quam, et tincidunt nunc lobortis at. Vivamus vestibulum sagittis dapibus. Integer in ante tortor. Aliquam nec dolor neque. In magna massa, ultricies et risus a, efficitur consequat magna. Nunc varius lorem nisi. Aliquam fermentum maximus cursus. Integer eget nisl vitae magna vehicula ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi malesuada in sapien sed commodo. Pellentesque vitae ornare magna. Aenean at nulla vitae mauris sollicitudin faucibus. Vivamus feugiat leo eget neque vestibulum, in elementum mi congue.
        Suspendisse pharetra, diam et vestibulum rhoncus, velit magna feugiat arcu, at cursus risus urna sed libero. Sed gravida, nulla in molestie auctor, nulla ex vulputate est, id viverra ligula ipsum quis felis. Curabitur purus erat, faucibus ut odio id, consectetur eleifend risus. Etiam nec turpis sed urna aliquet blandit. Ut in volutpat enim. Nunc tincidunt ex nulla, quis bibendum nibh ullamcorper in. Ut aliquam bibendum odio, vel interdum justo ullamcorper vel. Nulla eu cursus felis. Sed eget enim id lectus mattis eleifend nec vitae nisi. Sed metus urna, eleifend id scelerisque dictum, commodo a purus. Integer eget consequat nisl. Proin id ipsum luctus, sollicitudin risus nec, vulputate ipsum.
        Nulla in dui sit amet lectus pulvinar fringilla id sed elit. Quisque quis dolor dignissim, mattis odio quis, porttitor velit. Etiam sodales purus vitae elit suscipit, ut laoreet nisl blandit. Nunc sem leo, dictum ut dignissim ac, feugiat et ex. Sed in tincidunt turpis. Sed fermentum dui vel tellus semper, vel porttitor neque aliquam. Nulla aliquam rhoncus justo. Sed nulla purus, consectetur vitae erat eget, pharetra ullamcorper risus. Suspendisse ac ligula non lectus fermentum dignissim. Duis congue erat ac est blandit tempor. Donec fringilla nisi finibus, vulputate ligula quis, sollicitudin eros. Duis vitae aliquam nisi. Quisque congue rhoncus dui, ut auctor lacus mollis vitae. Proin tempor mollis quam, interdum lobortis tellus pulvinar non. Suspendisse varius sollicitudin sodales.
        Nullam commodo magna at dolor euismod, id euismod enim laoreet. Nullam ac ipsum in mi fermentum bibendum non sit amet felis. Cras vehicula felis tortor, convallis condimentum est varius vel. Etiam non odio ultrices, fringilla ligula nec, cursus metus. Pellentesque nisl felis, venenatis eget iaculis nec, sagittis vitae odio. Nullam luctus facilisis dictum. Sed elementum quis libero at viverra. Etiam ex dolor, blandit quis venenatis eu, aliquet sit amet erat. Morbi nec sapien in dui fermentum hendrerit. Maecenas felis eros, sollicitudin quis eleifend et, feugiat id enim.
        </p>
      </article>
      <Add size="banner" />
      <article className="card">
        <h3>Lorem ipsum </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nunc quam, et tincidunt nunc lobortis at. Vivamus vestibulum sagittis dapibus. Integer in ante tortor. Aliquam nec dolor neque. In magna massa, ultricies et risus a, efficitur consequat magna. Nunc varius lorem nisi. Aliquam fermentum maximus cursus. Integer eget nisl vitae magna vehicula ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi malesuada in sapien sed commodo. Pellentesque vitae ornare magna. Aenean at nulla vitae mauris sollicitudin faucibus. Vivamus feugiat leo eget neque vestibulum, in elementum mi congue.
        Suspendisse pharetra, diam et vestibulum rhoncus, velit magna feugiat arcu, at cursus risus urna sed libero. Sed gravida, nulla in molestie auctor, nulla ex vulputate est, id viverra ligula ipsum quis felis. Curabitur purus erat, faucibus ut odio id, consectetur eleifend risus. Etiam nec turpis sed urna aliquet blandit. Ut in volutpat enim. Nunc tincidunt ex nulla, quis bibendum nibh ullamcorper in. Ut aliquam bibendum odio, vel interdum justo ullamcorper vel. Nulla eu cursus felis. Sed eget enim id lectus mattis eleifend nec vitae nisi. Sed metus urna, eleifend id scelerisque dictum, commodo a purus. Integer eget consequat nisl. Proin id ipsum luctus, sollicitudin risus nec, vulputate ipsum.
        Nulla in dui sit amet lectus pulvinar fringilla id sed elit. Quisque quis dolor dignissim, mattis odio quis, porttitor velit. Etiam sodales purus vitae elit suscipit, ut laoreet nisl blandit. Nunc sem leo, dictum ut dignissim ac, feugiat et ex. Sed in tincidunt turpis. Sed fermentum dui vel tellus semper, vel porttitor neque aliquam. Nulla aliquam rhoncus justo. Sed nulla purus, consectetur vitae erat eget, pharetra ullamcorper risus. Suspendisse ac ligula non lectus fermentum dignissim. Duis congue erat ac est blandit tempor. Donec fringilla nisi finibus, vulputate ligula quis, sollicitudin eros. Duis vitae aliquam nisi. Quisque congue rhoncus dui, ut auctor lacus mollis vitae. Proin tempor mollis quam, interdum lobortis tellus pulvinar non. Suspendisse varius sollicitudin sodales.
        Nullam commodo magna at dolor euismod, id euismod enim laoreet. Nullam ac ipsum in mi fermentum bibendum non sit amet felis. Cras vehicula felis tortor, convallis condimentum est varius vel. Etiam non odio ultrices, fringilla ligula nec, cursus metus. Pellentesque nisl felis, venenatis eget iaculis nec, sagittis vitae odio. Nullam luctus facilisis dictum. Sed elementum quis libero at viverra. Etiam ex dolor, blandit quis venenatis eu, aliquet sit amet erat. Morbi nec sapien in dui fermentum hendrerit. Maecenas felis eros, sollicitudin quis eleifend et, feugiat id enim.
        </p>
      </article>
      </div>
    
       {/* {loadAdd && <section className="right-bottom-add">
       <Add size="banner" />
       </section>} */}
    </main>
  )
 
}

export default Content
