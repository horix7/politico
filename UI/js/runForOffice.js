let offices = document.querySelector('#openOffices')

let openOffices = [
    {
        office: "ministry of Education",
        number: 123,
        period: "32 months"
    },
    {
        office: "ministry of justice",
        number: 23,
        period: "32 months"
    },
    {
        office: "ministry of healthy",
        number: 123,
        period: "32 months"
    },
    {
        office: "ministry of healthy",
        number: 123,
        period: "32 months"
    }
]

let officeHtml = openOffices.map(n => ` <div class="box">
<div> <h1>${n.office}</h1> 
    <h4>${n.number} Applicants</h4>
    <p class="ins">Application Open for ${n.period}</p></div>
<div><a href="officePage.html"><button class="view-more"> Apply</button></a></div>

</div>`)

officeHtml.forEach(n => {
    offices.innerHTML +=  n
})