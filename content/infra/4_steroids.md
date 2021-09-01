---
image: infra/api.png
headline: EMSValTool on steroids
---

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
