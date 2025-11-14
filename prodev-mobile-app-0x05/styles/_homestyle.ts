// styles/_homestyle.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
  // Search Section Styles
  searchGroup: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 60, // For status bar spacing
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  searchControlGroup: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
  },
  
  searchFormText: {
    fontSize: 14,
    color: '#333333',
  },
  
  searchControl: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
  },
  
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ff385c',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff385c',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
  // Filter Section Styles
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    minWidth: 80,
    height: 48,
    flexDirection: 'row',
    gap: 6,
  },
  
  filterImage: {
    width: 20,
    height: 20,
  },
  
  filterText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
  },
  
  // Listing Section Styles
  listingContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  
  // Pagination Styles
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  
  showMoreButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    minWidth: 120,
  },
  
  showMoreButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
});

// Additional theme constants you can use
export const theme = {
  colors: {
    primary: '#ff385c',
    secondary: '#008489',
    background: '#ffffff',
    surface: '#f8f8f8',
    border: '#e5e5e5',
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#999999',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
};