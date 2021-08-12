import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('test for GifExpertApp', () => {
  test('should render the component properly', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should display a list of categories', () => {
    const categories = ['The Office', 'Brooklyn nine-nine']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
