import React, { useState, useCallback, useRef } from 'react';
import { View, ScrollView, PanResponder } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@expo-google-fonts/instrument-sans/useFonts';
import {
  InstrumentSans_400Regular,
  InstrumentSans_500Medium,
  InstrumentSans_600SemiBold,
} from '@expo-google-fonts/instrument-sans';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getAppTheme } from './styles/theme';
import { formatDisplayDate, commonStyles } from './styles/common';
import { appStyles } from './styles/app';
import Header from './components/Header';
import Welcome from './components/Welcome';
import DrawerMenu from './components/DrawerMenu';
import WorkoutForm from './components/WorkoutForm';
import DistanceSummary from './components/DistanceSummary';
import WorkoutsList from './components/WorkoutsList';
import ExerciseListModal from './components/ExerciseListModal';
import SuccessDialog from './components/SuccessDialog';
import CalendarModal from './components/CalendarModal';
import BottomNav from './components/BottomNav';
import StartScreen from './components/StartScreen';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

const instrumentSansFonts = {
  regular: 'InstrumentSans_400Regular',
  medium: 'InstrumentSans_500Medium',
  semiBold: 'InstrumentSans_600SemiBold',
};

export default function App() {
  const [fontsLoaded] = useFonts({
    InstrumentSans_400Regular,
    InstrumentSans_500Medium,
    InstrumentSans_600SemiBold,
  });

  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [listModalVisible, setListModalVisible] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const drawerOpenRef = useRef(drawerOpen);
  drawerOpenRef.current = drawerOpen;

  const swipeOpenThreshold = 50;
  const panResponderOpen = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !drawerOpenRef.current,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return !drawerOpenRef.current && gestureState.dx > 20;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > swipeOpenThreshold) setDrawerOpen(true);
      },
    })
  ).current;

  const handleAddExercise = useCallback((exercise) => {
    setExercises((prev) => [...prev, { ...exercise, id: generateId() }]);
    setSuccessDialogVisible(true);
  }, []);

  const handleCloseSuccess = useCallback(() => {
    setSuccessDialogVisible(false);
  }, []);

  const handleCalendarSelect = useCallback((date) => {
    setSelectedDate(date);
    setCalendarVisible(false);
  }, []);

  const handleCalendarCancel = useCallback(() => {
    setCalendarVisible(false);
  }, []);

  const theme = getAppTheme(fontsLoaded ? instrumentSansFonts : null);

  if (!fontsLoaded) {
    return null;
  }

  if (user === null) {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <StatusBar style="light" />
          <StartScreen onSubmit={setUser} />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }

  const totalDistance = exercises.reduce((sum, ex) => sum + (ex.distance || 0), 0);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="light" />
        <View style={commonStyles.screen}>
          {!drawerOpen && (
            <View
              style={appStyles.edgeSwipeStrip}
              {...panResponderOpen.panHandlers}
            />
          )}
          <Header onMenuPress={() => setDrawerOpen(true)} />
          <ScrollView style={commonStyles.screen}>
            <Welcome userName={user?.name} />
            <WorkoutForm
              onAddExercise={handleAddExercise}
              onOpenCalendar={() => setCalendarVisible(true)}
              selectedDate={selectedDate}
              formatDateLabel={formatDisplayDate}
            />
            <DistanceSummary totalDistance={totalDistance} />
            <WorkoutsList
              exercises={exercises}
              onSeeAll={() => setListModalVisible(true)}
            />
          </ScrollView>
          <BottomNav
            workoutsListVisible={listModalVisible}
            onFabPress={() => setListModalVisible((prev) => !prev)}
          />
          <DrawerMenu
            visible={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            onWorkoutsPress={() => setListModalVisible(true)}
            userName={user?.name}
          />
          <ExerciseListModal
            visible={listModalVisible}
            onClose={() => setListModalVisible(false)}
            exercises={exercises}
          />
          <SuccessDialog visible={successDialogVisible} onClose={handleCloseSuccess} />
          <CalendarModal
            visible={calendarVisible}
            initialDate={selectedDate || new Date()}
            onSelect={handleCalendarSelect}
            onCancel={handleCalendarCancel}
          />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
