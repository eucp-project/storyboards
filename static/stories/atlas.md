---
id: 13
trl: medium
category: EUCP data and products
title: Atlas of (un)constrained climate projections
author: B. Booth et al., UK Met Office
thumbnail: "comparing.png"
---

:::Chapter{headline=Introduction image=ipcc.png}
## Observationally constrained projections gaining greater visibility
Observations have been used to constrain climate projection spread in National Climate Scenarios (e.g. Swiss, UK, Australian) but have not yet been commonly applied elsewhere.  They represent a way to assess which existing climate projections are more plausible given how well they reproduce historical climate.  They are starting to see wider adoption and can be an important tool in the climate projection toolbox.

Observational constraints used in IPCC to provide context, given many more high
temperature response simulations that are not thought to be more likely.

> For the first time in an IPCC report, assessed future changes in global
> surface temperature, ocean warming and sea level are constructed by combining
> multi-model projections with observational constraints based on past simulated
> warming, as well as the AR6 assessment of climate sensitivity.
> -- <cite>Summary for Policy Makers, AR6, IPCC</cite>
:::

:::Chapter{headline="Underlying understanding" image=methods.png}
## EUCP has led underlying work to understand user value in these approaches
The work within EUCP has been on understanding different potential quantitative approaches to using historical validation of current projections. We provided the first common evaluation of their projected changes, across a range of currently available methodologies.

We have assessed the reliability of these approaches using blind out-of-sample evaluation, using new CMIP6 simulations as a proxy for real world historical and future responses. This has enabled us to look at the skill of each method across a range of metrics, which provides an objective assessment of a particular methodological approach.
:::

:::Chapter{headline="Assessing the value added" image=summary.png}
## Assessing the value added

An important output from our EUCP work has been to develop an objective assessment of the value added by using a methodology that uses observations to validate projections. We coordinated a blind common out-of-sample assessment of each method's skill, using new CMIP6 simulations as pseudo-observations and then validated the constrained projections using the future CMIP6 responses.

This is a tough test of the methods as CMIP6 includes process not represented in earlier climate projection and includes some projected changes that lie outside this range. This enabled us to assess to identified where these methods provided more reliable estimates than just taking the raw climate model range.

We have been able to summarise the implied skill of each method. Based on this
out-of-sample analysis, we find that:

* Use of observations leads to improved temperature projections for all methods
* However, little evidence of consistent skill for rainfall

These results also point to where using a particular methodology can actually make the results worse than just using the CMIP spread. Rainfall projections are worse using ASK, whereas CALL showed poor results in the Mediterranean for temperature. These issues relate to the particular properties of the methodologies that make them more or less suitable for some applications.

The summary of the out-of-sample assessment, presented here, provides a guide to where applying one of these methodologies is likely to add value.
:::

:::Chapter{headline=Atlas image=comparing.png}
## Atlas of (un)constrained projections
Given the added skill in these methods, we have been working to make this data
more widely available.

The [EUCP Atlas](https://eucp-project.github.io/) provides a portal for
preprocessed projections for Europe. It allows exploration of the different
methods, comparison betweem multiple views, and answers to frequently asked
questions.

The Atlas has its own DOI:
[10.5281/zenodo.5654741](https://doi.org/10.5281/zenodo.5654741). Source code is
[available on GitHub](https://github.com/eucp-project/).
:::


:::Chapter{headline=Guidance image=example_user.png}
### Example use cases
To provide guidance on how to use the constrained projections, we have worked
out 4 hypothetical use cases.

These use cases are also available in the atlas.
:::

:::Chapter{headline="Data availability" image=zenodo.png}
### Data availability

We have gone to great lengths to provide the data from different methods in a
standardized format. Where possible, we followed CMOR standards and
CF-conventions.

The data is available through Zenodo and can be cited using the information
provided there. Its DOI is
[10.5281/zenodo.5645153](https://doi.org/10.5281/zenodo.5645153)
:::
