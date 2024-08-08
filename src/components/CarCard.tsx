import { Card, CardContent, Flex, Link, Row, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"
import Image from "next/image"

import styles from '../../public/css/carCard.module.css'

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps){
  return(
    <div className={styles.cardWrapper}>
      <Text subStyle="emphasis" variant="bates">{car?.bodyType}</Text>
      <Flex extend={{ 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexDirection: 'row', 
        margin: 0,
      }}>
        <Text variant="amundsen">{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
      </Flex>

      <Spacer />

      <Image src={car.imageUrl} alt={car.modelName} width={250} height={200}/>

      <Spacer />
      
      <Flex extend={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        gap: 16, 
        width: 250
      }}>
        <Link arrow="right">
          SHOP
        </Link>
        <Link arrow="right">
          LEARN
        </Link>
      </Flex>
    </div>
  )
}