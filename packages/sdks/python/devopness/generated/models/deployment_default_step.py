"""
Devopness API Python SDK - Painless essential DevOps to everyone

Note:
    This is auto generated by OpenAPI Generator.
    https://openapi-generator.tech
"""

from typing import (
    Required,
    TypedDict,
    Union,
)

from pydantic import Field, StrictStr

from .. import DevopnessBaseModel
from .trigger_event import TriggerEvent, TriggerEventPlain


class DeploymentDefaultStep(DevopnessBaseModel):
    """
    DeploymentDefaultStep

    Attributes:
        value (TriggerEvent):
        human_readable (str): Formatted name of the event
        hint (str): Descriptive text to help users to know what data is stored in the field and optional extra information on how to enter data to the field
    """

    value: TriggerEvent
    human_readable: StrictStr = Field(description="Formatted name of the event")
    hint: StrictStr = Field(
        description="Descriptive text to help users to know what data is stored in the field and optional extra information on how to enter data to the field"
    )


class DeploymentDefaultStepPlain(TypedDict, total=False):
    """
    Plain version of DeploymentDefaultStep.
    """

    value: Required[
        Union[
            TriggerEvent,
            TriggerEventPlain,
        ]
    ]
    human_readable: Required[str]
    hint: Required[str]
