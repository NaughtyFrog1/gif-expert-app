import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import useFetchGifs from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('test for GifGrid', () => {
  test('should render the component properly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid category="The office" />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when images are loaded', () => {
    useFetchGifs.mockReturnValue({
      data: [{ id: 'ABC', url: 'https://foo/bar.gif', title: 'FooBar' }],
      loading: false,
    })

    const wrapper = shallow(<GifGrid category="The office" />)
    expect(wrapper).toMatchSnapshot()
  })
})
