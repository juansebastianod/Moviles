import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Button, FlatList } from "react-native";
import axios from "axios";

function FriendsScreen({ navigation }) {
  const [comics, setComics] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&limit=60&apikey=3f9db5bb5ce3f5c938071c76ec800fcf&hash=cb4fe932f7039ae5ff8660fafcfb463e"
      )
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const isFavorito = (id) => favoritos.includes(id);

  const addToFavorites = (id) => {
    setFavoritos([...favoritos, id]);
  };

  const removeFromFavorites = (id) => {
    setFavoritos(favoritos.filter((favId) => favId !== id));
  };

  const toggleMostrarFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id}>
      <View style={{ margin: 10, width: 150, height: 400 }}>
        <Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
          style={{ width: "100%", height: "70%" }}
        />
        <ScrollView>
          <Text>{item.title}</Text>
        </ScrollView>
        <View>
          {isFavorito(item.id) ? (
            <Button title="Eliminar de favoritos" onPress={() => removeFromFavorites(item.id)} />
          ) : (
            <Button title="Añadir a favoritos" onPress={() => addToFavorites(item.id)} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginLeft: 20 }}>
      <View>
        <Button title={mostrarFavoritos ? "Mostrar Todos" : "Mostrar Favoritos"} onPress={toggleMostrarFavoritos} />
      </View>
      {mostrarFavoritos ? (
        <FlatList
          data={comics.filter((comic) => isFavorito(comic.id))}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      ) : (
        <FlatList
          data={comics}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}

export default FriendsScreen;