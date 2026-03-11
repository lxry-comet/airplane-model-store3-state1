//* import '../../App.css'
import '@/App.css'
// import planes from '../../json/planes.json'
import planes from '@/json/planes.json'
import helicopters from '@/json/helicopters.json'
// import PlanesList from '../PlanesList/PlanesList.jsx'
import PlanesList from '@/components/PlanesList/PlanesList.jsx'
// import Section from '../Section/Section.jsx'
import Section from '@/components/Section/Section.jsx'

export default function App() {
	return (
		<>
			<Section isOn={true} title='Магазин моделей літаків'>
				<PlanesList items={planes} />
			</Section>
		
			<Section isOn={true} title='Магазин моделей вертольотів'>
				<PlanesList items={helicopters} />
			</Section>
		</>
	)
}
