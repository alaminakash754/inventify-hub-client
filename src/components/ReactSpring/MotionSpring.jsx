import { useSpring, animated } from '@react-spring/web'

const MotionSpring = () => {
    const spring = useSpring(
        () => ({
          from: { x: 0 },
          to: { x: 500 },
          config: {duration: 1500},
        }),
        []
      )
    
    return (
        <div>
            {/* <animated.div style={{
                ...spring,
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                borderRadius: '50%',


            }}></animated.div> */}
        </div>
    );
};

export default MotionSpring;