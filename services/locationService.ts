import * as Location from 'expo-location';
const zones = [
  { name: '해운대 해수욕장', latitude: 35.1587, longitude: 129.1604, radius: 1000 },
  { name: '광안리 해수욕장', latitude: 35.1532, longitude: 129.1186, radius: 1000 },
  { name: '송정 해수욕장', latitude: 35.1783, longitude: 129.1997, radius: 900 },
  { name: '다대포 해수욕장', latitude: 35.0477, longitude: 128.9676, radius: 1000 },
  { name: '을숙도', latitude: 35.1047, longitude: 128.9603, radius: 1300 }
];
export type LocationCheck = { allowed: boolean; zone?: string; message: string; coords?: { latitude: number; longitude: number } };
function distanceInMeters(a: { latitude: number; longitude: number }, b: { latitude: number; longitude: number }) {
  const radius = 6_371_000;
  const toRadians = (value: number) => value * Math.PI / 180;
  const lat = toRadians(b.latitude - a.latitude);
  const lng = toRadians(b.longitude - a.longitude);
  const h = Math.sin(lat / 2) ** 2 + Math.cos(toRadians(a.latitude)) * Math.cos(toRadians(b.latitude)) * Math.sin(lng / 2) ** 2;
  return 2 * radius * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
export async function verifyOceanLocation(): Promise<LocationCheck> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return { allowed: false, message: '위치 권한이 필요합니다. 설정에서 위치 접근을 허용해 주세요.' };
  const result = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
  const coords = result.coords;
  const zone = zones.find(z => distanceInMeters({ latitude: coords.latitude, longitude: coords.longitude }, z) <= z.radius);
  return zone ? { allowed: true, zone: zone.name, coords, message: `현재 위치는 ${zone.name} 인증 지역입니다.\n쓰레기 영상을 촬영해 주세요.` } : { allowed: false, coords, message: '현재 위치에서는 해양 쓰레기 인증이 불가합니다. 부산 해변 또는 해양 인증 지역에서 이용해 주세요.' };
}
