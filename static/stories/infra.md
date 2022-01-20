---
id: 4
trl: high
category: EUCP data and products
title: Infrastructure in support of EUropean Climate Prediction
author: P. Kalverla et al. Netherlands eScience Center.
thumbnail: "steroids.png"
---

:::Chapter{headline="Introduction" image="steroids.png"}
## EUCP infrastructure

EUCP aims to provide digital infrastructure in support of its overall objective
of delivering accessible, authoritative and actionable climate information.

The infrastructure should facilitate aggregation and blending of 'raw' climate
data from various sources into high-level data products that are useful for
end-users. To this end, EUCP develops methods for merging and constraining
climate model output, and we strive to make these methods easily reusable.

Storage and compute resources from [SURF](https://www.surf.nl/en) are used for
data exchange during the project, and to develop an initial prototype of the
envisioned infrastructure. For long-term sustainability and public access, we
are leveraging the European climate infrastructure developed by
[IS-ENES](https://portal.enes.org/services).

ESMValTool is seen as a key component of this infrastructure, providing a
protocol for sharing climate analytics workflows, simplifying data access, and
facilitating the development of new methods.
:::

:::Chapter{headline="Shared infrastructure" image="shared_infra.png"}
## IS-ENES

IS-ENES is the InfraStructure for the European Network for Earth System
modelling. Currently, this infrastructure is maintained and further developed
under the IS-ENES3 project.

IS-ENES provides access to climate data through ESGF. It also provides compute
resources, with many commonly used software libraries pre-installed.

In IS-ENES3, data access options are greatly improved, with a complete redesign
of the Climate4Impact portal, as well as access through JupyterHub, among
others.

## IS-ENES & EUCP

EUCP leverages the IS-ENES infrastructure to provide access to its data and
methods. DCPP and CPM data produced within EUCP have been or will be uploaded to
ESGF. Some of our methods have already been integrated into the ESMValTool. We
have also extended the ESMValTool with a Python API so as to make it usable from
within the IS-ENES Jupyter environments.

## More information

- [ENES portal](https://portal.enes.org/)
- [IS-ENES3](https://is.enes.org/)
- [JupyterHub by DKRZ](https://jupyterhub.dkrz.de)
- [ESGF](https://esgf.llnl.gov/mission.html)
:::

:::Chapter{headline="ESMValTool" image="esmvaltool.png"}
## ESMValTool

EMSValTool is *A community diagnostic and performance metrics tool for routine
evaluation of earth system models in CMIP.* It comes with a large collection of
reusable "recipes" that, by their nature, document a climate analytics workflow.
These recipes are quality controlled with both a technical and a scientific
review, and well documented.

By providing common pre-processing functions, ESMValTool helps to standardize
scientific workflows. The tool also tracks provenance information. As such,
ESMValTool facilitates a FAIR and open research process.

## EUCP contributions

New recipes:

* [ClimWIP](https://docs.esmvaltool.org/en/latest/recipes/recipe_climwip.html): Climate model weighting by independence and performance
* [KCS](https://docs.esmvaltool.org/en/latest/recipes/recipe_kcs.html): KNMI climate scenarios
* [...](https://github.com/MetOffice/EUCP_WP5_Lines_of_Evidence): Evaluation of ensemble projections accross projects/scales (work in progress)

Added functionality:

* Added a Python API (see next tab)
* Better support for scientific regions
* Improved multimodel statistics and added ensemble statistics (WIP)
* Improved support for CORDEX data and added support for FPS-convection data (WIP)
* Contributed to, and taught, the [ESMValTool tutorial](https://esmvalgroup.github.io/ESMValTool_Tutorial/)

## More information

* [ESMValTool documentation](https://docs.esmvaltool.org/)
* [ESMValTool on GitHub](https://github.com/ESMValGroup/ESMValTool)
* [ESMValTool on Zenodo](https://zenodo.org/record/5140083)
* [ESMValTool tutorial](https://esmvalgroup.github.io/ESMValTool_Tutorial/)
:::

:::Chapter{headline="EMSValTool on steroids" image="api.png"}
## Bringing ESMValTool to the JupyterLab

By adding a Python API, we have made it possible to use ESMValTool in an
interactive Python session. The user can browse and search through
the available recipes, inspect their documentation, execute the recipes, and
immediately work with the generated output.

This enables a much more intuitive research and development process, where
ESMValTool preprocessor functions can be used from the start, while
usecase-specific code can be written directly in the notebook, until it is ready
to be refactored into an ESMValTool diagnostic script.

The Python API also makes it possible to use ESMValTool in a Jupyter session.
The JupyterHub access developed in IS-ENES3 provides a very user-friendly
interface to the ESGF data and compute resources. ESMValTool now extends this
research infrastructure with access to existing analytics workflows and
standardized pre-processing pipelines.

## More information

* [Documentation](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/api/esmvalcore.api.html)
* [Example notebooks and setup instructions](https://github.com/ESMValGroup/ESMValTool-JupyterLab)
* [Walkthrough video of example noteboook](https://www.youtube.com/watch?v=pY9gWckRQYs)
:::

:::Chapter{headline="Output web pages" image="html_output.png"}
## Output web pages

The new Python API paved the way for automatic generation of HTML reports,
including:

* Description
* Authors/maintainers
* Projects
* References
* Output figures
* Output files
* Provenance information

These reports have been developed under IS-ENES3 funding. Development of a
revamped ESMValTool result browser is also foreseen.
:::

:::Chapter{headline="Data products" image="data_products.png"}
## Custom data products

While the Jupyter interface is very suitable for researchers and developers, end
users typically have different requirements. Therefore, in EUCP, we are
developing a number of prototype web applications that can inform future service
products.

For example, we are working on an [atlas](https://eucp-project.github.io/atlas/)
of constrained vs unconstrained climate projections derived from different EUCP
methods. We will add guidance and further documentation, and iterate on the
design in a process of co-development with users.

While the content of this atlas is currently not coupled to the shared
infrastructure, it would be a natural extension. In fact, multiple groups are
currently experimenting with adding custom *front ends* to ESMValTool output, to
enable interactive output products.

:::Chapter{headline="Storyboards" image="storyboards2.png"}
## Project overview at a glance

Research output comes in many forms. Datasets, scientific publications, improved
models, software implementations, figures, video's, increased inderstanding,
example (web) applications, (technical) reports, et cetera.

Even if all information is publicly available, it is not always easy to find.
This inhibits obtaining a quick yet comprehensive overview of project outputs.

With these storyboards, we attempt to provide such an overview of important
project outputs. The storyboards focus on high-level information, linking to
external sources for more information where appropriate.

We hope they will prove useful.
:::

:::Chapter{headline="Impact" image="impact.png"}
## A long road to impact

A shared infrastructure provides access to both data and compute, and with
libraries like ESMValTool we see the dawn of a new age, where reusability and
reproducibility are axiomatic. This provides a new and (to some extent)
standardized way of sharing codified methods, enabling an efficient scientific
exchange mechanism.

The ESMValTool community has come a long way in establishing a robust
development process which includes automated testing and peer-review of both
technical and scientific aspects.

We believe this is an opportunity for climate services. The developments
described in this storyboard show a pathway from exploratory analysis to routine
evaluation, and from routine evaluation to actionable climate information. In a
sense, it looks similar to a continous integration framework. It is interesting
to consider how this framework can best be exploited in an operational setting.

## Feedback

If you have any additions, corrections, suggestions, thoughts, ideas, or other
kinds of input or feedback, please contact p.kalverla@esciencecenter.nl.
:::
