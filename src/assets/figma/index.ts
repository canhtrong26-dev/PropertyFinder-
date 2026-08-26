import heroImage from './hero.jpg'
import property1 from './property-1.jpg'
import property3 from './property-3.jpg'
import property4 from './property-4.jpg'
import property5 from './property-5.jpg'
import property6 from './property-6.jpg'
import property8 from './property-8.jpg'
import property9 from './property-9.jpg'

const propertyImages = [property1, property3, property4, property5, property6, property8, property9]

function getPropertyImage(id: number) {
  const index = Math.abs(id) % propertyImages.length
  return propertyImages[index]
}

export { heroImage, getPropertyImage }
