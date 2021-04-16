import React, {useEffect, useRef} from 'react';
import Matter from "matter-js";
import MatterAttractors from 'matter-attractors'

//Images 
import arrow from '../../assets/shape-images/arrow.png'
import sun from '../../assets/shape-images/sun.png'
import greenElipse from '../../assets/shape-images/green-elipse.png'
import orangeElipse from '../../assets/shape-images/orange-elipse.png'
import blueElipse from '../../assets/shape-images/blue-elipse.png'
import creamElipse1 from '../../assets/shape-images/cream-elipse-1.png'
import creamElipse2 from '../../assets/shape-images/cream-elipse-2.png'
import purpleElipse from '../../assets/shape-images/purple-elipse.png'
import greenCircle from '../../assets/shape-images/green-circle.png'
import pinkCircleLg from '../../assets/shape-images/pink-circle-lg.png'
import blackCircle from '../../assets/shape-images/black-circle.png'
import whiteCircle from '../../assets/shape-images/white-circle.png'
import pinkCircle from '../../assets/shape-images/pink-circle.png'

const Pebbles = ({data}) => {
    const {statisticItem} = data 
    const images = statisticItem.reduce((acc, val, i) => {
        if (val.image?.title) {
            acc[val.image.title] = val.image.file.url 
            return acc 
        } 
        return acc 
    }, {})
    const wrapperStyle = {
      };
    const sceneEl = useRef(null);

    useEffect(() => {
        function runMatter() {
            Matter.use(MatterAttractors);

            let windowWidth = window.innerWidth
            let windowHeight = window.innerHeight
            const wallWidth = 100;
            var Engine = Matter.Engine,
                Render = Matter.Render,
                Runner = Matter.Runner,
                World = Matter.World,
                Composites = Matter.Composites,
                Common = Matter.Common,
                Events = Matter.Events,
                MouseConstraint = Matter.MouseConstraint,
                Mouse = Matter.Mouse,
                Composite = Matter.Composite,
                Bodies = Matter.Bodies,
                Constraint = Matter.Constraint,
                Body =  Matter.Body;

            // create engine
            var engine = Engine.create(),
                world = engine.world;

            // create renderer
            var render = Render.create({
                element: sceneEl.current,
                engine: engine,
                options: {
                    width: windowWidth,
                    height: windowHeight,
                    wireframes: false,
                    background: 'transparent',
                    showVelocity: false
                }
            });

        Render.run(render);
        world.gravity.scale = .00001;
        world.gravity.y = .01

    
        
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        const wallOptions = {isStatic: true,  
            render: {
                fillStyle: 'transparent',
                lineWidth: 0
            } 
        }

        var attractiveBody = Bodies.circle(
            render.options.width / 2,
            render.options.height / 2,
            1, 
            {
            isStatic: true,
            render: {
                opacity: 0,
            },
            plugin: {
            attractors: [
                function(bodyA, bodyB) {
                return {
                    x: 0,
                    y: (bodyA.position.y - bodyB.position.y) * 1e-4,
                };
                }
            ]
            }
        });
        
        World.add(world, attractiveBody);

    
        
        let composite = World.add(world, [
            // Walls

            // Top
            Bodies.rectangle(windowWidth / 2, 0, windowWidth, wallWidth, wallOptions),
            // Bottom
            Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, wallWidth, wallOptions),
            // Left
            Bodies.rectangle(-wallWidth,  windowHeight / 2, wallWidth, windowHeight, wallOptions),
            // Right
            Bodies.rectangle(windowWidth + wallWidth, windowHeight / 2, wallWidth, windowHeight, wallOptions),
        ]);
        const bodyOptions = {}
        const scaleFactor = windowWidth < 1200 ? 0.45 : 0.5
        const spriteOptions = {xScale: scaleFactor, yScale: scaleFactor}
        let bodies =  [
            Bodies.circle(windowWidth * 0.3, window.innerHeight / 2, 100, { 
                render: {
                    ...bodyOptions,
                    sprite: {
                        texture: images['Higher Pay'],
                        ...spriteOptions
                    }
                } 
            
            }),

            Bodies.rectangle(windowWidth * 0.3, window.innerHeight / 2, 171, 126, { 
                render: {
                    sprite: {
                        texture: orangeElipse,
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.rectangle(windowWidth * 0.35, window.innerHeight * 0.2, 200, 172, { 
                render: {
                    sprite: {
                        texture: blueElipse,
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.rectangle(windowWidth * 0.35, window.innerHeight * 0.8, 209, 172, { 
                render: {
                    sprite: {
                        texture: creamElipse1,
                        ...spriteOptions
                    }
                } 
            }),


            Bodies.rectangle(windowWidth * 0.6, window.innerHeight * 0.25, 250, 128, { 
                render: {
                    sprite: {
                        texture: creamElipse2,
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.circle(windowWidth * 0.25, window.innerHeight / 2 - 100, 100, { 
                render: {
                    ...bodyOptions,
                    sprite: {
                        texture: images['Bipoc'],
                        ...spriteOptions
                    }
                } 
            
            }),

            Bodies.circle(windowWidth * 0.3, window.innerHeight / 2, 100, { 
                render: {
                    ...bodyOptions,
                    sprite: {
                        texture: images['Full Time'],
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.circle(windowWidth * 0.35, window.innerHeight / 2 + 50, 75, { 
                render: {
                    ...bodyOptions,
                    sprite: {
                        texture: images['Contracts'],
                        ...spriteOptions
                    }
                } 
            }),
            
            Bodies.circle(windowWidth * 0.5, window.innerHeight * 0.9, 35, { 
                render: {
                    sprite: {
                        texture: sun,
                        ...spriteOptions
                    }
                } 
            }),

            
            Bodies.rectangle(windowWidth * 0.45, window.innerHeight / 2 + 200, 340, 130, { 
                render: {
                    sprite: {
                        texture: images['Champion'],
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.rectangle(windowWidth / 2, window.innerHeight / 2 - 100, 291, 130, { 
                render: {
                    sprite: {
                        texture: images['Bpoco'],
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.rectangle(windowWidth * 0.7, window.innerHeight / 2 - 100, 311, 166, { 
                render: {
                    sprite: {
                        texture: greenElipse,
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.rectangle(windowWidth * 0.7, window.innerHeight / 2 + 100, 134, 127, { 
                render: {
                    sprite: {
                        texture: purpleElipse,
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.circle((window.innerWidth / 2) + (windowWidth * 0.3), window.innerHeight / 2, 75, { 
                render: {
                    sprite: {
                        texture: images['Exceed'],
                        ...spriteOptions
                    }
                } 
            }),

            Bodies.circle(window.innerWidth * 0.3, window.innerHeight * 0.3, 60, { 
                render: {
                    sprite: {
                        texture: blackCircle,
                        ...spriteOptions
                    }
                }
            }),
            Bodies.circle(window.innerWidth * 0.75, window.innerHeight * 0.3, 60, { 
                render: {
                    sprite: {
                        texture: whiteCircle,
                        ...spriteOptions
                    }
                }
            }),
            Bodies.circle(window.innerWidth * 0.7, window.innerHeight * 0.7, 60, { 
                render: {
                    sprite: {
                        texture: pinkCircle,
                        ...spriteOptions
                    }
                }
            }),
        ];
        if (Object.keys(images).length > 7) {
            let remaining = Object.keys(images).slice(7)
            remaining.forEach(title => {
                let body = Bodies.circle(windowWidth * Math.random(), window.innerHeight *  Math.random(), 75, { 
                    render: {
                        ...bodyOptions,
                        sprite: {
                            texture: images[title],
                            ...spriteOptions
                        }
                    } 
                })
                bodies = bodies.concat(body)
            })
        }

        bodies.forEach(body => {
            World.add(world, body)
        })

        //Green cirlce at start 
        const greenCircleBody = Bodies.circle(0, window.innerHeight / 2 + 200, 150, { 
            render: {
                sprite: {
                    texture: greenCircle,
                    ...spriteOptions
                }
            
            }
        })

        const greenCircleConstraint = Constraint.create({
            pointA: { x: -100, y:  window.innerHeight / 2 - 50},
            bodyB: greenCircleBody,
            length: 75,
            stiffness: 0.01,
            render: {
                visible: false
            }
        });

        World.add(world, [greenCircleBody, greenCircleConstraint])


        //Pink cirlce at end
        const pinkCircleBody = Bodies.circle(window.innerWidth, window.innerHeight / 2 + 200, 150, { 
            render: {
                sprite: {
                    texture: pinkCircleLg,
                    ...spriteOptions
                }
            }
        })

        const pinkCircleConstraint = Constraint.create({
            pointA: { x: window.innerWidth + wallWidth, y:  window.innerHeight / 2 - 50},
            bodyB: pinkCircleBody,
            length: 75,
            stiffness: 0.01,
            render: {
                visible: false
            }
        });

        World.add(world, [pinkCircleBody, pinkCircleConstraint])


        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.0,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(world, mouseConstraint);
        
        // keep the mouse in sync with rendering
        render.mouse = mouse;
        
        // allow scrolling on canvas
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
        // fit the render viewport to the scene

        var cursor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight / 2, 100, 100, {
            isStatic: true,
            render: {
                sprite: {
                    texture: arrow
                }
            } 
        });
        cursor.id = 'cursor'
        Composite.add(world, cursor)

    
        // Add resize 
        window.addEventListener('resize', handleResize)
        function handleResize() {
            let widthDifference = window.innerWidth / windowWidth
            let heightDifference = window.innerHeight / windowHeight

            windowWidth = window.innerWidth
            windowHeight = window.innerHeight

            render.canvas.height = windowHeight;
            render.canvas.width = windowWidth;
            Composite.scale(composite, widthDifference, heightDifference, {x: 0, y: 0})
        }

        Events.on(engine, 'afterUpdate', function() {
            if (!mouse.position.x) {
            return;
            }
            
            Body.translate(cursor, {
                x: (mouse.position.x  - cursor.position.x) * 0.75,
                y: (mouse.position.y  - cursor.position.y) * 0.75
            });

        });

        return {
            engine: engine,
            runner: runner,
            render: render,
            canvas: render.canvas,
            stop: function() {
                Matter.Render.stop(render);
                Matter.Runner.stop(runner);
            }
        };

    }
    runMatter();

    }, [])
    return (
        <div style={wrapperStyle} ref={sceneEl}/>
    );
};

export default Pebbles;