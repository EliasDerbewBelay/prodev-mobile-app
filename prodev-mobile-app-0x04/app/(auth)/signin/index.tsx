import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { styles } from "@/styles/_signinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Signin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.navGroup}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.largeText}>Sign In</Text>
      <Text style={styles.smallText}>Welcome back! Access your account.</Text>

      <View style={styles.formGroup}>
        <Text style={styles.placeholderText}>Email</Text>
        <TextInput style={styles.inputField} placeholder="Enter email" />

        <Text style={styles.placeholderText}>Password</Text>
        <View style={styles.passwordGroup}>
          <TextInput
            placeholder="Enter password"
            style={{ flex: 1 }}
            secureTextEntry
          />
          <Ionicons name="eye-outline" size={22} />
        </View>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.socialMediaButtonGroup}>
        <TouchableOpacity style={styles.socialMediaButton}>
          <Image source={GOOGLELOGO} style={{ width: 25, height: 25 }} />
          <Text style={styles.socialMediaButtonText}>Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 25, height: 25 }} />
          <Text style={styles.socialMediaButtonText}>
            Sign In with Facebook
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subTextGroup}>
        <Text style={styles.subText}>Don’t have an account? </Text>
        <Link href="/(auth)/join">
          <Text style={styles.subTextJoin}>Join Now</Text>
        </Link>
      </View>
    </View>
  );
}
