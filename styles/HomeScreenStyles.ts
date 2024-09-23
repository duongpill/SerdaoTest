import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
      },
      balanceText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      closeButton: {
        margin: 5,
      },
      beneficiaryContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      beneficiaryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      beneficiaryBox: {
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
      },
      listContainer: {
        flexGrow: 1,
        width: '100%',
      },
      error: {
        color: 'red',
        fontSize: 15,
        marginVertical: 5,
        alignItems: 'center',
    },
});

export default HomeScreenStyles