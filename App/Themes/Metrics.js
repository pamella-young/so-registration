import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

//MARGIN
export const BASE_MARGIN = 8
export const DOUBLE_BASE_MARGIN = 16

//PADDING
export const BASE_PADDING = 8
export const DOUBLE_BASE_PADDING = 16

//ETC
export const BORDER_RADIUS = 8
export const SCREEN_WIDTH = width
export const SCREEN_WIDTH_PADDING = width - 2 * DOUBLE_BASE_PADDING
export const SCREEN_HEIGHT_PADDING = height - 2 * DOUBLE_BASE_PADDING