
import Material from '@expo/vector-icons/MaterialIcons';
import { ColorValue, TextProps } from "react-native";
import Lucide from '@react-native-vector-icons/lucide';
import { LegacyColors as Colors } from '@/constants/Colors';
import { metrics } from '@/utils/metrics';
type IProps = TextProps & {
  name: any;
  size?: any;
  color?: ColorValue;
  type?: any
};
const Icon = ({
  size = metrics.scale(24),
  color = Colors.icon,
  name,
  ...props
}: IProps) => <Material name={name} color={color} size={size} {...props} />
const CLucide = ({
  size = metrics.scale(24),
  color = Colors.icon,
  name,
  ...props
}: IProps) => <Lucide name={name} color={color} size={size} {...props} />

Icon.Lucide = CLucide;
export default Icon