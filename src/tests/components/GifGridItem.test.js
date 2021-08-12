import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('tests for GifGridItem', () => {
  const data = {
    title: 'Este es el título',
    url: 'https://esta/url/no/existe.com',
  }
  const wrapper = shallow(<GifGridItem {...data} />)

  //* This test should be enough
  test('should render the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should have the image attributes', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(data.url)
    expect(img.prop('alt')).toBe(data.title)
  })

  test('should have the animation classes', () => {
    expect(
      wrapper
        .find('li')
        .prop('className')
        .includes('animate__animated animate__fadeInUp')
    ).toBe(true)
  })
})
