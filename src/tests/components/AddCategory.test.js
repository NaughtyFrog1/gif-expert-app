// eslint-disable-next-line no-unused-vars
import { shallow, ShallowWrapper } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('test for AddCategory', () => {
  const setCategories = jest.fn()

  /** @type {ShallowWrapper} */
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should render the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the input value', () => {
    const value = 'New value'
    wrapper.find('input').simulate('change', { target: { value } })

    expect(wrapper.find('input').prop('value')).toBe('New value')
  })

  test("shouldn't post the information with the submit", () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories and clear the text box', () => {
    wrapper.find('input').simulate('change', { target: { value: 'New value' } })
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalled()
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
