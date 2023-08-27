import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { marketStyles } from "../styles/MarketStyles";
import ColorTheme from "../config/ColorTheme";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress,
}) => {
  const priceChangeColor =
    priceChangePercentage7d > 0 ? ColorTheme.FernGreen : ColorTheme.red;
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View className="px-4" style={[marketStyles.listWrapper]}>
        <View style={[marketStyles.flexCenter, marketStyles.leftWrapper]}>
          <Image
            source={{
              uri: logoUrl,
            }}
            style={[marketStyles.image]}
          />
          <View className="ml-2" style={[marketStyles.titlleWrapper]}>
            <Text style={[marketStyles.title]}>{name}</Text>
            <Text className="text-gray-700" style={[marketStyles.subTitle]}>
              {symbol.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={[marketStyles.rightWrapper]}>
          <Text style={[marketStyles.title]}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={[marketStyles.subTitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(3)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
