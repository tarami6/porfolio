import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    overflowY: 'auto',
    marginTop: '15vh',
    padding: '40px',
    fontSize: '1.5vw',
  },
}))
const Story = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        illo provident hic dolor in debitis repellendus necessitatibus odio,
        accusamus sequi deserunt veniam perspiciatis nulla aspernatur beatae
        quia voluptatibus magnam cupiditate dolore? Quis similique quam at
        reiciendis modi, asperiores error temporibus cupiditate architecto ab.
        Ipsa ex cum similique nisi. Iusto consequuntur reiciendis adipisci
        nihil, aut veritatis ipsum ratione laboriosam, reprehenderit odio, amet
        nam soluta! Similique placeat in natus corrupti eligendi impedit magni
        modi deserunt esse, asperiores, tenetur tempora provident incidunt est
        eum consectetur eius dolores? Modi dicta quo sed reiciendis a aut, nisi,
        itaque totam corporis ullam fuga, excepturi omnis autem.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti
        atque vel cumque, modi optio hic nostrum nemo sed vero aperiam aut
        temporibus blanditiis, molestias eligendi possimus architecto
        necessitatibus fuga deleniti praesentium, itaque doloribus at?
        Doloremque numquam vero, non, reprehenderit nobis ex quo impedit quaerat
        perspiciatis placeat quas a rem obcaecati tenetur fuga ipsa. Vero
        accusamus impedit fugit tempore cumque, minima perferendis accusantium
        numquam earum soluta eaque perspiciatis doloribus, vitae, repellat
        ducimus dolore ratione distinctio quia quo pariatur consectetur
        praesentium. At laboriosam mollitia aut quam molestiae magni dolorum
        modi distinctio corrupti temporibus ratione, facere voluptatem illum,
        magnam aliquid doloribus rem?
      </p>
    </div>
  )
}

export default Story

